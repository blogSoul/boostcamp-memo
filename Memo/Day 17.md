## 📕 Day  - BoostCamp

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

### 🎞 Remark