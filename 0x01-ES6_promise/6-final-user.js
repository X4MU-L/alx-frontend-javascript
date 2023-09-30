import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(filename),
  ]).then((result) => {
    const values = [];
    for (const promise of result) {
      if (promise.status === 'fulfilled') {
        values.push({
          status: promise.status,
          value: promise.value,
        });
      } else {
        values.push({
          status: promise.status,
          value: `${promise.reason}`,
        });
      }
    }
    return values;
  });
}
