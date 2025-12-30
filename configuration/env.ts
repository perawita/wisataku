const PHONE = process.env.NEXT_PUBLIC_PHONE ?? '6281234567890';
const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME ?? 'Wisataku';
const EMAIL = process.env.NEXT_PUBLIC_EMAIL ?? 'info@wisataku.com';
const FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_URL ?? 'http://localhost:3000';

// Config final
export const env = {
  PHONE: PHONE,
  APP_NAME: APP_NAME,
  EMAIL: EMAIL,
  FRONTEND_URL: FRONTEND_URL,
} as const;