import * as vscode from 'vscode';

import {
  registerOpenCurrentFileCommand,
} from './commands/openCurrentFile.command.js';

import {
  registerOpenPreviewCommand,
} from './commands/openPreview.command.js';

import {
  registerRefreshPreviewCommand,
} from './commands/refreshPreview.command.js';

export function registerMarkdownPreview(
  context: vscode.ExtensionContext,
): void {
  context.subscriptions.push(
    registerOpenCurrentFileCommand(
      context,
    ),
  );

  context.subscriptions.push(
    registerOpenPreviewCommand(
      context,
    ),
  );

  context.subscriptions.push(
    registerRefreshPreviewCommand(
      context,
    ),
  );
}