let names = ["a", "b", "c", "d", "e", "f", "g"];
let ceoList = [
  { name: "Larry Page", age: 23, ceo: true },
  { name: "Tim Cook", age: 40, ceo: true },
  { name: "Elon Musk", age: 55, ceo: true },
];
// 0. 배열함수는 매개변수로 함수를 받음

// 1. forEach()
// 자동으로 item, index를 순회
// 반환값이 없음
names.forEach((item, index) => {
  console.log(item, index);
});

// 2. map()
// array을 반환
const mapData = ceoList.map((item) => {
  return item.age;
});
console.log("map: ", mapData);

// 3. filter()
// 조건에 대해 참인 값만 반환
const filterData = ceoList.filter((item) => {
  return item.age == 23;
});
console.log(filterData);

// 4. some()
// 조건 중에 하나라도 맞으면 true 반환
const someData = ceoList.some((item) => {
  return item.age == 23;
});
console.log("some= ", someData);

// 5. every()
// 조건 모두 참이면 true 반환

// 6. find()
// find는 값을 반환(filter 는 결과를 배열에 담아 반환)
// find는 첫번째로 나오는 하나만 반환

// 7. findIndex()
// 인덱스 번호 찾기