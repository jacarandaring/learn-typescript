// intellisense: interface Person
// interface Person {
//     age: number;
//     name: string;
// }

// intellisense: type Person = {
//     age: number;
//     name: string;
// }
type Person = {
    age: number;
    name: string;
}

const seho: Person = {
    name: '세호',
    age: 30,
}

type MyString = string;
const str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean; };
function getTodo(todo: Todo) {} // type 별칭 작성 시 가독성 증진

/**
 * 타입 별칭: 정의된 타입에 별칭 (새로운 타입 정의X) -> 확장 불가능
 * !== 인터페이스
 * 
 * --> 인터페이스 사용권고
 */