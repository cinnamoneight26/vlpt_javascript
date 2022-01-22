/**
 * 배열 다룰 때 알고 있으면 유용한 내장 함수들
 * 
 * forEach
 * 가장 쉬운 배열 내장함수
 * 기존 for문을 대체시킬 수 있음
 * 
 * map
 * 배열 안의 각 원소를 변환할 때 사용되며 이 과정에서 새로운 배열이 만들어 진다.
 * 
 * indexOf
 * 원하는 항목이 몇번째 원소인지 찾아주는 함수
 * 
 * findIndex
 * 배열 안에 있는 값이 객체, 배열일 때 찾고자 하는 항목이 몇번째 원소인지 알아내려 할 때 사용
 * 
 * find
 * findIndex와 비슷한데 찾아낸 값이 몇번째인지 반환하는 게 아니라 값 자체를 반환
 * 
 * filter
 * 배열에서 특정 조건을 만족하는 값들만 따로 추출하여 새로운 배열 생성
 * 함수에 넣는 파라미터는 조건을 검사하는 함수를 넣어주며 이 함수의 파라미터로 각 원소의 값을 받아오게 된다.
 * 
 * splice
 * 배열에서 특정 항목을 제거할 때 사용
 * 첫번째 파라미터는 어떤 인덱스부터 지울지를 의미하고 두번째 파라미터는 그 인덱스부터 몇개를 지울지를 의미한다.
 * 
 * slice
 * 배열을 잘라낼 때 사용. 기존의 배열은 건드리지 않음
 * 
 * shift와 pop
 * shift는 첫번째 원소를 배열에서 추출하고 추출하는 과정에서 사라짐
 * pop은 push의 반대라고 생각하면 편함. push는 배열의 맨 마지막에 새 항목을 추가하지만  pop은 
 * 맨 마지막 항목을 추출
 * 
 * unshift
 * 배열의 맨 앞에 새 원소를 추가
 * 
 * concat
 * 여러개의 배열을 하나로 합쳐 줌
 * 
 * join
 * 배열 안의 값들을 문자열 형태로 합쳐줌
 * 
 * reduce
 * 두개의 파라미터를 전달하는데 첫번째 파라미터는 accumulator 와 current 를 파라미터로 가져와서 결과를 반환하는 콜백함수
 * 두번째 파라미터는 reduce 함수에서 사용 할 초깃값
 * accumulator 는 누적된 값을 의미
 * 
 * 
 */

const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

for (let i = 0; i < superheroes.length; i++) {
    console.log(superheroes[i]);
}

// forEach 함수의 파라미터로는 각 원소에 대하여 처리하고 싶은 코드를 함수로 넣어줌
// 이 함수의 파라미터 hero는 각 원소를 가르키게 됨
// 이렇게 함수 형태의 파라미터를 전달하는 것을 콜백함수라고 함

superheroes.forEach(hero => {
    console.log(hero)
});

// map
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const squared = [];
for (let i = 0; i < array.length; i++) {
    squared.push(array[i] * array[i]);
}

console.log(squared);

// 위에꺼를 map으로 변환
// map 함수의 파라미터로는 변화를 주는 함수를 전달(변화 함수)
// 변화 함수를 꼭 이름을 붙여서 선언할 필요 없음
const squared_1 = n => n * n;
const squared_2 = array.map(squared_1);
console.log(squared_2);

const squared_3 = array.map(n => n * n);
console.log(squared_3);

// indexof : 원하는 항목이 몇 번째 원소인지 찾아주는 함수
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
const index = superheroes.indexOf('토르');
console.log(index);

// findOndex : 배열 안에 있는 값이 객체이거나, 배열일 때 찾을 항목이 몇번째 원소인지 알아낼 때 사용
const todos = [{
        id: 1,
        text: '자바스크립트 입문',
        done: true
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false
    }
];

const index = todos.findIndex(todo => todo.id === 3);
console.log(index);

//