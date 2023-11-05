# 🍀 SWITCH

switch문 사용 경우 : `특정 값에 대한 다수의 옵션이 있을 때 사용`

<br>

## 🧸 switch문 사용법

```javascript

switch ( 값, 상수, 변수, 숫자, 문자 ) {
  case :
    실행문
    break;
  case :
    실행문
    break;
  default :
    실행
}

```

실행원리 : 괄호 안 조건과 case문의 조건이 맞을 때 까지 실행 이동하여 실행문 실행 <br>

### ⛄ break

- 실행 후 switch문을 나와 실행문을 실행할 수 있도록 **case문에는 꼭!! 반드시!! 작성해야함** <br>

### ⛄ default

- **case문에서 해당하지 않는 값이 있을 때 마지막으로 실행**, 더 이상 실행하지 않기 때문에 break 작성 X
