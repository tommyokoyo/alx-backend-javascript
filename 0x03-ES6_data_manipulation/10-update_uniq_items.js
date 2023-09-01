function updateUniqueItems(inputMap) {
  if (!(inputMap instanceof Map)) throw new Error('Cannot process');
  for (const [key] of inputMap) {
    if (inputMap.get(key) === 1) inputMap.set(key, 100);
  }
  return inputMap;
}

export default updateUniqueItems;
