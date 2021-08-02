## 📕 Day  - BoostCamp

### 📘 first-class object에 관하여

first-class object란 다른 객체들에 일반적으로 적용 가능한 연산을 모두 지원하는 객체

### 📘 Functional Reactive Programming 패러다임에 관하여

Data가 아닌 Process에 집중해서 프로그램을 만들자

Imperative programming : 명령형 프로그래밍 (cmd)

Declarative programming : 선언형 프로그래밍 (functions)

input ❌ output ⭕ : Generator

input ⭕ output ⭕ : Function

input ⭕ output ❌ : Consumer

#### Functional

> Side-Effect가 없도록 프로그래밍하는 패러다임

데이터는 immutable하게 취급하자

데이터 변경이 필요할 때는 새로 만들자.

Side-Effect을 없에기 위해서 Pure Function을 사용하자.

Function들의 Composition과 High-Order Function으로 프로그램을 만들자

#### Reactive

> Async한 작업을 Functional하게 처리하는 아이디어

Async job, Expensive job은 어떻게 효율적으로 처리할까?

Reactive programming : Async한 데이터를 어떻게 처리할 건지 알 수 있습니다.

java : ReactFX, javascript : Bacon.js, Swift : RxSwift

Async 한 처리를 Functional하게 처리하자

return값은 Stream인 Observable을 반환하자

Stream에 흐르는 Data /Event 를 Operator로 처리하지

Stream과 Stream을 연결하자

Data가 아닌 Process에 집중해서 프로그램을 만들자

![20210728_235337](https://user-images.githubusercontent.com/42922298/127344655-c86ff6b6-e723-4cc5-8063-e0dd9e01e2c9.png)

참고 사이트 : https://www.youtube.com/watch?v=cXi_CmZuBgg&t=1s

### 📘 closure에 대하여 

A closure is the combination of a function and the lexical environment within which that function was declared.

클로저는 함수와 그 함수가 선언됐을 때의 렉시컬 환경(Lexical environment)과의 조합이다.

```javascript
function init() {
  var name = "Mozilla"; // name은 init에 의해 생성된 지역 변수이다.
  function displayName() { // displayName() 은 내부 함수이며, 클로저다.
    alert(name); // 부모 함수에서 선언된 변수를 사용한다.
  }
  displayName();
}
init();
```

위 코드에 보면 `displayName()`안에 `name`을 선언하지 않았지만 같은 범위에 존재하는 `name`을 참고하고 있습니다.

closure는 반환된 내부함수가 Lexical environment(=자신이 선언됐을 때의 환경)인 scope를 기억하여 자신이 선언됐을 때의 scope 밖에서 호출되어도 그 scope에 접근할 수 있는 함수를 의미합니다. 

closure는 Lexical environment를 기억하는 함수다

* 대표적인 예시

```javascript
var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }
};

var counter1 = makeCounter();
var counter2 = makeCounter();
alert(counter1.value()); /* 0 */
counter1.increment();
counter1.increment();
alert(counter1.value()); /* 2 */
counter1.decrement();
alert(counter1.value()); /* 1 */
alert(counter2.value()); /* 0 */
```

객체마다 기억하고 있는 scope는 다를 것입니다.

#### 렉시컬 환경이란?

전역 렉시컬 환경은 외부 참조를 갖지 않는다.

렉시컬 환경은 블록단위로 생성되고 관리된다고 합니다.

#### block과 closure의 차이점

block is just a piece of code that can be composed by statements and declarations

block은 명령문과 선언으로 구성될 수 있는 코드의 일부일 뿐입니다.

closure is a real first-class object, a real variable that has a block as its value.

closure는 블록을 값으로 갖는 실제 변수인 실제 일급 객체입니다.

#### 변수에 따른 block 범위 차이

![20210728_215345](https://user-images.githubusercontent.com/42922298/127344659-fb456fa5-5866-49f2-9a31-4039058b95fc.png)

### 📘 Higher Order Function에 관하여

#### Array.prototype.reduce<U>(callback: (state: U, element: T, index: number, array: T[]) => U, firstState?: U):

reduce()는 배열을 순회하며 각 요소에 대하여 이전의 콜백함수 실행 반환값을 전달하여 콜백함수를 실행하고 그 결과를 반환해주는 함수입니다.

오른쪽부터 먼저 보는 reduceRight()도 존재합니다.

![20210729_005951](https://user-images.githubusercontent.com/42922298/127358458-d9ff7a11-afa0-409c-bef8-08ff1d6911be.png)

```javascript
let a = ['a', 'a', 'b', 'b', 'b','c', 'c', 'd', 'd'];

let b = a.reduce((x, y, idx, arr) => {
    x[y] = ++x[y] || 1;
    return x;
}, {});

console.log(b);
// { a: 2, b: 3, c: 2, d: 2 }
```

#### Array.prototype.forEach(callback: (value: T, index: number, array: T[]) => void, thisArg?: any): void

The .forEach() method executes a callback function on each of the elements in an array in order.

.forEach()는 인자 하나하나에 대한 callback함수를 실행합니다.

```javascript
const numbers = [28, 77, 45, 99, 27];
 
numbers.forEach(number => {  
  console.log(number);
}); 
```

#### Array.prototype.sort(compareFn?: (a: T, b: T) => number): this

해당 iterable한 객체의 원소를 정렬해줍니다. 

기본 정렬 순서는 문자열 Unicode 코드 포인트 순서에 따릅니다.

```javascript
const points = [40, 100, 1, 5, 2, 25, 10];

// 숫자 배열 오름차순 정렬
// 비교 함수의 반환값이 0보다 작은 경우, a를 우선하여 정렬한다.
points.sort(function (a, b) { return a - b; });
// ES6 화살표 함수
// points.sort((a, b) => a - b);
console.log(points); // [ 1, 2, 5, 10, 25, 40, 100 ]

// 숫자 배열에서 최소값 취득
console.log(points[0]); // 1

// 숫자 배열 내림차순 정렬
// 비교 함수의 반환값이 0보다 큰 경우, b를 우선하여 정렬한다.
points.sort(function (a, b) { return b - a; });
// ES6 화살표 함수
// points.sort((a, b) => b - a);
console.log(points); // [ 100, 40, 25, 10, 5, 2, 1 ]

// 숫자 배열에서 최대값 취득
console.log(points[0]); // 100
```

#### Array.prototype.map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[]

map()은 배열을 순회하며 각 요소에 대하여 인자로 주여진 콜백함수의 반환값으로 새로운 배열을 생성하여 반환해주는 함수입니다.

```javascript
Array.prototype.myMap = function (iteratee) {
  // 첫번재 매개변수에 함수가 전달되었는지 확인
  if (!iteratee || {}.toString.call(iteratee) !== '[object Function]') {
    throw new TypeError(iteratee + ' is not a function.');
  }

  const result = [];
  for (let i = 0, len = this.length; i < len; i++) {
    /**
     * 배열 요소의 값, 요소 인덱스, 메소드를 호출한 배열, 즉 this를 매개변수를 통해 iteratee에 전달하고
     * iteratee를 호출하여 그 결과를 반환용 배열에 푸시하여 반환한다.
     */
    result.push(iteratee(this[i], i, this));
  }
  return result;
};

const result = [1, 4, 9].myMap(function (item, index, self) {
  console.log(`[${index}]: ${item} of [${self}]`);
  return Math.sqrt(item);
});

console.log(result); // [ 1, 2, 3 ]
```

#### Array.prototype.filter(callback: (value: T, index: number, array: Array) => any, thisArg?: any): T[]

filter()는 콜백함수의 실행 결과가 true인 배열 요소의 값만을 추출한 새로운 배열을 반환해주는 함수입니다.

```javascript
Array.prototype.myFilter = function (predicate) {
  // 첫번재 매개변수에 함수가 전달되었는지 확인
  if (!predicate || {}.toString.call(predicate) !== '[object Function]') {
    throw new TypeError(predicate + ' is not a function.');
  }

  const result = [];
  for (let i = 0, len = this.length; i < len; i++) {
    /**
     * 배열 요소의 값, 요소 인덱스, 메소드를 호출한 배열, 즉 this를 매개변수를 통해 predicate에 전달하고
     * predicate를 호출하여 그 결과가 참인 요소만을 반환용 배열에 푸시하여 반환한다.
     */
    if (predicate(this[i], i, this)) result.push(this[i]);
  }
  return result;
};

const result = [1, 2, 3, 4, 5].myFilter(function (item, index, self) {
  console.log(`[${index}]: ${item} of [${self}]`);
  return item % 2; // 홀수만을 필터링한다 (1은 true로 평가된다)
});

console.log(result); // [ 1, 3, 5 ]
```

#### Array.prototype.some(callback: (value: T, index: number, array: Array) => boolean, thisArg?: any): boolean

some()은 배열 내 일부 요소가 콜백 함수의 테스트를 통과하는지 확인하여 그 결과를 boolean으로 반환해주는 함수입니다.

```javascript
// 배열 내 요소 중 10보다 큰 값이 1개 이상 존재하는지 확인
let res = [2, 5, 8, 1, 4].some(function (item) {
  return item > 10;
});
console.log(res); // false

res = [12, 5, 8, 1, 4].some(function (item) {
  return item > 10;
});
console.log(res); // true

// 배열 내 요소 중 특정 값이 1개 이상 존재하는지 확인
res = ['apple', 'banana', 'mango'].some(function (item) {
  return item === 'banana';
});
console.log(res); // true
```

#### Array.prototype.every(callback: (value: T, index: number, array: Array) => boolean, thisArg?: any): boolean

every()는 배열 내 모든 요소가 콜백함수의 테스트를 통과하는지 확인하여 그 결과를 boolean으로 반환해주는 함수입니다.

```javascript
// 배열 내 모든 요소가 10보다 큰 값인지 확인
let res = [21, 15, 89, 1, 44].every(function (item) {
  return item > 10;
});
console.log(res); // false

res = [21, 15, 89, 100, 44].every(function (item) {
  return item > 10;
});
console.log(res); // true
```

#### Array.prototype.find(predicate: (value: T, index: number, obj: T[]) => boolean, thisArg?: any): T | undefined

find()는 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행하여 그 결과가 참인 첫번째 요소를 반환해주는 함수입니다.

만약 true가 없다면 undefined를 반환합니다.

true인 요소의 인덱스를 찾는 findIndex()도 있습니다.

```javascript
const users = [
  { id: 1, name: 'Lee' },
  { id: 2, name: 'Kim' },
  { id: 2, name: 'Choi' },
  { id: 3, name: 'Park' }
];

Array.prototype.myFind = function (predicate) {
  // 첫번재 매개변수에 함수가 전달되었는지 확인
  if (!predicate || {}.toString.call(predicate) !== '[object Function]') {
    throw new TypeError(predicate + ' is not a function.');
  }

  /**
   * 배열 요소의 값, 요소 인덱스, 메소드를 호출한 배열, 즉 this를 매개변수를 통해 predicate에 전달하고
   * predicate를 호출하여 그 결과가 참인 요소를 반환하고 처리를 종료한다.
   */
  for (let i = 0, len = this.length; i < len; i++) {
    if (predicate(this[i], i, this)) return this[i];
  }
};

const result = users.myFind(function (item, index, array) {
  console.log(`[${index}]: ${JSON.stringify(item)} of [${JSON.stringify(array)}]`);
  return item.id === 2; // 요소의 id 프로퍼티의 값이 2인 요소를 검색
});

console.log(result); // { id: 2, name: 'Kim' }
```

참고 사이트 : https://poiemaweb.com/js-array-higher-order-function

### 🎞 Remark

전개 구문으로 변수를 Set으로 가능

`const prime_set = (num => {return new Set([1, num])});`

parseInt 보다 floor로 자연수를 만드는 것이 좋습니다.

소수점이 긴 수에 parseInt하면 가끔씩 오류가 생길 수도 있는거 같습니다.

concat보단 전개구문([...A])으로 하는 것이 좋습니다.

const는 값이 불변하는게 아니라 참조가 불변하는 것입니다.

const로 선언한 경우 배열 내부의 값을 바꿀 수는 없습니다.

const는 원시 타입은 바꿀 수 없지만 , 배열과 같은 object 타입은 안에 있는 값을 바꿀 수 있습니다.

freeze를 쓰면 전부 바꿀 수 없습니다.

* 추가, 탐색

array.push , array  > set

* 삭제

array.push , array  < set

javascript Array는 해시테이블로 구현된 객체입니다.

Arrow function은 function을 대체하는 신문물이 아닙니다.

[...A], slice 로 제일 가까운 층만 깊은 복사가 가능합니다.

깊은 층은 전개구문으로 복사가 불가능합니다.

flatMap으로 1차원 배열로 만들 수 있습니다.

고차함수 : 함수를 인자로 받거나 함수를 리턴하는 함수

콜백 함수 : 인자로 전달하는 함수

### 📘 부스트 캠프에 참여하는 것에 관하여

> 한번 더 생각해보고 마음가짐을 다르게 가져봅시다!

어떻게 학습하는지에 따라 바뀝니다.

해설 영상은 수업 영상이 아닙니다.

질문하는 방법, 학습하는 방법을 다 배워야 합니다!

체크리스트를 채우는 방법이 진짜 방법이 아닙니다.

질문에도 생각과 의도가 있었으면 좋겠습니다.

주어진 시간에 얼마나 할 수 있는지 찾아보도록 합니다.

7시에 찍고 얼마나 만들었는지 확인할 수 있도록 합니다.

여러분을 속이는 방식을 만들지 마세요.

과정들이 보이니깐 명예로운 행동들을 하세요.

동작하는 결과물을 고치지 마세요.

여러분들이 스스로 고민할 수 있는 방법을 만듭니다!

코드 개선은 모든 코드가 공개되기 이전에 할 수 있도록 합니다.

체크 포인트보다 중요한 것이 있습니다.

과정을 어떻게 채우고 있는지 확인하고 있습니다.

체크 포인트에 따라 어떻게 나눠주는지 알려줘야 합니다.

큰 관점에서 성장하고 있는지 확인해야 합니다.

여러분이 고민한 코드만큼 다른 사람 코드 체크하는 방법이 중요합니다.

코드를 공개하는 것은 금지합니다.

돌아가는 코드를 찾는 것보다 전체적인 관점을 찾을 수 있도록 합니다.

9시 이전에 작동하는 코드만 확인해주면 됩니다.

확인할 사항을 코드에 적용하는지 알 수 있도록 합니다.

학습해야 될 거리를 확인해야 합니다!

Ex) 킹만 추가하는 방법도 확인할 수 있도록 합니다.

여러분들 스스로 참여해서 만들고 샆습나더,

학습을 방해하는 요소는 없에줘야 합니다.

정형화된 지식을 만들어야 합니다.

타당한 근거로 이렇게 구현했는지 확인해야 합니다.

자기만의 기준을 만들어 스스로 공부법을 만들 수 있도록 합니다!

이걸로 등수를 매기지 않도록 합니다!

오늘 얘기한 이유는 어떻게 학습했으면 좋겠다는 것을 알려주기 위해서입니다.

답을 알려주진 말자. 몰라서 찾은 내용을 확인할 수 있도록 합니다!

내 행동이 옳은건지 한번씩 확인해야 됩니다.

공부 방식을 한번 확인해봐야 할 듯합니다.

요구사항에  필요한 예외사항은 하는 것이 좋습니다.

gist의 자랑거리를 확인해야 합니다.

내 코드들를 보여주는 것을 수줍은게 맞습니다.

테스트 케이스는 문제가 될 수 있습니다.

gist에는 가능할 듯?

타일 설계를 구체적으로 나눠준 것 있습니다.

학습하는 것과 구현하는 것에 배분을 잘 해야 합니다.

에디터와 떨어거서 고민해보는 것도 필요합니다.

잘못 학습하는 방법을 가지고 있으면 멤버쉽에 못 갈 수도 있습니다.
