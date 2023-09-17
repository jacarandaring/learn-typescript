/**
 * enum: 초기화하지 않는 경우 숫자형enum(0부터 auto increasing)
 */
// enum Shoes {
//     Nike,
//     Adidas,
// }
// const myShoes = Shoes.Nike;
// console.log(myShoes); // --==>> 0

enum Shoes {
    Nike = '나이키',
    Adidas = '아디다스',
}
const myShoes = Shoes.Nike;
console.log(myShoes); // --==>> 나이키

/* 예제 */
// enum에 정의된 값만 설정 가능
enum Answer {
    Yes = 'Y',
    No = 'N',
}

// function askQuestion(answer: string) {
function askQuestion(answer: Answer) {
    // if (answer === 'yes') {
    if (answer === Answer.Yes) {
        console.log('정답입니다.');
    }
    // if (answer === 'no') {
    if (answer === Answer.No) {
        console.log('오답입니다.');
    }
}
// askQuestion('예스')
// askQuestion('y')
// askQuestion('Yes')
askQuestion(Answer.Yes);