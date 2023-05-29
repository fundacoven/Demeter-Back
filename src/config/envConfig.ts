export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  jwt_secret: process.env.JWT_SECRET || '12345',
  db_host: process.env.DB_HOST || 'localhost',
  db_username: process.env.DB_NAME,
  db_password: process.env.DB_PASSWORD,
  db_port: process.env.DB_PORT || 5432,
  port: +process.env.PORT || 3000,
});
