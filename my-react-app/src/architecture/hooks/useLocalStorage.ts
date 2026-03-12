import { useState } from 'react';

// Generic custom hook — T is inferred from the initialValue type
// Usage: const [name, setName] = useLocalStorage('name', '')
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    // Lazy initializer: runs only on first render
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      console.error('useLocalStorage: failed to write', key);
    }
  };

  // "as const" preserves the tuple type [T, (value: T) => void]
  return [storedValue, setValue] as const;
}

export default useLocalStorage;
