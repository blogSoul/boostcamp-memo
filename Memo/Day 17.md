## 📕 Day 17 - BoostCamp

### 📘 정규식에 관하여

```javascript
'string'.match(/regex/);
/regex/.test('string');
```

`/regex/g` : regex에 연속적으로 확인

`/regex/i` : regex에 대소문자 확인

`/^regex/g` : regex가 아닌 경우

`/regex+/g` : regex가 한번 이상 반복하는 경우

`/regex*/g` : regex가 0번 이상 반복하는 경우

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
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
```

```javascript
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
```

### 🎞 Remark