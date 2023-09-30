import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(filename),
  ]).then((result) => {
    const values = [];
    for (const promise of result) {
      values.push({
        status: promise.status,
        value: promise.value ? promise.value : promise.reason,
      });
    }
    return values;
  });
}
