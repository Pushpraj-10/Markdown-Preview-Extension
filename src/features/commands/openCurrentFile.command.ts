import * as vscode from 'vscode';

import { MarkdownPanel } from '../MarkdownPanel.js';
import { MarkdownRenderer } from '../MarkdownRenderer.js';
import { MarkdownDocumentManager } from '../MarkdownDocumentManager.js';

export function registerOpenCurrentFileCommand(
  context: vscode.ExtensionContext,
): vscode.Disposable {
  return vscode.commands.registerCommand(
    'githubMarkdown.openCurrentFile',
    () => {
      const documentManager =
        new MarkdownDocumentManager();

      const renderer =
        new MarkdownRenderer();

      const document =
        documentManager.getActiveDocument();

      if (!document) {
        vscode.window.showInformationMessage(
          'No active Markdown file found.',
        );

        return;
      }

      const panel =
        MarkdownPanel.createOrShow(
          context.extensionUri,
          documentManager,
          renderer,
        );

      panel.show(document.content);
    },
  );
}