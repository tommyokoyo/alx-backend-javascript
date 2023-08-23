import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName = '', lastName = '', fileName = '') {
  const user = signUpUser(firstName, lastName).then((value) => ({
    status: 'fulfilled',
    value,
  }));

  const photoUpload = uploadPhoto(fileName).catch((error) => ({
    status: 'rejected',
    value: error.toString(),
  }));

  return Promise.resolve([user, photoUpload]);
}
