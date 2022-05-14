// const helloPromise = new Promise((resolve, reject) => {
//   console.dir(resolve);
//   console.dir(reject);
// });

// console.dir(Promise);

const promiseSetTimeOut = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
};

promiseSetTimeOut(1000).then(() => {
  console.log("1초후 실행");
});

const PromiseSetTimeoutReject = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(1);
    }, time);
  });
};

PromiseSetTimeoutReject(1000)
  .then((data) => {
    console.log("fulfilled");
    console.log(data);
  })
  .catch((data) => {
    console.log("rejected");
    console.log(data);
  });
