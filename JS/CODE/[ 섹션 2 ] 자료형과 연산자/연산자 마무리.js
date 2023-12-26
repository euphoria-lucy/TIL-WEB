// 기타연산자들

// 쉼표연산자
let x = 1,
  y = 2,
  z = 3;
console.log(x, y, z);

// 마지막으로 실행한 것 반환
console.log((++x, (y += x), (z *= y)));

// ??
let qx;
qx ?? console.warn(qx, "x에 값이 없습니다.");

qx = 0;
qx ?? console.warn(qx, "x에 값이 없습니다.");

qx = null;
qx ?? console.warn(qx, "x에 값이 없습니다.");

let a = false;
let b = 0;
let c = "";
let d = null;
let e;

console.log(
  a ?? "기본값",
  b ?? "기본값",
  c ?? "기본값",
  d ?? "기본값",
  e ?? "기본값"
);

// 활용 예
let baby1 = "홍길동";
let baby2; // 아직 이름을 짓지 못함

const nameTag1 = baby1 ?? "1번 아기";
const nameTag2 = baby2 ?? "2번 아기";

console.log(nameTag1, nameTag2);

// 병합 할당 연산자들
let cx = 0;
let cy = "";
let cz = null;

cx ||= 100;
cy &&= "있어야 바뀜";
cz ??= "기본값";

console.log(cx, cy, cz);

// 연산자 우선순위
let rx = 1;
let ry = 19 === 3 + 4 * 2 ** ++rx;

console.log(ry);

console.log(
  2 > 3 || 4 % 2 === 0,
  2 > (3 || 4) % 2 === 0,
  2 > 3 || 4 % (2 === 0)
);
