/**
 * if문
 * ~~한다면 ~~를 해라
 * 
 * 조건이 만족됐을 때 실행시킬 코드가 {}로 감싸져있는데 이를 코드 블록이라고 함
 * 
 * if-else문
 * ~~하다면 ~~하고 그렇지 않다면 ~~해라
 * 
 * if-else-if문
 * 여러 조건에 따라 다른 작업을 해야할 때 사용
 * 
 * switch/case문
 * 특정 값이 무엇이냐에 따라 다른 작업을 하고싶을 때 사용
 * 실행 코드 작성 후 맨 마지막에 break;를 해주어야 함.
 * 해주지 않으면 다음 case의 코드까지 실행해버림
 * 
 * 
 */

const a = 1;
if (a + 1 === 2) {
    console.log('a + 1 이 2 입니다.');
}

const b = 10;
if (b > 15) {
    console.log('b 가 15 큽니다.');
} else {
    console.log('b 가 15보다 크지 않습니다.');
}

const c = 10;
if (c === 5) {
    console.log('5입니다!');
} else if (c === 10) {
    console.log('10입니다!');
} else {
    console.log('5도 아니고 10도 아닙니다.');
}

const device = 'iphone';

switch (device) {
    case 'iphone':
        console.log('아이폰!');
        break;
    case 'ipad':
        console.log('아이패드!');
        break;
    case 'galaxy note':
        console.log('갤럭시 노트!');
        break;
    default:
        console.log('모르겠네요..');
}