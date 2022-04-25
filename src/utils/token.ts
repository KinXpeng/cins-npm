const get = (TOKEN_KEY:string) => localStorage.getItem(TOKEN_KEY);
const set = (TOKEN_KEY:string, token:string) => localStorage.setItem(TOKEN_KEY, token);
const clear = (TOKEN_KEY:string) => localStorage.removeItem(TOKEN_KEY);

export const token = {
  get,
  set,
  clear,
};
