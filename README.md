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
 	enum Shoes {
		Nike = '나이키',
		Adidas = '아디다스',
	}
	const myShoes = Shoes.Nike; // -> '나이키'
 	```
    ```
	enum Avengers { Capt, IronMan, Thor }	  // 초기화하지 않은 경우 숫자형 (0부터 autoincreasing)
    enum Avengers { Capt = 2, IronMan, Thor } // 인덱스 임의 지정 가능
    let hero: Avengers = Avengers[2];	  // -> Capt
    let hero: Avengers = Avengers[4];	  // -> Thor
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
   - **[타입 가드](https://github.com/jacarandaring/learn-typescript/blob/master/README.md#타입-가드)** 통해서 Union 타입 중에서 특정 가능
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
#### Class
- TypeScript에서 Class는 `Syntatic Sugar` 기능적으로 추가/변경되는 내용 없음
- 특징
  1. 생성자 함수 constructor() 사용 → JS와 공통점
  2. 생성자 함수 파라미터의 타입 정의
  3. 멤버변수, 접근 범위의 정의 → JAVA와 공통점
  ```
  	Class Person {
		private name: string; // #3
  		public age: number;
  		readonly log: string;
  		constructor(name: string, age: number) { // #1, #2
  			this.name = name;
  			this.age = age;
  		}
  	}
  	const seho = new Person('세호', 30);
  ```
#### Generic
- 타입을 호출부에서 파라미터처럼 설정 **→ 타입에 유연하게 처리**
  - 불필요한 오버로딩, 인터페이스 선언 등의 문제 해결
  - Union 타입일 때 여러 타입에서 공통 제공하는 빌트인함수만 사용 가능한 문제 해결
- 제네릭 인터페이스/클래스 생성 가능 (단 enum, namespace는 제네릭으로 생성 불가)
- API Response 규격 설정할 때 가장 많이 사용
  ```
  type ApiResponse<Data> = {
  	data: Data;
  	isError: boolean;
  };
  const response: ApiResponse<{ name: string; age: number }> = {
  	data: { name: 'name', age: 28 },
  	isError: false,
  };
  ```
- 제네릭으로 제약조건 설정 가능
  ```
  function logLength<T>(text: T): T {
    console.log(text.length); // -> Error 어떤 타입이 설정될지 불확실하여 length 메소드 제공 여부 알 수 없음
    return text;
  }
  // 1. 추론 가능하도록 설정
  function logLength<T>(text: T[]): T[] {
    console.log(text.length); // -> OK
    return text;
  }
  // 2. 정의된 타입 상속(extends)
  interface LengthType {
    length: number;
  }
  function logLength<T extends LengthType>(text: T): T {
    console.log(text.length); // -> OK LengthType에 설정된 속성만 있으면 된다
	console.log({ length: 10 });
	return text;
  }
	// 3. 정의된 타입의 키만 설정(keyof)
  function getProperty<T, O extends keyof T>(obj: T, key: O) {
    return obj[key];
  }
  const obj = { a: 1, b: 2, c: 3 };
  getProperty(obj, 'a'); // -> OK
  getProperty(obj, 'z'); // -> 해당하는 속성 없음
  ```
### 타입 추론
- 타입을 따로 지정하지 않아도 변수 선언/초기화, 인자 기본값, 함수 반환값 등 설정할 때 타입 추론 발생
- **Duck Typing** 또는 **Structural Subtyping** 지향 : 값의 형태에 기반하는 추론
	- \[방식1\] **Best Common Type**: 작성된 표현식 기준으로 가장 근접한 타입으로 추론하는 알고리즘
	- \[방식2\] **Contextual Typing**: 코드상의 문맥을 기준으로 추론하는 알고리즘
	  ```
	  // 함수의 타입 추론하기 위해 window.onmousedown의 타입 검사 => 마우스 이벤트와 연관이 있다는 추론
		window.onmousedown = function(mouseEvent) {
		  console.log(mouseEvent.button);   // -> OK
		  console.log(mouseEvent.kangaroo); // -> 해당하는 속성 없음
		};
	  ```
	  ```
	  // 함수의 타입 추론하기 위해 window.onscroll의 타입 검사 => 파라미터 uiEvent는 UIEvent 객체로 추론
		window.onscroll = function(uiEvent) {
		  console.log(uiEvent.button); // -> 해당하는 속성 없음
		}
	  // but 변수에 할당시 타입 추론이 어렵기 때문에 오류 미발생
	  // (tsconfig.json 파일에 noImplicitAny:false 설정시 오류 발생) 
		const handler = function(uiEvent) {
		  console.log(uiEvent.button); // -> **OK**
		}
	  ```
### 타입 단언
- 개발자가 직접 타입 지정 **캐스팅**
- `as` 키워드 이용
  ```
  /* DOM API 조작할 때 많이 사용 */
  const div = document.querySelector('div') as HTMLDivElement;
  div.innerText;
  ```
### 타입 가드
- 여러 타입 중 원하는 타입으로 좁혀내기
- \[방식1\] `typeof`, `instanceof` 연산자 이용
  ```
  // type Age = 'string' | 'number'
  function getAge(age: Age) {
  	age.length;	// 에러 발생
  	if (typeof age === 'string') {
  		age.length; // 정상 동작
  	}
  }
  ```
- \[방식2\] 커스텀 타입 가드 함수 이용 - 여러 객체 타입을 하나로 좁힐때 효과적
  ```
  // type Age = 'string' | 'number'
  function isString(age: string | number):age is string {
  	return typeof age === 'string';
  }
  function getAge(age: Age) {
  	age.length;	// 에러 발생
  	if (isString(age)) {
  		age.length; // 정상 동작
  	}
  }
  ```
### 타입 호환 (Type Compatibility)
- **구조적 타이핑(structural typing)**에 따라 구조적인 관점에서 내부 속성/타입의 호환성 체크
- ← JS: 기본적으로 객체 리터럴이나 익명함수 등을 사용
```
interface Avengers {
  name: string;
}
let capt = { name: "Captain", location: "Pangyo" };

let hero: Avengers;
hero = capt;  // 가능 <-name 속성
console.log(hero);

function assemble(a: Avengers) {
  console.log("어벤져스 모여라", a.name);
}
assemble(capt); // 가능 <-name 속성
```

### 타입 모듈화


