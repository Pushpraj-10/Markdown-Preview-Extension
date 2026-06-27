import * as vscode from 'vscode';

import { createNonce } from '../shared/utils/nonce.util.js';
import { getWebviewUri } from '../shared/utils/uri.util.js';
import { buildMarkdownTemplate } from './templates/markdown.template.js';

export class WebviewBuilder {
  constructor(
    private readonly extensionUri: vscode.Uri,
  ) {}

  build(
    webview: vscode.Webview,
    html: string,
  ): string {
    const nonce = createNonce();

    const stylesUri = getWebviewUri(
      webview,
      this.extensionUri,
      'src',
      'webview',
      'assets',
      'github-markdown.css',
    );

    const scriptUri = getWebviewUri(
      webview,
      this.extensionUri,
      'src',
      'webview',
      'assets',
      'main.js',
    );

    return buildMarkdownTemplate({
      body: html,
      stylesUri: stylesUri.toString(),
      scriptUri: scriptUri.toString(),
      nonce,
      cspSource: webview.cspSource,
    });
  }
}