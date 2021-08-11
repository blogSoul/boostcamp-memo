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

```javascript
const regex = /(?<code>\d+)_(?<name>\S+)\.sql/;
const fileName = '1_create_users_table.sql';
const groups = fileName.match(regex).groups;
console.log(groups.code);  // 1
console.log(groups.name);  // create_users_table
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

### 📘 url encoding에 대하여 :

url encoding이 필요한 이유 :

url은 아스키코드를 사용합니다. 아스키 코드는 1바이트도 가능합니다.

파싱이 가능해주기 때문입니다. 공백문자 때문입니다.

유저 패스워드를 드러나지 않게 하려고

* http 파일은 무조건 아스키코드만 사용이 가능합니다.

네트워크 물리적인 측면에서 보면 아스키 코드와 적합한 부분이 많습니다. 128개를 나타내는 부분이라던지

base64 방식을 생각해보자!!

보안 사례 : 공격하는 사례, sql injection 주민등록번호를 확인하는 경우

악성 스크립트 같은 경우도 사용이 이루어집니다.

프로그램에서 로그를 남기는데 그랩을 이용해서 로그를 찾는 방식에서 정규식을 확인해보았습니다.

이메일 형식 체크, 전화번호, 날짜 체크 확인

비밀번호 양식 확인에서 사용합니다.

html parser에서 flex를 구현했는데 거기에서 사용이 이루어집니다.

### 🎞 Remark

Say goodbye to URLs with embedded credentials :

https://medium.com/@lmakarov/say-goodbye-to-urls-with-embedded-credentials-b051f6c7b6a3

유종의 미를 거두자 💪💪💪 

* url 구성도

scheme:[//authority]path[?query][#fragment]

path는 empty string이거나 /가 시작합니다.

C:/를 치면 file:///path처럼 나옵니다.

file://path은 wrong uri입니다.

bnf 확인해보기

top - down , bottom - up 방식 중 하나 정해서 구현해야 하는 과제였습니다.

(?:)가 regex의 핵심이다!

import는 레거시적인 부분에서 불편합니다.

jest에서 import를 사용하려면 다른 설정을 해야 합니다.

package-lock.json : package에 사용하는 모듈들에 필요한 모든 package에 적어 관리해줍니다.

해당 명령어 : npm ci lock

package manager : pip, npm, yarn, ...

* getter / setter를 사용하면 readonly을 접근하는 좋은 방식이라고 생각합니다.

생성자 자체가 함수여서 객체를 리턴을 하면 객체를 리턴하고 원시타입으로 리턴하면 this를 리턴해줍니다

빈 객체를 리턴하는 방식이 좋을 거 같습니다.

싱글톤처럼 check한 후 생성을 하는 함수를 check하는 함수 안에 넣어 싱글톤 패턴처럼 적용하는 방법도 존재한다고 생각합니다.

factory method 방식으로 사용합니다.

단위 테스트에 관해 mock(가짜 객체) 한번 확인해보기 

참고 사이트 : https://www.crocus.co.kr/1555
