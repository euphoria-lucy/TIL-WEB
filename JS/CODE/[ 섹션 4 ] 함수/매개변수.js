// function add(a, b) {
//   return a + b;
// }

// console.log(add(1, 3), add(1, 3, 5), add(1, 3, 5, 7));

// // 기본값 매개변수
// function add(a = 2, b = 4) {
//   console.log(`${a} + ${b}`);
//   return a + b;
// }

// console.log(add(), add(1), add(1, 3));

// // arguments
// function add(a, b) {
//   console.log("1.", arguments);
//   console.log("2.", arguments[0]);
//   console.log("3.", typeof arguments);
//   return a + b;
// }

// console.log("4.", add(1, 3, 5, 7));

// function add(a, b) {
//   for (const arg of arguments) {
//     console.log(arg);
//   }
//   return a + b;
// }

// console.log(add(1, 3, 5, 7));

// function getAverage() {
//   let result = 0;
//   for (const num of arguments) {
//     result += num;
//   }
//   return result / arguments.length;
// }

// console.log(getAverage(1, 4, 7), getAverage(24, 31, 52, 80));

// // 💡 타입에 안전한 버전
// function getAverage() {
//   let result = 0,
//     count = 0;
//   for (const num of arguments) {
//     if (typeof num !== "number") continue;
//     result += num;
//     count++;
//   }
//   return result / count;
// }

// console.log(getAverage(2, "가", 8, true, 5));

// // ♻️ 새로고침 후 실행
// const add = (a, b) => a + b;
// const sub = (a, b) => a - b;
// const mul = (a, b) => a * b;
// const div = (a, b) => a / b;

// function combineArms() {
//   return (x, y) => {
//     let result = x;
//     for (const arm of arguments) {
//       if (typeof arm !== "function") continue;
//       result = arm(result, y);
//     }
//     return result;
//   };
// }

// const add_mul = combineArms(add, mul, 1, true);
// const add_mul_sub = combineArms(add, mul, sub);
// const add_mul_sub_div = combineArms(add, mul, sub, div);

// // 💡 익명 함수 사용됨
// const add_mul_sub_div_pow = combineArms(add, mul, sub, div, (x, y) => x ** y);

// console.log(
//   add_mul(8, 3),
//   add_mul_sub(8, 3),
//   add_mul_sub_div(8, 3),
//   add_mul_sub_div_pow(8, 3)
// );

// // ...변수그룹명
// console.log("3.", classIntro(3, "김민지", "영희", "철수", "보라")); // 호이스팅

// function classIntro(classNo, teacher, ...children) {
//   console.log("1.", children);
//   console.log("2.", arguments);

//   let childrenStr = "";
//   for (const child of children) {
//     if (childrenStr) childrenStr += ", ";
//     childrenStr += child;
//   }
//   return (
//     `${classNo}반의 선생님은 ${teacher}, ` + `학생들은 ${childrenStr}입니다.`
//   );
// }

// const add = (a, b) => a + b;
// const sub = (a, b) => a - b;
// const mul = (a, b) => a * b;
// const div = (a, b) => a / b;

// function doMultiArms(x, y, ...arms) {
//   let result = x;
//   for (const arm of arms) {
//     if (typeof arm !== "function") continue;
//     result = arm(result, y);
//   }
//   return result;
// }

// console.log(
//   doMultiArms(8, 3, add, mul, 1, true),
//   doMultiArms(8, 3, add, mul, sub),
//   doMultiArms(8, 3, add, mul, sub, div),
//   doMultiArms(8, 3, add, mul, sub, div, (x, y) => x ** y)
// );
