// 연산자

// 부정연산자
console.log(true, !true, false, !false);

console.log(true, !true, !!true, !!!true);

console.log(false, !false, !!false, !!!false);

console.log(
  true === !false,
  !(1 == "1"),
  !(1 === "1"),
  !(typeof false === "boolean")
);

// AND / OR 연산자
// && - AND
console.log(true && true, true && false, false && true, false && false);

// || - OR
console.log(true || true, true || false, false || true, false || false);

let x = 14;
// x = 6;
// x = 25;

console.log((x > 10 && x <= 20) || x % 3 === 0);
// 💡 드 모르간의 법칙
let a = true;
// a = false;
let b = true;
// b = false;

console.log(!(a && b) === (!a || !b), !(a || b) === (!a && !b)); // 💡 항상 true

// 단축평가
let error = true;
// error = false;

// 앞의 것이 true일 때만 뒤의 코드 실행
error && console.warn("오류 발생!");

// 앞의 것이 false일 때만 뒤의 코드 실행
error || console.log("이상 없음.");

let sx = true;
// sx = false;

// ⭐️ &&, || 연산자는 값 자체를 반환
let sy = sx && "abc";
let sz = sx || 123;

console.log(sy, sz);

// 삼항연산자
let tx = true;
// tx = false;

let ty = tx ? "참입니다." : "거짓입니다.";
console.log(ty);

let num = 103247;

console.log("num은 3의 배수" + (num % 3 === 0 ? "입니다." : "가 아닙니다."));

let terror = true;
// terror = false;

error ? console.error("오류 발생!") : console.log("이상 없음");

// Truthy, Falsy
// Truthy
console.log(
  1.23 ? true : false,
  -999 ? true : false,
  "0" ? true : false,
  " " ? true : false,
  Infinity ? true : false,
  -Infinity ? true : false,
  {} ? true : false,
  [] ? true : false
);

// ⚠️ true와 `같다`는 의미는 아님
console.log(1.23 == true, " " == true, {} == true);

// Falsy
console.log(
  0 ? true : false,
  -0 ? true : false,
  "" ? true : false,
  null ? true : false,
  undefined ? true : false,
  NaN ? true : false
);

// 💡 어떤 값들은 false로 타입변환됨
console.log(0 == false, 0 === false, "" == false, "" === false);
console.log(null == false, undefined == false, NaN == false);

let tfx = 0;
let tfy = 1;

tfx && tfx++;
tfy && tfy++;

console.log(tfx, tfy);

let ttfx = 2;
let ttfy = 3;

console.log(ttfx % 2 ? "홀" : "짝", ttfy % 2 ? "홀" : "짝");

let tftfx = "";
let tftfy = "회사원";
let tftfz = tftfx || tftfy;

console.log(tftfz);

tftfx = tftfx || "단기알바";
tftfy = tftfy || "단기알바";

console.log(tftfx, tftfy);

// 💡 boolean으로 직접변환
// 한 번 부정
console.log(!1, !-999, !"hello", !0, !"", !null);

// ⭐️ 두 번 부정하여 해당 boolean값으로
console.log(!!1, !!-999, !!"hello", !!0, !!"", !!null);

let bx = 123;

console.log("x는 홀수인가?", !!(bx % 2));
