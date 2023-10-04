export default function updateUniqueItems(mapObject) {
  if (!(mapObject instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of mapObject) {
    if (value === 1) {
      mapObject.set(key, 100);
    }
  }
}
