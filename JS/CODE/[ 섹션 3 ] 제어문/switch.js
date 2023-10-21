// 가위바위보
const fingersOut = 2;

switch (fingersOut) {
  // 순서 상관없음
  case 2:
    console.log("가위");
    break;
  case 0:
    console.log("바위");
    break;
  case 5:
    console.log("보");
    break;
  default:
    console.log("무효");
}

// 동서남북
const direction = "north";
let directionKor;

switch (direction) {
  case "north":
    directionKor = "북";
    break;
  case "south":
    directionKor = "남";
    break;
  case "east":
    directionKor = "동";
    break;
  case "west":
    directionKor = "서";
    break;
  default:
    directionKor = "무효";
}

console.log(directionKor);

// 동서남북 - 객체 이용
// 💡 참고: 객체를 사용한 방법
const directionn = "north";

const directionKorea =
  {
    north: "북",
    south: "남",
    east: "동",
    west: "서",
  }[direction] ?? "무효";

console.log(directionKorea);

// 분기
const month = 1;
let season = "";

switch (month) {
  case 1:
  case 2:
  case 3:
    season = "1분기";
    break;

  case 4:
  case 5:
  case 6:
    season = "2분기";
    break;

  case 7:
  case 8:
  case 9:
    season = "3분기";
    break;

  case 10:
  case 11:
  case 12:
    season = "4분기";
    break;

  default:
    season = "잘못된 월입니다.";
}

console.log(season);

// 분기 내 휴일
const startMonth = 1;
let holidays = "분기 내 휴일:";

switch (startMonth) {
  case 1:
    holidays += " 설날";
  case 2:
  case 3:
    holidays += " 3•1절";
    break;

  case 4:
  case 5:
    holidays += " 어린이날";
  case 6:
    holidays += " 현충일";
    break;

  case 7:
  case 8:
    holidays += " 광복절";
  case 9:
    holidays += " 추석";
    break;

  case 10:
    holidays += " 한글날";
  case 11:
  case 12:
    holidays += " 크리스마스";
    break;

  default:
    holidays = "잘못된 월입니다.";
}

console.log(holidays);
