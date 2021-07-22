## 📕 Day 4 - BoostCamp

해당 과제를 만들 때 만든 방식 :

일단 javascript는 객체에 대한 주소를 알 수 없습니다.

그리고 포인터 개념도 없습니다. 따라서 직접 주소를 만들어 객체마다 주소값을 추가해 주는 방식을 택했습니다.

그리고 4 바이트 기준으로 메모리 구조를 짜라고 되어있지만 4바이트로 짜면 int형을 제외한 나머지 타입을 선언할 수 없습니다.

그리고 javascript는 메모리 할당을 직접할 수 없습니다. 그러므로 객체로 메모리 크기를 지정해주는 방식을 사용했습니다.

* stack 객체 

```javascript
{
    type : "int",
    size : 8,
    address : "0x1111"
}
```

* heap 객체

```javascript
{
    type : "int",
    address : "0x1111"        
}
```

### 프로세스 메모리 모델

![20210723_020001](https://user-images.githubusercontent.com/42922298/126678901-e8f5fc82-6022-4268-9d3e-302006104ef5.png)

![20210723_015621](https://user-images.githubusercontent.com/42922298/126678898-2e24bcd2-bd43-43ef-b8e7-63342c47aff4.png)


Node.js는 V8 자바스크립트 엔진으로 돌아갑니다.

Heap 영역 : 참조형 데이터의 실체(배열, 객체)와 동적 데이터(배열, 객체에 사용된 리터럴 데이터)가 저장되는 영역

New 영역 (Young Gen.) : 최근에 만들어진 데이터가 저장되는 장소

Old 영역 (Old Gen.) : 2번의 Minor GC에서 살아남은 객체들은 Old 영역으로 이동
 
Stack 영역 : Heap에 있는 오브젝트를 참조하는 포인터와 함께 모드 value 타입을 포함되는 장소

### Process 객체에 관하여

Process 객체를 사용하면 실제 프로세스 메모리가 어떻게 관리되고 있는지 확인할 수 있습니다.

참고 : https://nodejs.org/api/process.html

### 프로세스 메모리 동작 방식

![7KpvEn1](https://user-images.githubusercontent.com/42922298/126677978-67a1aea1-695e-411b-8aa7-15b3ea9fbbab.gif)

이와 같이 stack에는 주소가 heap에는 실제 값을 가지고 있습니다.

### 🎞 Remark 

Pointers and dynamic memory - stack vs heap 영상 :

https://www.youtube.com/watch?v=_8-ht2AKyH4&list=LL&index=5&t=11s

V8 엔진(자바스크립트, NodeJS, Deno, WebAssembly) 내부의 메모리 관리 시각화하기 :

https://ui.toast.com/weekly-pick/ko_20200228

JavaScript 를 통해 Binary Data 조작하기 :

http://mohwa.github.io/blog/javascript/2015/08/31/binary-inJS/