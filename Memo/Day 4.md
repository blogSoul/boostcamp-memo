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
