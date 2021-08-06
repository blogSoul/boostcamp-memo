## 📕 Day 14 - BoostCamp

### 📘 비동기에 관하여

Promise는 자바스크립트 비동기 처리에 사용되는 객체

자바스크립트의 비동기 처리 : 특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고 다음 코드를 먼저 실행하는 것

ex) ajax

특정 로직의 실행이 끝날 때까지 기다려주지 않고 나머지 코드를 먼저 실행하는 것이 비동기 처리입니다

```javascript
function getData(callbackFunc) {
	$.get('https://domain.com/products/1', function(response) {
		callbackFunc(response); // 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌
	});
}

getData(function(tableData) {
	console.log(tableData); // $.get()의 response 값이 tableData에 전달됨
});
```

* 콜백 지옥

```javascript
$.get('url', function(response) {
	parseValue(response, function(id) {
		auth(id, function(result) {
			display(result, function(text) {
				console.log(text);
			});
		});
	});
});
```

이와 같은 코드를 아래와 같이 바꿀 수 있습니다.

```javascript
function parseValueDone(id) {
	auth(id, authDone);
}
function authDone(result) {
	display(result, displayDone);
}
function displayDone(text) {
	console.log(text);
}
$.get('url', function(response) {
	parseValue(response, parseValueDone);
});
```

### 📘 Promise에 관하여

A promise is an object that may produce a single value some time in the future

```javascript
function getData(callback) {
  // new Promise() 추가
  return new Promise(function(resolve, reject) {
    $.get('url 주소/products/1', function(response) {
      // 데이터를 받으면 resolve() 호출
      resolve(response);
    });
  });
}

// getData()의 실행이 끝나면 호출되는 then()
getData().then(function(tableData) {
  // resolve()의 결과 값이 여기로 전달됨
  console.log(tableData); // $.get()의 reponse 값이 tableData에 전달됨
});
```

* 프로미스의 3가지 states

Pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태

Fulfilled(이행) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태

Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태

```javascript
function getData() {
  return new Promise(function(resolve, reject) {
    var data = 100;
    resolve(data);
  });
}

// resolve()의 결과 값 data를 resolvedData로 받음
getData().then(function(resolvedData) {
  console.log(resolvedData); // 100
});
```

따라서 Promise로 설정하면 설계도를 그리듯이 비동기 방식을 흐름대로 이을 수 있을 것입니다.

### 📘 객체와 모듈은 어떤 방식이 옳은 것인가?

SOLID를 지키는 것이 제일 중요하다고 생각합니다!

![20210806_104322](https://user-images.githubusercontent.com/42922298/128443404-79b97428-afde-4f73-9641-3508a7048fe8.png)
![20210806_104416](https://user-images.githubusercontent.com/42922298/128443407-63e48107-8c3f-488f-ad47-3f95268ec7b2.png)
![20210806_104441](https://user-images.githubusercontent.com/42922298/128443408-813a95fa-76e8-49c0-8e99-6ee2d7adb92a.png)
![20210806_104528](https://user-images.githubusercontent.com/42922298/128443410-f3eb8cb9-82d4-44e8-b2f9-119c90279cd9.png)
![20210806_104540](https://user-images.githubusercontent.com/42922298/128443412-1e5604b2-4747-4266-a0d1-ee45d316ffb2.png)
![20210806_104554](https://user-images.githubusercontent.com/42922298/128443413-f7ae992b-f609-44eb-b04a-8e3310e382fa.png)

### 🎞 Remark