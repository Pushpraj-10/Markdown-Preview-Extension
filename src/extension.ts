import * as vscode from 'vscode';

import {
  registerMarkdownPreview,
} from './features/index.js';

export function activate(
  context: vscode.ExtensionContext,
) {
  registerMarkdownPreview(context);
}

export function deactivate() {}