interface StorageHandler {
  getItem<T>(key: string): T | null;
  setItem<T>(key: string, value: T): void;
  removeItem(key: string): void;
  hasItem(key: string): true | false;
}

export class SessionStorageHandler implements StorageHandler {
  getItem<T>(key: string): T | null {
    const value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  setItem<T>(key: string, value: T): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }

  hasItem(key: string) {
    return sessionStorage.getItem(key) !== null;
  }
}

export const getSessionStorageHandler = () => {
  return new SessionStorageHandler();
};
