/** 타입 추론 기본 #1 */
const a = 'a'; // string

function getB(b = 10) { // string
    const c = 'hi';
    return b + c;
}

/** 
 * 타입 추론 기본 #2
 *  - interface에 Generic 연계했을 때에도 타입추론 이루어지는지 실습
 */
interface Dropdown<T> {
    value: T;
    title: string;
}
const shoppingItem: Dropdown<string> = {
    value: 'abc',   // string
    title: 'hello', // string
}

/** 
 * 타입 추론 기본 #3
 *  - interface 2개에 Generic 연계했을 때에도 타입추론 이루어지는지 실습
 */
interface DetailedDropdown<K> extends Dropdown<K> {
    description: string;
    tag: K;
}
const detailedItem: DetailedDropdown<string> = {
    title: 'abc',
    description: 'ab',
    value: 'a', // -> string 타입으로 추론 (Generic K로 string 설정)
    tag: 'a',   // -> string 타입으로 추론 (Generic K로 string 설정)
}

/**
 * Best Common Type
 *  : TS에서 타입추론 해나가는 알고리즘 -> Union
 */
const arr1 = [1, 2];       // number[]
const arr2 = [1, 2, true]; // (number | boolean)[]