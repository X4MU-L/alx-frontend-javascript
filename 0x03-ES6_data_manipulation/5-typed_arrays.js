export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw Error('Position outside range');
  }
  const byteArray = new DataView(new ArrayBuffer(length));
  byteArray.setInt8(position, value);
  return byteArray;
}
