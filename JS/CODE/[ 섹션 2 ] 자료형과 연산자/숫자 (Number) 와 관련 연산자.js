// 숫자 자료형으로 표현되는 것

// 양과 음의 정수와 실수
// 자바스크립트에는 정수와 실수의 자료형이 따로 있지 않음
let integer = 100;
let real = 1.234;
let negative = -5.67;

console.log(typeof integer, typeof real, typeof negative);

// 무한대
let x = 1 / 0;
console.log(x, typeof x);

// 무한대에는 양음이 있음
console.log(-x, typeof -x);

let y = -1 / 0;
console.log(y, typeof y);

let z = Infinity;
console.log(z, typeof z);

// 숫자가 아닌 것 Not a Number
let nx = 1 / "abc";
let ny = 2 * "가나다";
let nz = NaN;

console.log(nx, typeof nx);
console.log(ny, typeof ny);
console.log(nz, typeof nz);

// 주어진 값이 NaN인지 여부 확인하는 방법
let nanx = 1 / "abc";

console.log(
  nanx,
  nanx == NaN,
  nanx === NaN,
  isNaN(nanx), // 숫자가 아닐 시 true
  Number.isNaN(nanx) // 보다 엄격한 버전
);

// isNaN과 Number.isNaN의 차이
console.log(typeof "1", isNaN("1"), Number.isNaN("1")); // 특정 숫자로 변환 가능한 문자

console.log(typeof true, isNaN(true), Number.isNaN(true)); // true는 1, false는 0으로 변환됨

console.log(typeof "a", isNaN("a"), Number.isNaN("a")); // ⚠️ 특정 숫자로 변환 불가인 문자의 경우 차이

console.log(typeof (1 / "a"), isNaN(1 / "a"), Number.isNaN(1 / "a")); // NaN값인 경우

// 연산자
// 산술 연산자
// 이항 산술 연산자
// 값 반환
let px = 10;
let py = px * 10;

console.log(py);

console.log(
  py + 1, // 덧샘
  py - 1, // 뺄셈
  py * 2, // 곱셈
  py / 5, // 나눗셈
  py % 3, // 나머지
  py ** 2 // 제곱
);

// 부수효과 없음
console.log(py);

// 널리 사용되는 홀수와 짝수의 판별법
console.log("홀수 ", 123 % 2, 55 % 2, 999 % 2);
console.log("짝수 ", 2 % 2, 100 % 2, 8 % 2);

// 괄호의 사용
console.log(4 * 1 + 2, 4 * (1 + 2), 4 * -(1 + 2), -(4 * -(1 + 2)));

// 단항 산술 연산자
let ox = 10;

// 값을 반환부터 하고 증가
console.log("1.", ox++, ox);

// 값을 증가부터 하고 반환
console.log("2.", ++ox, ox);

let oox = 3;
let ooy = 4;

// 💡 부수효과가 일어나는 시점
console.log(oox-- * --ooy, oox, ooy);

let ooox = 1;
console.log(+ooox, -ooox, -(-ooox), -ooox++, -ooox * -1);

// 💡 문자열을 숫자로 바꿈
console.log(
  +"100",
  -"100",
  +"abc" // 숫자로 변환될 수 없는 문자열
);

let onx = "100";
console.log(onx++, onx);

let ony = "100";
console.log(--ony, ony);

// 숫자로 변환될 수 없는 문자열
// 첫 번째 값 주의 - 증가 이전에도 변환
let onz = "abc";
console.log(onz++, onz);

// 할당 산술 연산자
let ax = 3;

ax += 2;
console.log(ax);

ax -= 3;
console.log(ax);

ax *= 12;
console.log(ax);

ax /= 3;
console.log(ax);

ax %= 5;
console.log(ax);

ax **= 4;
console.log(ax);

let ay = 25;

console.log(
  (ay **= 0.5), // 할당된 결과 반환
  ay
);
