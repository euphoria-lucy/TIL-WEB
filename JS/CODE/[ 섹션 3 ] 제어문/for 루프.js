// for문 사용법

// 괄호 안의 3개의 식에 따른 반복수행
// 💡 변수이므로 let이 사용됨
for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 0; i < 5; ) {
  console.log(i++); // ++i로 바꿔볼 것
}

for (let i = 10; i >= 0; i -= 2) {
  console.log(i);
}

// 둘 이상의 변수 사용
for (let x = 0, y = 10; x <= y; x++, y--) {
  console.log(x, y);
}

for (let x = true, y = 0, z = 0; y * z < 10; x = !x, x ? y++ : z++) {
  console.log(y, z);
}

// 무한루프
// let x = 0;

// for (;;) {
//   console.log(x);
// }

// console.log('출력 안됨');

// let x = 0;

// for (;;) {
//   console.log(x);
// }

// console.log('출력 안됨');

// 객체와 배열의 for문
// 객체
const lunch = {
  name: "라면",
  taste: "매운맛",
  kilocalories: 500,
  cold: false,
};

for (const key in lunch) {
  // 💡 변할 것이 아니므로 const 사용
  console.log(key, ":", lunch[key]);
}

// 키의 이름은 자유롭게 사용 가능
for (const k in lunch) {
  console.log(k, ":", lunch[k]);
}

// 배열
const list = [1, "가나다", false, null];

for (const item of list) {
  console.log(item);
}
for (const el of list) {
  console.log(el);
}

// 문자열 역시 이터러블이므로 사용 가능
for (const letter of "안녕하세요~") {
  console.log(letter);
}

// for ... of 문의 장점
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ⚠️ 변수(i)를 사용하므로 위험요소 존재
for (let i = 0; i < numbers.length; i++) {
  // 이곳에 i를 변경하는 코드가 들어간다면...
  console.log(numbers[i]);
}

// ⭐️ 변수를 사용하지 않음으로 보다 안전
for (const num of numbers) {
  console.log(num);
}

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [];

for (let num of numbers1) {
  num++; // ⚠️ 복사된 값. let 사용 주목
  numbers2.push(num + 1);
}
console.log(numbers1, numbers2);

for (let i = 0; i < numbers1.length; i++) {
  numbers1[i]++; // ⚠️ 실제 값에 인덱스로 접근 - 원본 배열의 내용 변경
}
console.log(numbers1, numbers2);

// continue와 break
// continue
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}

console.log("for 루프 종료");

// break
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}

console.log("for 루프 종료");

// label
outer: for (let i = 1; i < 10; i++) {
  inner: for (let j = 1; j < 10; j++) {
    if (j % 2 === 0) continue inner;
    if (i * j >= 30) continue outer;

    if (j > 8) break inner;
    if (i - j > 7) break outer;

    console.log(i, j, i * j);
  }
}
