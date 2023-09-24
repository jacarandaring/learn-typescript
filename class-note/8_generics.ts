// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText(10);     // 숫자 10
// logText('하이'); // 문자열 하이
// logText(true);   // 진위값 true

/* Generic */
function logText<T>(text: T): T {
    console.log(text);
    return text;
}
logText<string>('하이'); // 함수 호출하면서 타입 선언 - <>로 작성받는 타입 === T
logText<boolean>(true);
const str = logText<string>('10');
str.split('');

// 1. Generic 미사용
// -> 코드 중복
function logString(text: string) {
    console.log(text);
    return text;
}
function logNumber(text: number) {
    console.log(text);
    return text;
}
logString('a');
logNumber(10);

// 2. Union 타입으로 파라미터 선언
// -> 코드 중복 문제 해결
//    but 반환값 타입 특정 불가능
function logTextUnion(text: string | number) {
    console.log(text);
    return text;
}
const a = logTextUnion('a');
// a.split('') // split 메소드 사용 불가능 <- number타입이 들어올 수도 있음
logTextUnion(10);


/* Generic 타입 제한 */
// 1. 파라미터에서 타입 제한을 줘서(T타입의 Array) narrowing 및 intellisense 가능
function logTextLength<T>(text: T[]): T[] {
    console.log(text.length);
    text.forEach((t) => {
        console.log(t);
    });
    return text;
}

// 2. 정의된 타입 이용하기 - extends interface/class 등
interface LengthType {
    length: number;
}
function logTextLength2<T extends LengthType>(text: T): T {
    text.length;
    return text;
}
logTextLength2('test');         // length 속성 제공하는 타입 적용
logTextLength2({ length: 10 }); // 이름이 length인 속성 가지는 경우도 OK

// 3. interface에 정의된 속성으로 제약 - keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}
// getShoppingItemOption(1000);
// getShoppingItemOption({name: 'item'}); // interface 속성과 동일한 이름의 속성 -> X
// const price = 1000;
// getShoppingItemOption(price);
getShoppingItemOption('name');
getShoppingItemOption('price');