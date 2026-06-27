export const COMMANDS = {
  OPEN_PREVIEW: 'githubMarkdown.openPreview',
  OPEN_CURRENT_FILE: 'githubMarkdown.openCurrentFile',
  REFRESH_PREVIEW: 'githubMarkdown.refreshPreview',
} as const;

export type Command =
  (typeof COMMANDS)[keyof typeof COMMANDS];