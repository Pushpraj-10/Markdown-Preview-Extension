import * as vscode from 'vscode';

import {
  MarkdownDocument,
} from './types/markdown.types.js';

export class MarkdownDocumentManager {
  getActiveDocument():
    | MarkdownDocument
    | undefined {
    const editor =
      vscode.window.activeTextEditor;

    if (!editor) {
      return;
    }

    const document = editor.document;

    if (
      document.languageId !== 'markdown'
    ) {
      return;
    }

    return {
      uri: document.uri,
      fileName: document.fileName,
      content: document.getText(),
    };
  }

  isMarkdownFile(
    document: vscode.TextDocument,
  ): boolean {
    return (
      document.languageId === 'markdown'
    );
  }
}