import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const {
  NODE_ENV,
  PORT,
  SECRET_KEY,
  LOG_FORMAT,
  LOG_DIR,
  ORIGIN,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASS,
  DB_NAME,
  DB_SSL_MODE,
  DB_HOST_POS,
  DB_PORT_POS,
  DB_USER_POS,
  DB_PASS_POS,
  DB_NAME_POS,
  DB_HOST_MASTER,
  DB_PORT_MASTER,
  DB_USER_MASTER,
  DB_PASS_MASTER,
  DB_NAME_MASTER,
} = process.env;
