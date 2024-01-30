let x = 0;

while (x < 10) {
  console.log(x++);
}

let xx = 0;

while (xx < 10) {
  console.log(xx);
}

// 인위적인 무한반복에 널리 쓰이는 코드
while (true) {
  console.log("무한반복");
}

// break문으로 무한반복 탈출 가능
let xxx = 0;

while (true) {
  if (xxx++ >= 5) break; // 😎
  console.log(xxx);
}
// 1 ~ 5 출력

// continue와 break 사용
// 1, 3, 5, 7을 의도한 코드. 그러나...
// ⚠️ 무한루프! 왜일까요?
let xxxx = 0;
while (xxxx < 14) {
  if (xxxx % 2 === 0) continue;
  if (xxxx > 7) break;
  console.log(x++);
}

// 짧게 짠 수정 코드
let xxxxx = 0;
while (xxxxx < 14) {
  if (xxxxx++ % 2 === 0) continue;
  if (xxxxx > 8) break;
  console.log(xxxxx - 1);
}

// 가독성 위주로 짠 코드
// 코드에 의도가 드러나도록
let x7 = 0;
while (x7 < 14) {
  const toContinue = x7 % 2 === 0;
  const toBreak = x7 > 7;
  const xNow = x7++;

  if (toContinue) continue;
  if (toBreak) break;

  console.log(xNow);
}

//  더 짧고도 직관성을 유지한 코드의 예

let x8 = 0;
while (x8 < 14) {
  const xNow = x8++;

  if (xNow % 2 === 0) continue;
  if (xNow > 7) break;

  console.log(xNow);
}
