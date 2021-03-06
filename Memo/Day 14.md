## ๐ Day 14 - BoostCamp

### ๐ ๋น๋๊ธฐ์ ๊ดํ์ฌ

Promise๋ ์๋ฐ์คํฌ๋ฆฝํธ ๋น๋๊ธฐ ์ฒ๋ฆฌ์ ์ฌ์ฉ๋๋ ๊ฐ์ฒด

์๋ฐ์คํฌ๋ฆฝํธ์ ๋น๋๊ธฐ ์ฒ๋ฆฌ : ํน์  ์ฝ๋์ ์ฐ์ฐ์ด ๋๋  ๋๊น์ง ์ฝ๋์ ์คํ์ ๋ฉ์ถ์ง ์๊ณ  ๋ค์ ์ฝ๋๋ฅผ ๋จผ์  ์คํํ๋ ๊ฒ

ex) ajax

ํน์  ๋ก์ง์ ์คํ์ด ๋๋  ๋๊น์ง ๊ธฐ๋ค๋ ค์ฃผ์ง ์๊ณ  ๋๋จธ์ง ์ฝ๋๋ฅผ ๋จผ์  ์คํํ๋ ๊ฒ์ด ๋น๋๊ธฐ ์ฒ๋ฆฌ์๋๋ค

```javascript
function getData(callbackFunc) {
	$.get('https://domain.com/products/1', function(response) {
		callbackFunc(response); // ์๋ฒ์์ ๋ฐ์ ๋ฐ์ดํฐ response๋ฅผ callbackFunc() ํจ์์ ๋๊ฒจ์ค
	});
}

getData(function(tableData) {
	console.log(tableData); // $.get()์ response ๊ฐ์ด tableData์ ์ ๋ฌ๋จ
});
```

* ์ฝ๋ฐฑ ์ง์ฅ

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

์ด์ ๊ฐ์ ์ฝ๋๋ฅผ ์๋์ ๊ฐ์ด ๋ฐ๊ฟ ์ ์์ต๋๋ค.

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

### ๐ Promise์ ๊ดํ์ฌ

A promise is an object that may produce a single value some time in the future

```javascript
function getData(callback) {
  // new Promise() ์ถ๊ฐ
  return new Promise(function(resolve, reject) {
    $.get('url ์ฃผ์/products/1', function(response) {
      // ๋ฐ์ดํฐ๋ฅผ ๋ฐ์ผ๋ฉด resolve() ํธ์ถ
      resolve(response);
    });
  });
}

// getData()์ ์คํ์ด ๋๋๋ฉด ํธ์ถ๋๋ then()
getData().then(function(tableData) {
  // resolve()์ ๊ฒฐ๊ณผ ๊ฐ์ด ์ฌ๊ธฐ๋ก ์ ๋ฌ๋จ
  console.log(tableData); // $.get()์ reponse ๊ฐ์ด tableData์ ์ ๋ฌ๋จ
});
```

* ํ๋ก๋ฏธ์ค์ 3๊ฐ์ง states

Pending(๋๊ธฐ) : ๋น๋๊ธฐ ์ฒ๋ฆฌ ๋ก์ง์ด ์์ง ์๋ฃ๋์ง ์์ ์ํ

Fulfilled(์ดํ) : ๋น๋๊ธฐ ์ฒ๋ฆฌ๊ฐ ์๋ฃ๋์ด ํ๋ก๋ฏธ์ค๊ฐ ๊ฒฐ๊ณผ ๊ฐ์ ๋ฐํํด์ค ์ํ

Rejected(์คํจ) : ๋น๋๊ธฐ ์ฒ๋ฆฌ๊ฐ ์คํจํ๊ฑฐ๋ ์ค๋ฅ๊ฐ ๋ฐ์ํ ์ํ

```javascript
function getData() {
  return new Promise(function(resolve, reject) {
    var data = 100;
    resolve(data);
  });
}

// resolve()์ ๊ฒฐ๊ณผ ๊ฐ data๋ฅผ resolvedData๋ก ๋ฐ์
getData().then(function(resolvedData) {
  console.log(resolvedData); // 100
});
```

๋ฐ๋ผ์ Promise๋ก ์ค์ ํ๋ฉด ์ค๊ณ๋๋ฅผ ๊ทธ๋ฆฌ๋ฏ์ด ๋น๋๊ธฐ ๋ฐฉ์์ ํ๋ฆ๋๋ก ์ด์ ์ ์์ ๊ฒ์๋๋ค.

### ๐ async/awaitdp rhksgkdu

async/await์ผ๋ก๋ ๋น๋๊ธฐ ๋ฐฉ์์ ๊ตฌํํ  ์ ์์ต๋๋ค.

```javascript
async function myFetch() {
  let response = await fetch('coffee.jpg');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.blob();

}

myFetch().then((blob) => {
  let objectURL = URL.createObjectURL(blob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}).catch(e => console.log(e));
```

๋น๋๊ธฐ ํจ์๋ฅผ async ํจ์๋ก ๋ง๋ค๊ธฐ ์ํ์ฌ function()์์ async ํค์๋๋ฅผ ์ถ๊ฐํฉ๋๋ค. 

async function()์ await ํค์๋๊ฐ ๋น๋๊ธฐ ์ฝ๋๋ฅผ ํธ์ถํ  ์ ์๊ฒ ํด์ฃผ๋ ํจ์์๋๋ค.

### ๐ ๊ฐ์ฒด์ ๋ชจ๋์ ์ด๋ค ๋ฐฉ์์ด ์ณ์ ๊ฒ์ธ๊ฐ?

SOLID๋ฅผ ์งํค๋ ๊ฒ์ด ์ ์ผ ์ค์ํ๋ค๊ณ  ์๊ฐํฉ๋๋ค!

![20210806_104322](https://user-images.githubusercontent.com/42922298/128443404-79b97428-afde-4f73-9641-3508a7048fe8.png)
![20210806_104416](https://user-images.githubusercontent.com/42922298/128443407-63e48107-8c3f-488f-ad47-3f95268ec7b2.png)
![20210806_104441](https://user-images.githubusercontent.com/42922298/128443408-813a95fa-76e8-49c0-8e99-6ee2d7adb92a.png)
![20210806_104528](https://user-images.githubusercontent.com/42922298/128443410-f3eb8cb9-82d4-44e8-b2f9-119c90279cd9.png)
![20210806_104540](https://user-images.githubusercontent.com/42922298/128443412-1e5604b2-4747-4266-a0d1-ee45d316ffb2.png)
![20210806_104554](https://user-images.githubusercontent.com/42922298/128443413-f7ae992b-f609-44eb-b04a-8e3310e382fa.png)

### ๐ ๋น๋๊ธฐ ๋ฐฉ์ ๊ตฌํ์ ๊ดํ์ฌ 

๋น๋๊ธฐ ๋ฐฉ์์ผ๋ก ๊ตฌํ์ ํ๋ฉด ์์๊ฐ ์ ํด์ ธ ์์ง ์์ ๋ณ์ ์ํ๊ฐ ๋ฌ๋ผ์ง ์ ์์ต๋๋ค.

๋๋ฒ๊น์ ํ  ๋๋ ํด๋น ์ฝ๋์์ ์๋ฌ๊ฐ ๋  ์ ์๋ ๋ถ๋ถ์ ํ์ธํด์ ์๋ฌ์ ๋ํด ์ถ๋ ฅ์ ํ์ธํ  ์ ์๋๋ก ๋ง๋ค๋ฉด ํด๋น ์ํ๋ฅผ ํ์ธํ  ์ ์์ต๋๋ค.

### ๐ ์ค๋ ๋๋ฅผ ์์ฑํ๋ ๊ฒ๊ณผ ์ฌ๋ฌ ๋น๋๊ธฐ ๋ฐฉ์์ ์ฐจ์ด์ ์ ๊ดํ์ฌ

์ค๋ ๋๋ฅผ ์์ฑํ๋ ๊ฒ์ ํด๋น ํ๋ก์ธ์ค์ ๋ฒ์๋งํผ ์ค๋ ๋๋ฅผ ์์ฑํ  ์ ์๊ณ  ๋น๋๊ธฐ ๋ฐฉ์์ ํจ์ ํธ์ถ ํ์๋งํผ ์๊น๋๋ค.

์ค๋ ๋๋ ์ค๋ ๋ ์ค์ผ์ค๋ง์ ๋ฐ๋ผ ์คํ ์์๊ฐ ์ ํด์ง์ง๋ง ๋น๋๊ธฐ ๋ฐฉ์์ ํด๋น ์ฝ๋์ ๋๊ฐ ๋จผ์  ์ค๋์ง์ ๋ฐ๋ผ ์์๊ฐ ์ ํด์ง๋๋ค.

์ค๋ ๋๋ ํ๋ก์ธ์ค์ ๋ฉ๋ชจ๋ฆฌ๋ฅผ ๊ณต์ ๋ฐ์ ์ ์๊ณ  ๋น๋๊ธฐ ๋ฐฉ์์ scope์ ๋ฐ๋ผ ์ฌ์ฉํ  ์ ์๋ ๋ณ์ ๋ฐ ๋ฉ๋ชจ๋ฆฌ๊ฐ ๋ฌ๋ผ์ง๋๋ค.

### ๐ Remark

์ด๋ฒคํธ๋ฅผ ์ฃผ๊ณ  ๋ฐ๋ ๋ฐฉ์์ผ๋ก ๋ง๋ค์์ต๋๋ค.

30์ด๋์ ์๋ฌด๋ฐ ์ํ๊ฐ ์กด์ฌํ์ง ์์ผ๋ฉด ๋๋ธ๋ค.

๋ฌด๋ฃ UML ํด : Gitmind

settimeOut this ํ์ธํ๊ธฐ

resolve -> ์ดํ then
