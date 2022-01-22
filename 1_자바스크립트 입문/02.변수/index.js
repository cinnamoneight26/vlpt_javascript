/**
 * 변수와 상수
 * 
 * 변수는 바뀔 수 있는 값을 말함.
 * 한번 값을 선언하고 나서 바꿀 수 있음
 * 
 * 변수를 선언할 때는 let 키워드를 사용.
 * 
 * 상수는 한번 선언하고 값이 바뀌지 않는 값을 의미
 * 값이 고정적
 * 
 * 변수를 선언하는 또 다른 방법은 var 키워드 사용하지만, 모던 자바스크립트에서는 사용하지 않음
 * 
 * var와 let이 다른 주요 차이점은 똑같은 이름으로 여러 번 선언 할 수 있음
 * 사용할 수 있는 범위가 다름
 * let 과 const는 IE9, IE10 같은 브라우저에서는 사용할 수 없음.
 * 요즘은 Badel과 같은 도구를 사용하여 코드가 구형 브라우저에서도 돌아갈 수 있게끔 변환작업을 한다.
 * 
 * null과 undefined
 * 자바스크립트에서는 없음을 의미하는 데이터 타입이 두 종류.
 * null과 undefined
 * null : 이 값이 없다!! - 고의적으로 설정하는 빈 값
 * undefined : 값이 설정되지 않음! - 설정하지 않아서 없는 값
 * 
 */

// 변수
let value = 1;
console.log(value);
value = 2;
console.log(value);

// 상수
const a = 1;
// 상수의 값이 변하면 오류 발생
// a = 2;

// 데이터 타입
// 숫자(Number)
let value_1 = 1;
// 문자열(String)
let text = 'hello';
// 참/거짓
let good = true;
let loading = false;
