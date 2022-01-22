/**
 * 객체는 한 변수나 상수에 여러가지 정보를 담기 위함이었다면 배열은 여러개의 항목들이 들어있는 리스트
 * 배열 안에는 어떤 값이던지 넣을 수 있음
 * 
 * - 객체 배열
 * const objects = [{ name: '멍멍이' }, { name: '야옹이' }];
 * 조회는 objects[n];
 * 
 * 배열에 새로운 항목을 추가할 때는 배열이 지니고 있는 내장 함수인 push 함수를 사용
 * 
 * 
 */


const objects = [{
    name: '멍멍이'
}, {
    name: '야옹이'
}];

console.log(objects);
console.log(objects[0]);
console.log(objects[1]);

objects.push({
    name: '멍뭉이'
});

console.log(objects);

// 배열의 크기 알아내기 : length
console.log(objects.length);
