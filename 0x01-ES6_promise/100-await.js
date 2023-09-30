import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
  const res = await Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => ({ photo, user }))
    .catch(() => ({ photo: null, user: null }));
  return res;
};
export default asyncUploadUser;
