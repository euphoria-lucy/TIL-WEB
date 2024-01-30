// // 중첩된 함수
// function outer () {
//   const name = '바깥쪽'
//   console.log(name, '함수');

//   function inner () {
//     const name = '안쪽'
//     console.log(name, '함수');
//   }
//   inner();
// }

// outer();

// function addMulSub (x, y) {
//   const add = (a, b) => a + b;
//   const sub = (a, b) => a - b;
//   const mul = (a, b) => a * b;

//   return sub(mul(add(x, y), y), y);
// }

// console.log(addMulSub(8, 3));

// 팩토리얼 함수
// function fact(x) {
//   return x === 0 ? 1 : x * fact(x - 1);
// }

// console.log(
//   fact(1),
//   fact(2),
//   fact(3),
//   fact(4)
// )

// 즉시 실행 함수
// (function () {
//   console.log('IIFE');
// })();

// const initialMessage = (function () {
//   // ⚠️ var를 사용함에 주목
//   var month = 8;
//   var day = 15;
//   var temps = [28, 27, 27, 30, 32, 32, 30, 28];
//   var avgTemp = 0;
//   for (const temp of temps) {
//     avgTemp += temp
//   }
//   avgTemp /= temps.length;

//   return `${month}월 ${day}일 평균기온은 섭씨 ${avgTemp}도입니다.`;
// })();

// console.log(initialMessage);
// console.log(month);

// let initialMessage;

// {
//   const month = 8;
//   const day = 15;
//   const temps = [28, 27, 27, 30, 32, 32, 30, 28];
//   let avgTemp = 0;
//   for (const temp of temps) {
//     avgTemp += temp
//   }
//   avgTemp /= temps.length;

//   initialMessage = `${month}월 ${day}일 평균기온은 섭씨 ${avgTemp}도입니다.`;
// };

// console.log(initialMessage);
// console.log(month); // 새로고침 후 const를 var로 바꾸고 실행해볼 것

// 불변성
// let x = 1;
// let y = {
//   name: '홍길동',
//   age: 15
// }
// let z = [1, 2, 3];

// function changeValue (a, b, c) {
//   a++;
//   b.name = '전우치';
//   b.age++;
//   c[0]++;

//   console.log(a, b, c);
// }

// changeValue(x, y, z);

// console.log(x, y, z);
