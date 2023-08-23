/* 6-final-user.js code */
/*
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName = '', lastName = '', fileName = '') {
  const user = signUpUser(firstName, lastName).then((value) => ({
    status: 200,
    value,
  }));

  const photoUpload = uploadPhoto(fileName).catch((error) => ({
    status: 404,
    value: error.toString(),
  }));

  return Promise.resolve([user, photoUpload]);
}
 */

const promises = [
  Promise.resolve('Fulfiled promise'),
  // eslint-disable-next-line prefer-promise-reject-errors
  Promise.reject('Rejected Promise'),
  Promise.resolve('Another fullfiled promise'),
];

Promise.allSettled(promises)
  .then((results) => {
    console.log(results);
  });
