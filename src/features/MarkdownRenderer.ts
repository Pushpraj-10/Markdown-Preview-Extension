import { marked } from 'marked';

export class MarkdownRenderer {
  constructor() {
    marked.setOptions({
      gfm: true,
      breaks: true,
    });
  }

  render(markdown: string): string {
    return marked.parse(markdown) as string;
  }
}