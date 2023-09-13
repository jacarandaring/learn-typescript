interface User {
    age: number;
    name: string;
}

/**
 * #1. 변수에 인터페이스 활용
 */
const seho: User = {
    age: 33,
    name: '세호'
}

/**
 * #2. 함수에 인터페이스 활용
 */
function getUser(user: User) {
    console.log(user);
}
const capt = {
    name: '캡틴',
    age: 100, // --> 미작성 시 오류 생성됨
}

getUser(capt);

/**
 * #3. 함수의 스펙(구조)에 인터페이스를 활용
 */
interface SumFunction {
    (a: number, b: number): number; // 함수 규칙을 인터페이스로 정의 - 인자, 반환 타입
}
let sum: SumFunction;
sum = function(a: number, b: number): number {
    return a + b;
}

/**
 * #4. 인덱싱 방식 정의에 인터페이스를 활용
 */
interface StringArray {
    // {속성}: {타입}; (X)
    // 속성명 동적으로 반환받아 사용하는 방식
    [index: number]: string;
}
const arr: StringArray = ['a', 'b', 'c'];
arr[0]; // 'a'
// arr[0] = 10; // --==>> 오류

/**
 * 5. 딕셔너리 패턴
 * -> 인덱싱 방식(#4.)와 유사한 방식
 * -> 널리 사용
 */
interface StringRegexDictionary {
    [key: string]: RegExp; // key=속성=string타입

}
const obj = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}
// obj['cssFile'] = 'a';  // RegExp 타입 작성하지 않는것 방지 인터페이스로 가능

/**
 * #6. 인터페이스 확장
 * - OOP에서의 상속, JS의 프로토타입과 비슷
 */
interface Person{
    age: number;
    name: string;
}
interface Developer extends Person{
    // age: number;
    // name: string;
    language: string;
}
const captin: Developer = {
    language: 'ts',
    age: 100,
    name: '캡틴',
}