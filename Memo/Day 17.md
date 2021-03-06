## ๐ Day 17 - BoostCamp

### ๐ URL ๊ตฌ์ฑ ์ฒด๊ณ์ ๊ดํ์ฌ

![image](https://user-images.githubusercontent.com/42922298/128956339-049f7508-df6a-4699-abd7-4eadccc6b3e9.png)

`URI = scheme:[//authority]path[?query][#fragment]`

`authority = [userinfo@]host[:port]`

์์ ๊ฐ์ ๋ฐฉ์์ ๋ฐ๋ผ url์ด ๊ตฌ์ฑ๋์ด์ง๋๋ค.

์ฐธ๊ณ  ์ฌ์ดํธ : https://en.wikipedia.org/wiki/URL#cite_note-FOOTNOTERFC_23961998%C2%A73.3-21

#### ๐ file ๋งํฌ์ ๋ํ์ฌ

`file://host/path`๋ก ์ด๋ฃจ์ด์ ธ ์์ต๋๋ค.

์์ ๊ฐ์ด url์ ํ๋์ ์ฝ์์ด๋ฏ๋ก ์ต๋ํ ์งํค๋ ๋ฐฉ์์ผ๋ก ๋ง๋ค ์ ์๋๋ก ๋ธ๋ ฅํด์ผ ํฉ๋๋ค.

๋ฆฌ์์ค๊ฐ ๊ฐ์ง๊ณ  ์๋ ์ฃผ์๋ ์ ์ผํด์ผ ํ๋ค๊ณ  ์๊ฐํฉ๋๋ค.

๋ฐ๋ผ์ ๊ณ ์ ํ ์์์ด ์์ด์ผ ์ข์ URL์ด๋ผ๊ณ  ์๊ฐํฉ๋๋ค!

rfc url ๋งํฌ ์ฌ์ดํธ : https://datatracker.ietf.org/doc/html/rfc3986#page-50

์ ์ฌ์ดํธ๊ฐ ๊ณต์ ๋ฌธ์์ด๋ฏ๋ก ๊ผญ ํ์ธํ๊ณ  ์ฐพ์๋ณผ ์ ์๋๋ก ํฉ๋๋ค!

### ๐ ์ ๊ท์์ ๊ดํ์ฌ

> ์ ๋ง ์ข์ ์ฌ์ดํธ : https://regex101.com/

```javascript
'string'.match(/regex/);
/regex/.test('string');
```

`/regex/g` : regex์ ์ฐ์์ ์ผ๋ก ํ์ธ

`/regex/i` : regex์ ๋์๋ฌธ์ ํ์ธ

`/^regex/g` : regex๊ฐ ์๋ ๊ฒฝ์ฐ

`/regex+/g` : regex๊ฐ ํ๋ฒ ์ด์ ๋ฐ๋ณตํ๋ ๊ฒฝ์ฐ

`/regex*/g` : regex๊ฐ 0๋ฒ ์ด์ ๋ฐ๋ณตํ๋ ๊ฒฝ์ฐ

* ์ฐธ๊ณ  ์ฝ๋

```javascript
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
```

```javascript
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
```

```javascript
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
```

```javascript
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;
```

```javascript
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+[0-9]*$|^[a-z][0-9][0-9]+$/i; // Change this line
//const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);
```

```javascript
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);
```

```javascript
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);
```

```javascript
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);
```

```javascript
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
```

```javascript
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
```

```javascript
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);
```

```javascript
let sampleWord = "astronaut";
let pwRegex = /(?=[a-zA-Z0-9]{6,})(?=[a-zA-Z0-9]*[0-9]{2,})/; // Change this line
let result = pwRegex.test(sampleWord);
```

```javascript
let myString = "Eleanor Roosevelt";
let myRegex = /^(Franklin|Eleanor).*Roosevelt$/; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works
```

```javascript
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);
```

```javascript
const regex = /(?<code>\d+)_(?<name>\S+)\.sql/;
const fileName = '1_create_users_table.sql';
const groups = fileName.match(regex).groups;
console.log(groups.code);  // 1
console.log(groups.name);  // create_users_table
```

* arr() ํจ์ regex ๋ฒ์ ผ

```javascript
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
```

* trim() ํจ์ regex ๋ฒ์ ผ

```javascript
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
```

### ๐ ์์กด์ฑ ๊ด๋ฆฌ ๋ฐฉ๋ฒ์ ๋ํ์ฌ

์ ์ผ ์ข์ ๋ฐฉ๋ฒ์ `package.json`์ ์ด์ฉํ๋ ๊ฒ์ด ์ข๋ค๊ณ  ์๊ฐํฉ๋๋ค.

```json
{
  "name": "Day17",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "jest": "^27.0.6"
  }
}
```

์์ ๊ฐ์ด ์คํ ๋ช๋ น์ด๋ `script`์ ๋ฃ๊ณ  package๋ `dependencies`์ ๋ฃ์ด์ค๋๋ค.

๊ทธ๋ฌ๋ฉด `npm install`๋ง์ผ๋ก๋ ํ๋ก์ ํธ์ ํ์ํ ๋ชจ๋  ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ๋ค์ด ๋ฐ์ ์ ์์ต๋๋ค.

### ๐ url encoding์ ๋ํ์ฌ :

url encoding์ด ํ์ํ ์ด์  :

url์ ์์คํค์ฝ๋๋ฅผ ์ฌ์ฉํฉ๋๋ค. ์์คํค ์ฝ๋๋ 1๋ฐ์ดํธ๋ ๊ฐ๋ฅํฉ๋๋ค.

ํ์ฑ์ด ๊ฐ๋ฅํด์ฃผ๊ธฐ ๋๋ฌธ์๋๋ค. ๊ณต๋ฐฑ๋ฌธ์ ๋๋ฌธ์๋๋ค.

์ ์  ํจ์ค์๋๋ฅผ ๋๋ฌ๋์ง ์๊ฒ ํ๋ ค๊ณ 

* http ํ์ผ์ ๋ฌด์กฐ๊ฑด ์์คํค์ฝ๋๋ง ์ฌ์ฉ์ด ๊ฐ๋ฅํฉ๋๋ค.

๋คํธ์ํฌ ๋ฌผ๋ฆฌ์ ์ธ ์ธก๋ฉด์์ ๋ณด๋ฉด ์์คํค ์ฝ๋์ ์ ํฉํ ๋ถ๋ถ์ด ๋ง์ต๋๋ค. 128๊ฐ๋ฅผ ๋ํ๋ด๋ ๋ถ๋ถ์ด๋ผ๋์ง

base64 ๋ฐฉ์์ ์๊ฐํด๋ณด์!!

๋ณด์ ์ฌ๋ก : ๊ณต๊ฒฉํ๋ ์ฌ๋ก, sql injection ์ฃผ๋ฏผ๋ฑ๋ก๋ฒํธ๋ฅผ ํ์ธํ๋ ๊ฒฝ์ฐ

์์ฑ ์คํฌ๋ฆฝํธ ๊ฐ์ ๊ฒฝ์ฐ๋ ์ฌ์ฉ์ด ์ด๋ฃจ์ด์ง๋๋ค.

ํ๋ก๊ทธ๋จ์์ ๋ก๊ทธ๋ฅผ ๋จ๊ธฐ๋๋ฐ ๊ทธ๋ฉ์ ์ด์ฉํด์ ๋ก๊ทธ๋ฅผ ์ฐพ๋ ๋ฐฉ์์์ ์ ๊ท์์ ํ์ธํด๋ณด์์ต๋๋ค.

์ด๋ฉ์ผ ํ์ ์ฒดํฌ, ์ ํ๋ฒํธ, ๋ ์ง ์ฒดํฌ ํ์ธ

๋น๋ฐ๋ฒํธ ์์ ํ์ธ์์ ์ฌ์ฉํฉ๋๋ค.

html parser์์ flex๋ฅผ ๊ตฌํํ๋๋ฐ ๊ฑฐ๊ธฐ์์ ์ฌ์ฉ์ด ์ด๋ฃจ์ด์ง๋๋ค.

### ๐ Remark

Say goodbye to URLs with embedded credentials :

https://medium.com/@lmakarov/say-goodbye-to-urls-with-embedded-credentials-b051f6c7b6a3

์ ์ข์ ๋ฏธ๋ฅผ ๊ฑฐ๋์ ๐ช๐ช๐ช 

* url ๊ตฌ์ฑ๋

scheme:[//authority]path[?query][#fragment]

path๋ empty string์ด๊ฑฐ๋ /๊ฐ ์์ํฉ๋๋ค.

C:/๋ฅผ ์น๋ฉด file:///path์ฒ๋ผ ๋์ต๋๋ค.

file://path์ wrong uri์๋๋ค.

bnf ํ์ธํด๋ณด๊ธฐ

top - down , bottom - up ๋ฐฉ์ ์ค ํ๋ ์ ํด์ ๊ตฌํํด์ผ ํ๋ ๊ณผ์ ์์ต๋๋ค.

(?:)๊ฐ regex์ ํต์ฌ์ด๋ค!

import๋ ๋ ๊ฑฐ์์ ์ธ ๋ถ๋ถ์์ ๋ถํธํฉ๋๋ค.

jest์์ import๋ฅผ ์ฌ์ฉํ๋ ค๋ฉด ๋ค๋ฅธ ์ค์ ์ ํด์ผ ํฉ๋๋ค.

package-lock.json : package์ ์ฌ์ฉํ๋ ๋ชจ๋๋ค์ ํ์ํ ๋ชจ๋  package์ ์ ์ด ๊ด๋ฆฌํด์ค๋๋ค.

ํด๋น ๋ช๋ น์ด : npm ci lock

package manager : pip, npm, yarn, ...

* getter / setter๋ฅผ ์ฌ์ฉํ๋ฉด readonly์ ์ ๊ทผํ๋ ์ข์ ๋ฐฉ์์ด๋ผ๊ณ  ์๊ฐํฉ๋๋ค.

์์ฑ์ ์์ฒด๊ฐ ํจ์์ฌ์ ๊ฐ์ฒด๋ฅผ ๋ฆฌํด์ ํ๋ฉด ๊ฐ์ฒด๋ฅผ ๋ฆฌํดํ๊ณ  ์์ํ์์ผ๋ก ๋ฆฌํดํ๋ฉด this๋ฅผ ๋ฆฌํดํด์ค๋๋ค

๋น ๊ฐ์ฒด๋ฅผ ๋ฆฌํดํ๋ ๋ฐฉ์์ด ์ข์ ๊ฑฐ ๊ฐ์ต๋๋ค.

์ฑ๊ธํค์ฒ๋ผ checkํ ํ ์์ฑ์ ํ๋ ํจ์๋ฅผ checkํ๋ ํจ์ ์์ ๋ฃ์ด ์ฑ๊ธํค ํจํด์ฒ๋ผ ์ ์ฉํ๋ ๋ฐฉ๋ฒ๋ ์กด์ฌํ๋ค๊ณ  ์๊ฐํฉ๋๋ค.

factory method ๋ฐฉ์์ผ๋ก ์ฌ์ฉํฉ๋๋ค.

๋จ์ ํ์คํธ์ ๊ดํด mock(๊ฐ์ง ๊ฐ์ฒด) ํ๋ฒ ํ์ธํด๋ณด๊ธฐ 

์ฐธ๊ณ  ์ฌ์ดํธ : https://www.crocus.co.kr/1555
