class Person {
    // 멤버 변수 + 접근 범위 정의
    private name: string;
    public age: number;
    readonly log: string;

    // 생성자 파라미터의 타입 정의
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}