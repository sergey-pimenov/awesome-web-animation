export function findByName(files, name) {
  if (!Array.isArray(files) || !name) {
    return null;
  }

  return files.find(file => file && file.name === name) || null;
}

export function findBundleFile(files, fileName) {
  const direct = findByName(files, fileName);
  if (direct) {
    return direct;
  }

  const directory = findByName(files, 'dist') || findByName(files, 'bundled');
  if (directory && Array.isArray(directory.files)) {
    return findByName(directory.files, fileName);
  }

  return null;
}
