let names = ["a", "b", "c", "d", "e", "f", "g"];
// 0. 배열함수는 매개변수로 함수를 받음

// 1. forEach()
// 자동으로 item, index를 순회
// 반환값이 없음
names.forEach((item, index) => {
  console.log(item, index);
});

// 2. map()
// array을 반환
const mapData = names.map((item) => {
  return item;
});
console.log(mapData);
