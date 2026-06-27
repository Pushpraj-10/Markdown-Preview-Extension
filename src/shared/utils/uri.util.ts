import * as vscode from 'vscode';

export function getWebviewUri(
  webview: vscode.Webview,
  extensionUri: vscode.Uri,
  ...pathSegments: string[]
): vscode.Uri {
  const resource = vscode.Uri.joinPath(
    extensionUri,
    ...pathSegments,
  );

  return webview.asWebviewUri(resource);
}