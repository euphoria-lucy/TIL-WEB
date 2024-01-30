// // ⭐️ 함수의 자료형
// function addNumbers(a, b) {
//   return a + b;
// }
// console.log(typeof addNumbers);

// // 할당
// function isOddNum (number) {
//   console.log(
//     (number % 2 ? '홀' : '짝')
//     + '수입니다.'
//   );
//   return number % 2 ? true : false;
// };

// const checkIfOdd = isOddNum; // 뒤에 괄호 없음 유의

// console.log(checkIfOdd(23));

// let x = 7, y = 3;

// let func1 = (a, b) => a + b;
// let func2 = (a, b) => a - b;
// console.log(func1(x, y), func2(x, y));

// func1 = func2
// console.log(func1(x, y), func2(x, y));

// // 객체와 배열의 값으로도 할당 가능
// let person = {
//   name: '홍길동',
//   age: 30,
//   married: true,
//   introduce: function (formal) {
//     return formal
//     ? '안녕하십니까. 홍길동 대리라고 합니다.'
//     : '안녕하세요, 홍길동이라고 해요.';
//   }
// };

// console.log(person.introduce(true));
// console.log(person.introduce(false));

// let arithmetics = [
//   (a, b) => a + b,
//   (a, b) => a - b,
//   (a, b) => a * b,
//   (a, b) => a / b
// ];

// for (arm of arithmetics) {
//   console.log(arm(5, 3));
// }

// // 객체에 함수 프로퍼티를 포함할 때
// let person = {
//   name: '홍길동',
//   age: 30,
//   married: true,
//   introduce: function () {
//     return `저는 ${this.name}, ${this.age}살이고 `
//     + `${this.married ? '기혼' : '미혼'}입니다.`;
//   }
// }

// console.log(person.introduce());

// // 인자로 전달
// let list = [1, 2, 3, 4, 5];

// function doInArray (array, func) {
//   for (item of array) {
//     func(item);
//   }
// }

// // console.log - console이란 객체에서 log란 키에 할당된 함수
// doInArray(list, console.log);

// function doNTimes (func, repeat, x, y) {
//   let result = x;
//   for (i = 0; i < repeat; i++) {
//     result = func(result, y);
//   }
//   return result;
// }

// console.log(
//   doNTimes((x, y) => x * y, 3, 5, 2),
//   doNTimes((x, y) => x / y, 3, 5, 2),
// );

// // calculate
// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const multiply = (a, b) => a * b;

// // evaluate
// const isOdd = (number) => !!(number % 2);
// const isPositive = (number) => number > 0;

// function calcAndEval (calc, eval, x, y) {
//   return eval(calc(x, y));
// }

// console.log(
//   calcAndEval(add, isOdd, 5, 7),
//   calcAndEval(subtract, isPositive, 5, 7),
//   calcAndEval(multiply, isOdd, 5, 7)
// );

// // 결과값으로 반환
// function getIntroFunc (name, formal) {
//   return formal
//   ? function () {
//     console.log(`안녕하십니까, ${name}입니다.`);
//   } : function () {
//     console.log(`안녕하세요~ ${name}이라고 해요.`);
//   }
// }

// const hongIntro = getIntroFunc('홍길동', true);
// const jeonIntro = getIntroFunc('전우치', false);

// hongIntro();
// jeonIntro();

// const add = (a, b) => a + b;
// const sub = (a, b) => a - b;
// const mul = (a, b) => a * b;
// const div = (a, b) => a / b;

// function comb3ArmFuncs(armFunc1, armFunc2, armFunc3) {
//   return (x, y) => armFunc3(armFunc2(armFunc1(x, y), y), y);
// }

// const add_mul_sub = comb3ArmFuncs(add, mul, sub);
// const mul_add_div = comb3ArmFuncs(mul, add, div);
// const div_add_mul = comb3ArmFuncs(div, add, mul);

// console.log(
//   add_mul_sub(10, 4),
//   mul_add_div(10, 4),
//   div_add_mul(10, 4)
// );

// // 커링
// // 기존의 코드
// function addMultSubt (a, b, c, d) {
//   return (a + b) * c - d;
// }

// const addMultSubt2 = (a, b, c, d) => (a + b) * c - d;

// console.log(
//   addMultSubt(2, 3, 4, 5),
//   addMultSubt2(2, 3, 4, 5),
// );

// // ⭐ 커링으로 작성된 함수
// function curryAddMultSubt (a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return (a + b) * c - d;
//       }
//     }
//   }
// }

// const curryAddMultSubt2 = a => b => c => d => (a + b) * c - d;

// console.log(
//   curryAddMultSubt(2)(3)(4)(5),
//   curryAddMultSubt2(2)(3)(4)(5)
// );

// const curryAddMultSubtFrom2 = curryAddMultSubt(2);
// const curryMultSubtFrom5 = curryAddMultSubt(2)(3);
// const currySubtFrom20 = curryAddMultSubt(2)(3)(4);

// console.log(curryAddMultSubtFrom2);
// console.log(curryMultSubtFrom5);
// console.log(currySubtFrom20);
// // 화살표 함수로 바꾸어 다시 실행해 볼 것

// console.log(
//   curryAddMultSubtFrom2(3)(4)(5),
//   curryMultSubtFrom5(4)(5),
//   currySubtFrom20(5)
// );
