enum LogLevel {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3
  }
  
  export class Logger {
    private level: LogLevel = LogLevel.INFO;
  
    constructor(level?: LogLevel) {
      if (level !== undefined) {
        this.level = level;
      }
    }
  
    setLevel(level: LogLevel): void {
      this.level = level;
    }
  
    debug(message: string, ...args: any[]): void {
      if (this.level <= LogLevel.DEBUG) {
        console.log(`[DEBUG] ${message}`, ...args);
      }
    }
  
    info(message: string, ...args: any[]): void {
      if (this.level <= LogLevel.INFO) {
        console.log(`[INFO] ${message}`, ...args);
      }
    }
  
    warn(message: string, ...args: any[]): void {
      if (this.level <= LogLevel.WARN) {
        console.warn(`[WARN] ${message}`, ...args);
      }
    }
  
    error(message: string, ...args: any[]): void {
      if (this.level <= LogLevel.ERROR) {
        console.error(`[ERROR] ${message}`, ...args);
      }
    }
  }
  
  // Export a default logger instance
  export const logger = new Logger();
  export default logger;
  
  console.log('Logger initialized');