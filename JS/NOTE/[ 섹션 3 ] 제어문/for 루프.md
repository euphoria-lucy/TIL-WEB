# 🍀 for 루프

## 🧸 `for` 문 사용법

<br>

### ⛄ 괄호 안의 3개의 식에 따른 반복수행

- 변수의 선언 및 할당
- 종료조건, **부재 시 항상 참**
- 참일 시 블록 안의 코드 이후 실행문

```javascript
// 💡 변수이므로 let이 사용됨
for (변수; 반복될 조건; 증감식) {
  실행할 문장;
}
```

- 보통 변수는 `i` , `j` , `k` 순으로 사용됨

<br>

#### 💡 중첩 사용

```javascript
for (변수; 반복될 조건; 증감식) {
  for (변수; 반복될 조건; 증감식) {
    실행할 문장;
  }
}
```

- 두 스택의 스코프가 쌓이는 것

<br>

### ⛄ 둘 이상의 변수 사용

```javascript
for (변수 1, 변수 2;
변수 1과 변수 2의 비교식;
변수 1 증감식, 변수 2 증감식) {
  실행할 문장
}
```

<br>

#### 💡 객제와 배열의 `for` 문

**객체** : `for (키 이름 in 객체명)` - 객체의 키들을 순서대로 반환

```javascript
for (변수 in 객체명) {
  실행할 문장
}
```

**배열** : `for (항목 of 배열명)` - 배열의 항목들을 순서대로 반환

```javascript
for (항목 of 배열명) {
  실행할 문장
}
```

<br>

#### 💡 `for ... of` 문의 장점

- 변수를 사용하지 않음으로 보다 안전

<br><br>

## 🧸 `continue` 와 `break`

<br>

### ⛄ `continue` - 한 루프를 건너뜀

```javascript
for (변수; 반복될 조건; 증감식) {
  if (조건) continue;
  실행할 문장;
}
```

<br>

### ⛄ `break` - 블록을 종료하고 빠져나옴

```javascript
for (변수; 반복될 조건; 증감식) {
  if (조건) break;
  실행할 문장;
}
```

<br>

### ⛄ `label` - 중첩된 반복문을 명명하여 `continue` 또는 `break` 에 사용

- 널리 사용되지는 않음

```javascript
outer:
for (변수; 반복될 조건; 증감식) {

  inner:
  for (변수; 반복될 조건; 증감식) {

    if (조건) continue inner;
    if (조건) continue outer;

    if (조건) break inner;
    if (조건) break outer;

    실행할 문장;
  }
}
```
