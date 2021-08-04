## 📕 Day 4 - BoostCamp

해당 과제를 만들 때 만든 방식 :

일단 javascript는 객체에 대한 주소를 알 수 없습니다.

그리고 포인터 개념도 없습니다. 따라서 직접 주소를 만들어 객체마다 주소값을 추가해 주는 방식을 택했습니다.

그리고 4 바이트 기준으로 메모리 구조를 짜라고 되어있지만 4바이트로 짜면 int형을 제외한 나머지 타입을 선언할 수 없습니다.

그리고 javascript는 메모리 할당을 직접할 수 없습니다. 그러므로 객체로 메모리 크기를 지정해주는 방식을 사용했습니다.

* stack 객체 

```javascript
{
    type : type, // 어떤 타입으로 이루어졌는지
    address : addressToHex(address), // 포인터 주소가 어떤지
    count : 4, // 얼마나 할당되어 있는지 (포인터 크기는 4로 지정)
    name : ""
}
```

* heap 객체

```javascript
{
    type : type, // 어떤 타입으로 이루어졌는지
    address : addressToHex(address), // 포인터 주소가 어떤지
    count : typeSize * count // 얼마나 할당되어 있는지
}
```

stack 명령어는 8byte로 설정

### 📘 프로세스 메모리 모델

![20210723_020001](https://user-images.githubusercontent.com/42922298/126678901-e8f5fc82-6022-4268-9d3e-302006104ef5.png)

![20210723_015621](https://user-images.githubusercontent.com/42922298/126678898-2e24bcd2-bd43-43ef-b8e7-63342c47aff4.png)


Node.js는 V8 자바스크립트 엔진으로 돌아갑니다.

Heap 영역 : 참조형 데이터의 실체(배열, 객체)와 동적 데이터(배열, 객체에 사용된 리터럴 데이터)가 저장되는 영역

New 영역 (Young Gen.) : 최근에 만들어진 데이터가 저장되는 장소

Old 영역 (Old Gen.) : 2번의 Minor GC에서 살아남은 객체들은 Old 영역으로 이동
 
Stack 영역 : Heap에 있는 오브젝트를 참조하는 포인터와 함께 모드 value 타입을 포함되는 장소

### 📘 Process 객체에 관하여

Process 객체를 사용하면 실제 프로세스 메모리가 어떻게 관리되고 있는지 확인할 수 있습니다.

참고 : https://nodejs.org/api/process.html

### 📘 프로세스 메모리 동작 방식

![7KpvEn1](https://user-images.githubusercontent.com/42922298/126677978-67a1aea1-695e-411b-8aa7-15b3ea9fbbab.gif)

이와 같이 stack에는 주소가 heap에는 실제 값을 가지고 있습니다.

### 📘 javascript 동작원리

V8 : 구글이 주도하여 C++로 작성된 고성능의 자바스크립트 & 웹 어셈블리 언어이다. (ECMAScript와 Web Assembly 표준에 맞게 구현)

![20210723_074406](https://user-images.githubusercontent.com/42922298/126718325-fcc3e751-906d-44f6-9deb-1223c5bdbb60.png)

1. javascript source code를 가져와 Parser에게 넘김
   
2. Parser는 parsing을 통해 AST(Abstract Syntax Tree)로 변환
   
3. AST를 interpreter를 통해 byte code로 변환 (=Ignition)
   
4. 그리고 bytecode를 실행함으로써 실제 작동하게 된다.
   
5. 그 중 자주 사용되는 코드는 TruboFan으로 보내진다.
   
6. TruboFan은 이 코드를 Optimized Machine Code로 compile한 후 사용.

### 📘 NodeJS

nodejs 어플리케이션은 long-running 프로세스입니다.

이 점은 DB 커넥션을 한번 셋업하고 나서 모든 request를 처리하기 위해 계속 재사용한다는 것을 의미합니다.

V8은 자바스크립트를 native code로 컴파일해서 실행합니다.

nodejs내 현재 메모리 사용은 `process.memoryUsage()`로 알 수 있습니다.

참고 링크 : https://nodejs.org/api/process.html#process_process_memoryusage

이 함수는 `Resident Set Size`, `Total Size of the Heap`, `Heap actually Used`를 return합니다.

힙 메모리를 할당하고 풀어주는 메카니즘을 garbage collection 이라고 부릅니다.

`memory leak`는 메모리가 고갈될 때까지 할당을 지속한다면 프로그램 충돌이 발생할 것을 의미합니다.

node.js에서는 V8을 이용해서 자바스크립트를 native code로 컴파일합니다.

garbage collection의 움직임은 간단합니다.

만약 메모리 세그먼트가 어디로부터 참조되지 않는다면 그것은 더 이상 사용되지 않을 것이라고 추측할 수 있다.

Scavenge, 이것은 빠르나 불완전하다.

Mark-Sweep, 이것은 느리지만 참조하지 않는 데이터를 회수한다.

### 📘 자바스크립트의 호출 스택과 이벤트 루프

자바스크립트는 single-thread기반의 언어입니다. 즉 하나의 호출 스택을 가지고 있습니다.

자바스크립트는 이벤트 루프 기반의 비동기 방식으로 Non-Blocking IO를 지원해서 이벤트 루프를 이용해 동시성을 지원합니다.

크롬 V8는 웹 브라우저를 만드는 데 기반을 제공하는 오픈소스 자바스크립트 엔진입니다.

Non-blocking I/O : 입출력 처리는 시작만 해둔 채 완료되지 않은 상태에서 다른 처리 작업을 계속 진행할 수 있도록 멈추지 않고 입출력 처리를 기다리는 방법입니다. 

* 자바스크립트 엔진의 구성요소

![20210803_210943](https://user-images.githubusercontent.com/42922298/128078579-efc1c47a-a1bf-43de-8aa9-e9c4e3a6f131.png)

비동기 요청은 자바스크립트 엔진을 구동하는 런타임 환경(브라우저나 Node.js)이 담당합니다.

*런타임 환경이 제공하는 것

Web APIs

DOM(document)

AJAX(XMLHttpRequest)

Timeout(setTimeout)

Event Loop

자바스크립트는 호출 스택이 하나입니다.

단점 : 브라우저에서 호출 스택에 실행할 함수가 쌓여있는 동안은 다른 일을 할 수 없습니다. 이 상태를 blocked라 합니다. 이 상태에서 브라우저는 렌더링을 할 수도 없고, 다른 코드를 실행할 수도 없습니다.

* stackOverflow 예시

```javascript
var count = 0;
function stack() {
  console.log(++count);
  stack();
}
stack();
```

이러한 문제를 해결하기 위해 이벤트 루프를 통한 동시성 확보를 해야 합니다.

적절하게 task를 쪼개서 비동기 호출을 하고, 또 중간중간 렌더링등 UI 갱신이 이루어질 수 있도록 호출 스택이 빈 상태가 되도록 해주어야 한다.

![20210804_150516](https://user-images.githubusercontent.com/42922298/128130292-2a9bec87-f281-474a-88ab-3121e3399525.png)

이벤트 루프는 호출 스택과 Task Queue를 감시하면서, 만약 호출 스택이 비어있다면 이벤트 루프는 큐에서 첫 번째 Task를 호출 스택에 넣고 해당 Task가 수행됩니다.

이러한 반복을 이벤트 루프에서는 tick이라고 합니다. 

```javascript
while (eventLoop.waitForTask()) {
  const taskQueue = eventLoop.selectTaskQueue();
  if (taskQueue.hasNextTask()) {
    taskQueue.processNextTask();
  }
}
```

하지만 이벤트 루프에서 실제 실행 과정은 호출 스택에 올라가서 수행이 되므로 Run-to-completion 으로 동작합니다.

Run-to-completion : Each message is processed completely before any other message is processed.

* ES6에 들어오면서 새로운 컨셉인 Microtask Queue가 도입되었습니다.

```javascript
console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

Promise.resolve()
  .then(function () {
    console.log("promise1");
  })
  .then(function () {
    console.log("promise2");
  });

console.log("script end");
// 실행결과
// script start
// script end
// promise1
// promise2
// setTimeout
```

* 브라우저의 이벤트 루프 우선순위

1. 이벤트 루프는 실행 순서를 보장하는 여러 queue에서 어떤 task를 꺼내서 실행시킬지 결정한다.

2. 이를 통해 브라우저는 우선순위가 높은 task를 먼저 실행하도록 할 수 있다.

3. microtask는 일반 task보다 높은 우선순위를 가지고 있다.

> 해당 부분 애니메이션 확인하기 : https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

```javascript
//1. script 실행 (log)
console.log("script start");

//2. script 실행 (setTimeout callback task queue에 등록)
setTimeout(function () {
    //11. Task 실행
    console.log("setTimeout");
}, 0);

//3. script 실행 (Promise then callback Microtask queue에 등록)
Promise.resolve()
    .then(function () {
        // 7. MicroTask 실행
        console.log("promise1");
    }) // 8. script 실행 (Promise then callback Microtask queue에 등록)
    .then(function () {
        // 9. MicroTask 실행
        console.log("promise2");
    });

//4. script 실행 (AnimationFrame Animation frames에 등록)
requestAnimationFrame(function () {
    //10. Animation Frame 실행
    console.log("animation");
});

//5. script 실행
console.log("script end");
//6. Stack의 모든 Task 실행완료
```

![20210804_151930](https://user-images.githubusercontent.com/42922298/128131642-be7f24cd-872a-4614-8c56-3936fdb6be58.png)

* 이벤트 루프의 우선순위

1. 호출 스택의 작업을 처리한다.

2. 호출 스택이 비어있다면 microtask queue를 확인하고 작업이 있다면 microtask queue의 task를 작업을 호출 스택으로 넣고 처리한다.

3. 만약 microtask가 비어있다면 Animation Frames를 확인하고 브라우저 렌더링이 발생한다.

4. 1, 2, 3번 작업이 완료되었다면 task queue를 확인하고 작업이 있다면 task queue의 작업을 호출 스택으로 넣고 처리한다.

Animation Frame은 Vsync에 맞춰서 호출되므로 task보다 후에 호출될 수도 있습니다. 

Input과 같은 Event 처리는 Microtask, task, Animation Frame보다 높은 우선순위를 가집니다.

참고 사이트 : https://iamsjy17.github.io/javascript/2019/07/20/how-to-works-js.html

### 🎞 Remark 

stack에서 heap에 있는 기존의 값으로 변경하는 상황에서
stack 포인터는 변경하려고 할 때, 변경하려고 하는 값이 들어 있는 기존의 heap 주소를 가리키게 됩니다.

@spread 연산자를 쓰면서 불변성을 유지하면 forEach를 바꾸면 됩니다.

allocation(매모리 할당)를 따로 구현해서 만들면 됩니다.

utils.js 확인해보기

Ex) import {handleErr, toHexString} from "./utils.js";

[].map().join() 으로 하면 join안 변수를 사이사이 넣어줍니다.

컨벤션 확인하기

> nodejs 관련 링크

Pointers and dynamic memory - stack vs heap 영상 :

https://www.youtube.com/watch?v=_8-ht2AKyH4&list=LL&index=5&t=11s

V8 엔진(자바스크립트, NodeJS, Deno, WebAssembly) 내부의 메모리 관리 시각화하기 :

https://ui.toast.com/weekly-pick/ko_20200228

JavaScript 를 통해 Binary Data 조작하기 :

http://mohwa.github.io/blog/javascript/2015/08/31/binary-inJS/

node.js memory leak 메모리 누수 :

https://dongmin-jang.medium.com/node-js-memory-leak-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EB%88%84%EC%88%98-ac32234cb9e0
