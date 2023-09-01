function cleanSet(set, startString) {
  if (!startString || set === 'object' || startString !== 'string') return '';

  const newArray = Array.from(set);

  const filteredValues = newArray.filter((value) => value.startsWith(startString));

  const cleanValues = filteredValues.map((value) => value.slice(startString.length));

  return cleanValues.join('-');
}

export default cleanSet;
