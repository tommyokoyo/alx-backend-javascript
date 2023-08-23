import loadBalancer from './7-load_balancer';

const ukSuccess = 'Downloading from UK is faster';
const frSuccess = 'Downloading from FR is faster';

const promiseUk = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, ukSuccess);
});

const promiseUkSlow = new Promise((resolve, reject) => {
  setTimeout(resolve, 400, ukSuccess);
});

const promiseFR = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, frSuccess);
});

const test = async () => {
  console.log(await loadBalancer(promiseUk, promiseFR));
  console.log(await loadBalancer(promiseUkSlow, promiseFR));
};

test();
