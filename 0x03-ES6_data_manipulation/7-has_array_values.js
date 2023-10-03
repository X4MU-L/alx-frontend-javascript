export default function hasValuesFromArray(setObject, value) {
  const checkAllset = (value) => setObject.has(value);

  return value.every(checkAllset);
}
