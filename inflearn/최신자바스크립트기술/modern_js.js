let name = "이름";
let age = 17;

// 1. 객체 담기
/* 변수의 이름을 갖고 자동으로 key: value 만들어줌
 키 값과 변수가 같을 때만 사용가능 */
let person = { name, age };
console.log(person);

// 2. object value값을 변수로 선언
let bts = {
  name2: "방탄소년단",
  num: 7,
};
let { name2, num } = bts;
console.log(name2, num);

// 3. array 내 요소들 각각 변수 선언
let array = [1, 2, 3];

let [a, b, c] = array;
console.log(a, b, c);

let [d, ...rest] = array;
console.log(d);
console.log(rest); // 나머지 전부

// 4. 화살표 함수
/*
this 문법 빼고는 다 됨
스스로 this를 생성할 수 없음

lexical scope
화살표 함수의 this: 함수를 포함하는 있는 context의 this를 이어받음
*/
console.log("화살표 함수 ======================================");
const foo = () => "haha";
const foo2 = () => {
  console.log("화살표 함수");
};
foo2();
const foo3 = () => {
  console.log(this);
};
foo3();
