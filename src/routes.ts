/**
 * An array of routes that don't require authentication.
 * @type {string[]}
 */
export const publicRoutes = ["/", "/auth/verify-email"];

/**
 * An array of routes that don't allow
 * already authenticated users.
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];

/**
 * The prefix for API authentication routes.
 * These routes are needed for all users
 * and should not be blocked.
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/";
