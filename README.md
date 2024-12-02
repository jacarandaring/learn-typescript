# learn-typescript

인프런의 [타입스크립트 입문 - 기초부터 실전까지](https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9E%85%EB%AC%B8?inst=f1ae9299&utm_source=blog&utm_medium=githubio&utm_campaign=captianpangyo&utm_term=banner) 온라인 강의 수강한 내용 정리 레포지토리

## About TS
**Typed JavaScript** : 자바스크립트에 타입 부여한 언어
- 자바스크립트와 다르게 컴파일 필요
- 장점 = **intellisense**
  1. 코드 작성 중 필드명 자동완성
  2. 타입에서 제공하는 기본 속성 활용 가능
    ```
  sum(a: number, b: number): number {
    return a+b;
  }
  const result = sum(10, 20);  // result: number
  result.toLocaleString();     // number타입에서 제공하는 속성 자동완성됨
    ```
### 변수/함수 타입
**Type Annotation**(타입 표기) : `:` 이용해서 JS 코드에 타입 정의
```
const {변수명}: {타입} = {초기값};
function {함수명}({파라미터명}: {타입}): {리턴타입} {...};
```

#### 기본 타입
1. string
2. number
3. boolean
4. Array
5. any
6. void
   - 함수의 리턴타입 정하지 않을 때 사용 (5.any 아님)
7. tuple
   - 모든 요소의 타입이 정해진 길이 고정 배열
    ```
    const address: [string, number] = ['gangnam', 100];
    ```
8. enum
   - 상수 집합
    ```
    enum Avengers { Capt = 2, IronMan, Thor }
    let hero: Avengers = Avengers[2]; // Capt // 인덱스 임의 지정 가능
    let hero: Avengers = Avengers[4]; // Thor
    ```
9. never
    - 함수의 끝에 절대 도달하지 않음
    ```
    function neverEnd(): never {
    	while (true) {};
    }
    ```
#### 함수 타입
- 함수의 타입 정의하는 방법 = 파라미터, 반환값의 타입 정의
    - 파라미터 제한 하는 특성: ex. 함수 파라미터 2개 선언 후 2개 이상or이하 작성시 에러
    - cf. JS는 유동적, 에러발생X
    - **옵셔널 파라미터**: 파라미터 타입 정의할때 `?`붙여서 선택적으로 사용
      ```
      function log(a: string, b?: string): string {
	        return a + b;
      }
      console.log('hello'); // --==>> OK
      console.log('hello', 'world');
      ```
    - **rest 문법**: 파라미터 개수 유동적으로 설정
      ```
      function sum(a: number, ...rest: number[]): number {
          const total = 0;
          for (let key in rest) {
      	    total += key;
          }
          return a + total;
      }
      ```
      - cf. rest 문법 VS spread 문법
        |       | spread      | rest  |
        | :---: |-------------| ----- |
        | 개념   | `펼치다` 기존 객체/배열 변동없이 하위 항목 모두 설정 | `나머지` 0, 1, ... 특정 인덱스값 외 나머지 |
        | 사용   | 객체, 배열    | 객체, 배열, 함수 파라미터 |

#### 연산자를 이용한 타입 정의
```
interface Person {
	name: string; // 공통 속성
	age: number;
}
interface Developer {
	name: string; // 공통 속성
	skill: string;
}
```
1. **Union 타입** = 교집합 `|` = 공통 속성에만 접근 가능
   ```
   function askSomeone(someone: Person | Developer) {
		someone.name
   	// someone.age
   	// someone.skill
   } 
   ```
   - **Type Guard** 통해서 Union 타입에서 특정 가능
     ```
     function whoisit(someone: Person | Developer) {
		if (someone.name === '개발자') {
     		// Developer
     		console.log(someone.skill); // name, skill 자동완성
     	} else {
     		console.log(someone.age); // name, age 자동완성
     	}
     }
     ```
2. **Intersection 타입** = 합집합 `&` = 모든 속성에 접근 가능
   ```
   function askSomeone(someone: Person & Developer) {
		someone.name
   	someone.age
   	someone.skill
   } 
   ```




