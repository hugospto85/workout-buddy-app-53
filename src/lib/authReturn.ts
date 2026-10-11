const KEY = 'auth-return-to';

const safe = (p: string | null) => (p && p.startsWith('/') && !p.startsWith('//') ? p : '/');

export const setReturnPath = (path: string) => localStorage.setItem(KEY, path);

/** Reads the return path without clearing it (used for OAuth/email redirects). */
export const peekReturnPath = () => safe(localStorage.getItem(KEY));

/** Reads and clears the return path. */
export const getReturnPath = () => {
  const p = peekReturnPath();
  localStorage.removeItem(KEY);
  return p;
};
