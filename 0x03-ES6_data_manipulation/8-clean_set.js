export default function cleanSet(setObject, startstring) {
  if (startstring === undefined || startstring.length === 0) {
    return '';
  }
  const result = [];

  if (setObject instanceof Set) {
    for (const [item] of setObject.entries()) {
      if (item.startsWith(startstring)) {
        result.push(item.slice(startstring.length));
      }
    }
  }
  return result.join('-');
}
