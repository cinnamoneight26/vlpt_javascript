/**
 * 연산자 =
 * =는 대입 연산자
 * 
 * let value = 1 얘는 변수 선언이고(대입 연산자 아님. 얘는 변수 초기화)
 * value = 2; 얘가 대입 연산자
 * 
 * 산술 연산자
 * +, - , * , /
 * 
 * ++가 변수 이름 앞에 오는 것과 뒤에 오는 것의 차이점
 * 
 * 대입 연산자
 * 특정 값에 연산을 한 값을 바로 설정할 때 사용할 수 있는 연산자
 * 
 * 논리 연산자
 * ! : NOT
 * && : AND
 * || : OR
 * 
 * NOT 연산자는 true는 false로 false는 true로 바꿔줌
 * AND 연산자는 양쪽 값이 둘 다 true일 때만 true
 * OR 연산자는 양쪽 값이 둘 중 하나라도 true면 true
 * 
 * 연산 순서 
 * NOT -> AND -> OR 
 * 
 * 비교 연산자
 * ==, ===
 * 두 값이 일치하는지 확인해 줌. 일치하면 true, 일치하지 않으면 false
 * ==와 ===의 차이점은 타입검사를 하는지 하지 않는지의 차이
 * ==보다 ===를 쓰는 것을 권장. ==를 쓰면 실수할 확률이 높아짐
 * !== : 값이 일치하지 않는지 확인 
 * 
 * 크고 작음
 */

let a = 1 + 2;
console.log(a);

a = 1 + 2 - (3 * 4) / 4;
console.log(a);

a++;
++a;
console.log(a);

// 1을 더하기 직전 값을 보여줌
console.log(a++);
// 1을 더한 다음의 값을 보여줌
console.log(++a);

// 대입 연산자
let b = 1;
b = b + 3;

// 위에 거랑 같음
let c = 1;
c += 3;

// 연산 순서
const value = !((true && false) || (true && false) || !false);
// 괄호로 감싸져 있을 때 가장 마지막에 처리하므로 맨 앞의 NOT은 나중에 처리
// !((true && false) || (true && false) || true);
// 그 다음에 AND 처리
//!(false || false || true);
// ORㅇ 연산자를 좌측에서 우측 방향으로 처리하게 되면서...
// !true;
// 결과는 false

// const a = 10;
// const b = 15;
// const c = 15;

// console.log(a < b); // true
// console.log(b > a); // true
// console.log(b >= c); // true
// console.log(a <= c); // true
// console.log(b < c); // false;

// 문자열 붙이기
const t = "안녕";
const s = "하세요";
console.log(t+s)