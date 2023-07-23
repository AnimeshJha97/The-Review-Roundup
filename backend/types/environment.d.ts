export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
        PORT : string
        NODE_ENV : 'DEVELOPMENT' | 'PRODUCTION'
        DATABASE : string
        DATABASE_PASSWORD : string
        JWT_SECRET : string
        JWT_EXPIRES_TIME : string
        COOKIE_EXPIRES_TIME : string
        
        SMTP_HOST : string
        SMTP_PORT : string
        SMTP_EMAIL : string
        SMTP_PASSWORD : string
        SMTP_FROM_EMAIL : string
        SMTP_FROM_NAME : string
    }
  }
}