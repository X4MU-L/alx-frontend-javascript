export default function updateUniqueItems(mapObject) {
  let updated = false;
  for (const [key, value] of mapObject) {
    if (value === 1) {
      updated = true;
      mapObject.set(key, 100);
    }
  }
  if (!updated) {
    throw Error('Cannot process');
  }
}
