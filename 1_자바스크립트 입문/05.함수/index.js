/**
 * 함수는 특정 코드를 하나의 명령으로 실행할 수 있게 해주는 기능
 * 
 * 함수를 만들 때는 function키워드를 사용하며 함수에서 어떤 값을 받아올지 정해주는데 이를 파라미터(매개변수)라고 부름
 * 함수 내부에서 return 키워드를 사용하여 함수의 결과물을 지정할 수 있음
 * return을 하게되면 함수가 끝남.
 * 
 * 화살표 함수
 * 함수를 선언하는 방식 중 또 다른 방법은 화살표 함수 문법을 사용하는 것
 * 
 * function대신에 => 문자를 사용해서 함수를 구현.
 * 화살표의 좌측에는 함수의 파라미터, 화살표의 우측에는 코드 블록이 들어옴
 * 코드 블록 내에서 바로 리턴할 경우 코드블럭 없이 줄여서 쓸 수 있음
 * 
 * 화살표 함수와 일반 함수의 주요 차이점은
 * 화살표 함수에서 가르키는 this와 function에서 가르키는 this가 서로 다르다는 부분에 있음
 * 
 */

const a = 1;
const b = 2;
const sum = a + b;

function add(a, b) {
    return a + b;
}

const sum = add(1, 2);
console.log(sum);

// 연습 : name이라는 파라미터를 넣으면 콘솔에 'Hello name!'이라는 결과를 출력하는 코드를 작성
function helloName(name) {
    console.log('Hello ' + name + '!');
}
helloName('ming');

// console.log 문자열 조합을 위해 + 연산자를 사용했으나 문자열 조합할 때 +를 사용해도 큰 문제가 없지만 더욱 편하게 조합하기 위해 ES6의 템플릿 리터럴 (Template Literal)문법 사용

// 아래는 템플릿 리터럴을 사용해 구현
// !!! 이때는 따옴표 대신 백틱을 쓴다!(Grave accent)
function hello(name) {
    console.log(`Hello, ${name}`);
};

hello('ming')

const add = (a,b) => {
    return a + b;
}

console.log(add(1,2));

// 코드블럭 없이 바로 리턴
// const add = (a, b) => a + b;
// console.log(add(1, 2));