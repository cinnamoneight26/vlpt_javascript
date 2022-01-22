/**
 * 
 * 객체 : 변수, 상수를 사용하게 될 때 하나의 이름에 여러 종류의 값을 넣을 수 있게 해줌
 * 키:원하는 값
 * 
 * 객체 안에 함수를 넣을 때 화살표 함수로 선언하면 제대로 작동하지 않음
 * function으로 선언한 함수는 this가 제대로 자신이 속한 객체를 가르키게 되지만 화살표 함수는 그렇지 않기 때문임
 * 
 * getter, setter를 사용하는 이유는 캡슐화, 정보은닉 관점에서 이해하는 것이 바람직 할 듯...
 */

const dog = {
    name: '멈머',
    age: 2
}

console.log(dog.name);
console.log(dog.age);

// 함수에서 객체를 파라미터로 받기
const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
};

const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
};

function print(hero) {
    const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${
      hero.actor
    } 입니다.`;
    console.log(text);
}

print(ironMan);
print(captainAmerica);

// 객체 비구조화 할당
// 위에 보면 hero.  을 반복적으로 쓰는데 객체 비구조화 할당이라는 문법을 사용하면 코드를 더욱 짧고 보기 좋게 작성할 수 있음
// '객체 구조 분해'라고도 함
function print_1(hero) {
    const {
        alias,
        name,
        actor
    } = hero;
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}
print_1(ironMan);
print_1(captainAmerica);

// const { alias, name, actor } = hero; 코드가 객체에서 값을 추출해서 새로운 상수로 선언해주는 것
// 여기서 더 나아가면 파라미터 단계에서 객체 비구조화 할당을 할 수도 있음

function print_2({
    alias,
    name,
    actor
}) {
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
};

print_2(ironMan);
print_2(captainAmerica);

// 객체 안에 함수 넣기
const cat = {
    name: '고먐미',
    sound: '냐옹!',
    say: function say() {
        console.log(this.sound);
    }
};

cat.say();

// 함수가 객체 안에 들어가게 되면 this는 자신이 속해있는 객체를 가르키게 됨. 위에서는 cat
// 함수를 선언할 때 이름이 없어도 됨
// 객체 안에 함수를 넣을 때 화살표 함수로 선언하면 제대로 작동하지 않음
// function으로 선언한 함수는 this가 제대로 자신이 속한 객체를 가르키게 되지만 화살표 함수는 그렇지 않기 때문임

// 객체 안에 getter함수와 setter함수를 설정하는 방법
const numbers = {
    a: 1,
    b: 2
};

numbers.a = 5;
console.log(numbers);
// 게터와 세터 함수를 사용하는 이유는 특정 값을 조회할 때 우리가 원하는 코드를 실행시킬 수 있음..???

const test = {
    a: 1,
    b: 2,
    get sum() {
        console.log('sum 함수가 실행됩니다.');
        return this.a + this.b;
    }
}

console.log(test.sum);
test.a = 5;
console.log(test.sum);

// 위처럼 test.sum()이 아니라 test.sum을 조화했는데 함수가 실행되고 그 결과값이 출력됨
// getter 함수는 특정 값을 조회할 때 우리가 설정한 함수로 연산된 값을 반환

// 그럼 setter는?
const numbers = {
    _a: 1,
    _b: 2,
    sum: 3,
    calculate() {
        console.log('calculate');
        this.sum = this._a + this._b;
    },
    get a() {
        return this._a;
    },
    get b() {
        return this._b;
    },
    set a(value) {
        console.log('a가 바뀝니다.');
        this._a = value;
        this.calculate();
    },
    set b(value) {
        console.log('b가 바뀝니다.');
        this._b = value;
        this.calculate();
    }
};

console.log(numbers.sum);
numbers.a = 5;
numbers.b = 7;
numbers.a = 9;
console.log(numbers.sum);
console.log(numbers.sum);
console.log(numbers.sum);