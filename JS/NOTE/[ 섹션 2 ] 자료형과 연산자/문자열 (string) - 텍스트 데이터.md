# 🍀 문자열 (string) - 텍스트 데이터

## 🧸 기본 표기방법

<br>

### ⛄ 작은따옴표

- `' '`

```javascript
let word = "안녕하세요! 🩷";
console.log(word);
```

<br>

### ⛄ 큰따옴표

- `" "`

```javascript
let word = "반갑습니다~ 🩵";
console.log(word);
```

<br>

### ⛄ 문자열 안에 따옴표 사용

```javascript
let word1 = '작은따옴표 안에 "큰따옴표" 사용';
let word2 = "큰따옴표 안에 '작은따옴표' 사용";
console.log(word1, word2);
```

<br>

#### ❄️ 이스케이프 표현 (escape sequence)

```javascript
let word1 = "작은따옴표 안에 '작은따옴표' 사용";
let word2 = '큰따옴표 안에 "큰따옴표" 사용';
console.log(word1, word2);
```

<br>

#### ❄️ 자주 사용되는 이스케이프 표현

| 이스케이프 표현 | 대체       |
| --------------- | ---------- |
| `\' `           | 작은따옴표 |
| `\"`            | 큰따옴표   |
| `\n`            | 줄바꿈     |
| `\t`            | 탭         |
| `\\`            | 백슬래시   |

## 🧸 백틱

- \` `

```javascript
let word = `헬로헬로~ 🤍`;
console.log(word);
```

- ⭐ 문자열 안에 탭과 줄바꿈 그대로 사용 가능

<br>

### ⛄ 템플릿 리터럴

- `${ }` 안에 상수나 변수, 표현식 등을 삽입 가능
- **다른 자료형** 도 사용할 수 있음
