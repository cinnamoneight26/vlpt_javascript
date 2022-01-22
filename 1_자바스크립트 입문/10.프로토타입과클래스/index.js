/**
 * 객체 생성자
 * 함수를 통해서 새로운 객체를 만들고 그 안에 넣고 싶은 값 혹은 함수들을 구현할 수 있게 해줌
 * 함수의 이름을 대문자로 시작하고 새로운 객체를 만들 때 new키워드를 앞에 붙여줌
 * 
 * 같은 객체 생성자 함수를 사용하는 경우, 특정 함수 또는 값을 재사용할 수 있는데 그게 바로 프로토타입임.
 */


function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
    this.say = function () {
        console.log(this.sound);
    };
}

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();

// 프로토타입은 객체 생성자 함수 아래 .prototype.[원하는키] = 코드를 입력하여 설정
Animal.prototype.say = function () {
    console.log(this.sound);
};
Animal.prototype.sharedValue = 1;