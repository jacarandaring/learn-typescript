function Person(name, age) {
    this.name = name;
    this.age = age;
}
const capt = new Person('캡틴', 100);

// ------ ES6 이후 syntatic sugar ------
class Person {
    // 클래스 로직 --> 기본적으로 인스턴스 생성하는 역할
    // 초기화 메소드
    constructor(name, age) {
        console.log('생성 되었습니다.')
        this.name = name;
        this.age = age;
    }
}

const seho = new Person('세호', 30);
console.log(seho);
// --==>> 생성 되었습니다.
// --==>> Person {name: "세호", age: 30}