export default function signUpUser(firstname, lastname) {
  return Promise.resolve({
    firstname,
    lastname,
  });
}
