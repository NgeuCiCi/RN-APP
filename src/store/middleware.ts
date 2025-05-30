import { middlewareLogin } from './services/auth/services';
import { middlewareVersion } from './services/version/services';

export const listMiddleware = [middlewareLogin, middlewareVersion];
