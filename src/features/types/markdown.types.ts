import * as vscode from 'vscode';

export interface MarkdownDocument {
  uri: vscode.Uri;
  fileName: string;
  content: string;
}

export interface RenderedMarkdown {
  html: string;
}

export interface PreviewOptions {
  title?: string;
}