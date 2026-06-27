export interface MarkdownTemplateProps {
  body: string;
  stylesUri: string;
  scriptUri: string;
  nonce: string;
  cspSource: string;
}

export function buildMarkdownTemplate({
  body,
  stylesUri,
  scriptUri,
  nonce,
  cspSource,
}: MarkdownTemplateProps): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />

        <meta
          http-equiv="Content-Security-Policy"
          content="
            default-src 'none';
            img-src ${cspSource} https: data:;
            style-src ${cspSource} 'unsafe-inline';
            script-src 'nonce-${nonce}';
            font-src ${cspSource};
          "
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        <link
          rel="stylesheet"
          href="${stylesUri}"
        />

        <title>Markdown Preview</title>
      </head>

      <body class="markdown-body">
        ${body}

        <script
          nonce="${nonce}"
          src="${scriptUri}"
        ></script>
      </body>
    </html>
  `;
}