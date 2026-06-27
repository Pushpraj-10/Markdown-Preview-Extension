export class LoggerService {
  private readonly prefix = '[GitHub Markdown Preview]';

  info(message: string): void {
    console.log(`${this.prefix} ${message}`);
  }

  warn(message: string): void {
    console.warn(`${this.prefix} ${message}`);
  }

  error(message: string, error?: unknown): void {
    console.error(`${this.prefix} ${message}`, error);
  }
}