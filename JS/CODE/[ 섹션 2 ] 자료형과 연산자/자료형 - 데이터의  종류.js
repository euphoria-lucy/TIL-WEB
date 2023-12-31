// 원시 자료형
const a = true,
  b = 123.45,
  c = "안녕하세요!";

// typeof 연산자
console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);

let d;
console.log(d, typeof d);

d = null;
console.log(d, typeof d); // ⚠️ 'object' 반환

const e = Symbol("hello");
console.log(typeof e); // 이건 나중에

// boolean 불리언
let isEmployed = true;
let isMarried = false;

console.log("직업 있음:", isEmployed);
console.log("기혼:", isMarried);

const ca = 1 > 2;
const cb = 1 < 2;

console.log(ca, typeof ca);
console.log(cb, typeof cb);

// number 숫자
let integer = 100;
let real = 12.34;
let negative = -99;

console.log(integer, real, negative);

// string 문자열
let first_name = "Brendan";
let last_name = "Eich";
let description = `미국의 프로그래머로
자바스크립트 언어를 만들었으며
모질라의 CEO와 CTO를 역임했다.`;

console.log(first_name, last_name);
console.log(description);

console.log(typeof typeof true, typeof typeof 123.45, typeof typeof "Hello");

// undefined
let x;
console.log(typeof x);

// null
let nx;
console.log("값 넣기 전", typeof nx);

nx = null;
console.log("null값 넣은 후", typeof nx);

let ny = null;
console.log(typeof null, typeof ny);

// null 여부는 아래와 같이 확인할 것
console.log(nx === null);
