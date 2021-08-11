## 📕 Day 17 - BoostCamp

### 📘 URL 구성 체계에 관하여

![image](https://user-images.githubusercontent.com/42922298/128956339-049f7508-df6a-4699-abd7-4eadccc6b3e9.png)

`URI = scheme:[//authority]path[?query][#fragment]`

`authority = [userinfo@]host[:port]`

위와 같은 방식을 따라 url이 구성되어집니다.

참고 사이트 : https://en.wikipedia.org/wiki/URL#cite_note-FOOTNOTERFC_23961998%C2%A73.3-21

#### 📘 file 링크에 대하여

`file://host/path`로 이루어져 있습니다.

위와 같이 url은 하나의 약속이므로 최대한 지키는 방식으로 만들 수 있도록 노력해야 합니다.

리소스가 가지고 있는 주소는 유일해야 한다고 생각합니다.

따라서 고유한 자원이 있어야 좋은 URL이라고 생각합니다!

rfc url 링크 사이트 : https://datatracker.ietf.org/doc/html/rfc3986#page-50

위 사이트가 공식 문서이므로 꼭 확인하고 찾아볼 수 있도록 합니다!

### 📘 정규식에 관하여

> 정말 좋은 사이트 : https://regex101.com/

```javascript
'string'.match(/regex/);
/regex/.test('string');
```

`/regex/g` : regex에 연속적으로 확인

`/regex/i` : regex에 대소문자 확인

`/^regex/g` : regex가 아닌 경우

`/regex+/g` : regex가 한번 이상 반복하는 경우

`/regex*/g` : regex가 0번 이상 반복하는 경우

* 참고 코드

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

* arr() 함수 regex 버젼

```javascript
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
```

* trim() 함수 regex 버젼

```javascript
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
```

### 📘 의존성 관리 방법에 대하여

제일 좋은 방법은 `package.json`을 이용하는 것이 좋다고 생각합니다.

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

위와 같이 실행 명령어는 `script`에 넣고 package는 `dependencies`에 넣어줍니다.

그러면 `npm install`만으로도 프로젝트에 필요한 모든 라이브러리를 다운 받을 수 있습니다.

### 🎞 Remark

유종의 미를 거두자 💪💪💪 
