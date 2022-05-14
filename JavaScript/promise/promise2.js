// 햄버거 만들기
let data = "참깨빵위에";
const makeBurger = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
};

makeBurger()
  .then((data) => {
    console.log(data);
    return data + "순쇠고기 패티 2장";
  })
  .then((data) => {
    console.log(data);
    return data + "특별한 소스";
  })
  .then((data) => {
    console.log(data);
    return data + "양상추";
  })
  .then((data) => {
    console.log(data);
    return data + "치즈 피클 양파까지";
  });
