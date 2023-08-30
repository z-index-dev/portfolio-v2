export const setSessionStorageItem = (key: string, value: string) => {
  if (typeof window !== undefined) {
    window.sessionStorage.setItem(key, value);
  }
};

export const getSessionStorageItem = (key: string) => {
  if (typeof window !== undefined) {
    return window.sessionStorage.getItem(key);
  }
};

export const setLocalStorageItem = (key: string, value: string) => {
  if (typeof window !== undefined) {
    window.localStorage.setItem(key, value);
  }
};

export const getLocalStorageItem = (key: string) => {
  if (typeof window !== undefined) {
    return window.localStorage.getItem(key);
  }
};
