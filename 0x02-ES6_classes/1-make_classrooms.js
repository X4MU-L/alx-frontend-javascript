import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const numclass = [19, 20, 34];
  const result = [];
  for (const num of numclass) {
    result.push(new ClassRoom(num));
  }
  return result;
}
