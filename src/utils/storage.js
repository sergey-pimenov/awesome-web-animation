export function readCache(key) {
  if (!key) {
    return null;
  }

  try {
    const raw = localStorage.getItem(key);
    if (!raw || raw === 'undefined') {
      return null;
    }
    return JSON.parse(raw);
  } catch (error) {
    return null;
  }
}

export function writeCache(key, value) {
  if (!key || value == null) {
    return;
  }

  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // Ignore quota / private-mode failures.
  }
}
