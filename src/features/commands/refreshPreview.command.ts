import * as vscode from 'vscode';

import { MarkdownPanel } from '../MarkdownPanel.js';
import { MarkdownRenderer } from '../MarkdownRenderer.js';
import { MarkdownDocumentManager } from '../MarkdownDocumentManager.js';

export function registerRefreshPreviewCommand(
  context: vscode.ExtensionContext,
): vscode.Disposable {
  return vscode.commands.registerCommand(
    'githubMarkdown.refreshPreview',
    () => {
      const panel =
        MarkdownPanel.createOrShow(
          context.extensionUri,
          new MarkdownDocumentManager(),
          new MarkdownRenderer(),
        );

      panel.refresh();
    },
  );
}