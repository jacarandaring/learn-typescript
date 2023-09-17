// function logMessage(value: any) {
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);

/**
 * Union 타입 -> 타입 가드
 * - type guard: 선언된 타입보다 특정된 타입 체크
 * - narrowing: 타입 가드하는 과정
 *   (출처: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards)
 */
function logMessage(value: string | number) {
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Person {
    name: string; // 공통 속성
    age: number;
}
interface Developer {
    name: string; // 공통 속성
    skill: string;
}
/**
 * Union 타입 특징: 공통 속성만 접근 가능 (교집합)
 * => 타입 가드를 통해 개별 속성에 접근 가능
 */
// function askSomeone(someone: Person | Developer) {
//     someone.name
//     // someone.age
//     // someone.skill
// }
// askSomeone({ name: '캡틴', age: 100 });
// askSomeone({ name: '디벨로퍼', skill: '웹 개발' });

/**
 * Intersection 타입: 모든 속성에 접근 가능 (합집합)
 */
function askSomeone(someone: Person & Developer) {
    someone.name
    someone.age
    someone.skill
}
askSomeone({ name: '디벨로퍼', skill: '웹 개발', age: 34 });