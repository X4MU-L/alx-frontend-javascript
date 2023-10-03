export default function cleanSet(setObject, startstring) {
  const { length } = startstring;
  const result = [];

  for (const [item] of setObject.entries()) {
    if (item.startsWith(startstring) && length) {
      result.push(item.slice(length));
    }
  }
  return result.join('-');
}
