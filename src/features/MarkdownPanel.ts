import * as vscode from 'vscode';

import { MarkdownRenderer } from './MarkdownRenderer.js';
import { MarkdownDocumentManager } from './MarkdownDocumentManager.js';
import { WebviewBuilder } from '../webview/WebviewBuilder.js';

export class MarkdownPanel {
  private static currentPanel:
    | MarkdownPanel
    | undefined;

  private readonly panel: vscode.WebviewPanel;

  private constructor(
    panel: vscode.WebviewPanel,
    private readonly documentManager: MarkdownDocumentManager,
    private readonly renderer: MarkdownRenderer,
    private readonly webviewBuilder: WebviewBuilder,
  ) {
    this.panel = panel;

    this.panel.onDidDispose(() => {
      MarkdownPanel.currentPanel = undefined;
    });
  }

  static createOrShow(
    extensionUri: vscode.Uri,
    documentManager: MarkdownDocumentManager,
    renderer: MarkdownRenderer,
  ): MarkdownPanel {
    const column =
      vscode.window.activeTextEditor?.viewColumn;

    if (MarkdownPanel.currentPanel) {
      MarkdownPanel.currentPanel.panel.reveal(
        column,
      );

      return MarkdownPanel.currentPanel;
    }

    const panel =
      vscode.window.createWebviewPanel(
        'githubMarkdownPreview',
        'Markdown Preview',
        column ?? vscode.ViewColumn.Beside,
        {
          enableScripts: true,
          retainContextWhenHidden: true,
        },
      );

    const webviewBuilder =
      new WebviewBuilder(extensionUri);

    MarkdownPanel.currentPanel =
      new MarkdownPanel(
        panel,
        documentManager,
        renderer,
        webviewBuilder,
      );

    return MarkdownPanel.currentPanel;
  }

  show(markdown: string): void {
    const html =
      this.renderer.render(markdown);

    this.panel.webview.html =
      this.webviewBuilder.build(
        this.panel.webview,
        html,
      );
  }

  refresh(): void {
    const document =
      this.documentManager
        .getActiveDocument();

    if (!document) {
      return;
    }

    this.show(document.content);
  }
}