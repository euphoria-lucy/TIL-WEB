// 데이터를 담는 곳
console.log("Hello,", "철수");

// 값들을 주머니에 담아 사용하기
const SALUTATION = "Hello,";
let person = "철수";

console.log(SALUTATION, person);

person = "영희";

console.log(SALUTATION, person);

// 변수
// 변수를 선언 (주머니 만듦)만 한 뒤 값을 넣음
let x;
console.log(x);

x = 1;
console.log(x);

// 변수 선언과 값 넣기를 동시에 가능 (초기화 - 일반적인 사용법)
let y = 1;
console.log(y);

// 다른 변수가 같은 값을 가질 때
let k = 1;
let j = k; // k가 가진 값을 j에 할당

console.log(k, j);

// a에 1을 넣은 뒤 값을 'Hello!로 변경
let a = 1;
let b = x;
console.log("변경 전", a, b);

a = "Hello!";
console.log("변경 후", a, b);

// 이미 만들어진 주머니를 다시 만들 (재선언) 수 없음
let c = 1;
console.log("첫 선언", c);

let d = 2;
console.log("다시 선언", d);

// 선언하기 전 코드를 사용할 수는 없음
console.log(xyz);
let xyz = 1;

// 상수 (constant)
// 상수를 선언과 동시에 초기화
const PI = 3.14;
console.log("원주율:", PI);

// 선언만 하는 것 불가
// const PI1;
// PI1 = 3.14;

// 상수는 값의 변경 불가
const PI1 = 3.14;
PI1 = 3.14159;

// 여러 변수와 상수 동시에 선언
// let a = 1;
// let b = 2;
// ...

let e = 1,
  f = 2,
  g = 3;
const X = 4,
  Y = 5,
  Z = 6;

console.log(e, f, g);
console.log(X, Y, Z);

// 식별자
// 예약어 (reserved words)
