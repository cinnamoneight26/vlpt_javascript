/**
 * 
 * for
 * 가장 기본적인 반복문
 * 특정 값에 변화를 주어가면서 우리가 정한 조건이 만족된다면 계속 반복
 * 
 * while
 * 특정 조건이 참이라면 계속해서 반복하는 반복문
 * 조건문이 언젠가 false가 되도록 신경써야 함. 아니면 영원히 반복
 * 
 * for..of
 * 배열에 관한 반복문을 돌리기 위해 만들어졌음
 * 
 * for..in
 * 객체를 위한 반복문
 * 
 * Object.entries: [[키, 값], [키, 값]] 형태의 배열로 변환
 * Object.keys: [키, 키, 키] 형태의 배열로 변환
 * Object.values: [값, 값, 값] 형태의 배열로 변환
 * 
 * break / continue
 * 
 * 
 */


// i증가
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// i감소
for (let i = 10; i > 0; i--) {
    console.log(i);
}

// 배열과 for
const names = ['멍멍이', '야옹이', '멍뭉이'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// while
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// for..of : 배열애 관한 반복문. 이런 게 있지만 대체로 배열의 내장함수를 많이 사용함
let numbers = [10, 20, 30, 40, 50];
for (let number of numbers) {
    console.log(number);
}

// for..in : 객체를 위한 반복문
const doggy = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2
};

console.log(Object.entries(doggy));
console.log(Object.keys(doggy));
console.log(Object.values(doggy));

for (let key in doggy) {
    console.log(`${key}: ${doggy[key]}`);
}

// 연습 numbers라는 배열을 파라미터로 받아서 총합을 구하는 함수를 만들어 봅시다.
function sumOf(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

const result = sumOf([1,2,3,4,5,6]);
console.log(result);


// 퀴즈 : 숫자로 이루어진 배열이 주어졌을 때, 해당 숫자 배열안에 들어있는 숫자 중 3보다 큰 숫자로만 이루어진 배열을 새로 만들어서 반환해보세요.
function newArr(arr) {
    let _arr = [];

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > 3) {
            _arr.push(arr[i]);
        }
    }

    return _arr;
};

let arr_2 = [1,2,3,4,5,6,7,8,9,10,11,12,23,45,56,67,8];

console.log(newArr(arr_2))