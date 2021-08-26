## 📕 Day 3 - BoostCamp

### 📘 회의록

flex-grow : flex-item 요소가, flex-container 요소 내부에서 할당 가능한 공간의 정도를 선언합니다.

prepend : The Element.prepend() method inserts a set of Node objects or DOMString objects before the first child of the Element. DOMString objects are inserted as equivalent Text nodes.

```javascript
let div = document.createElement("div");
let p = document.createElement("p");
let span = document.createElement("span");
div.append(p);
div.prepend(span);

console.log(div.childNodes); // NodeList [ <span>, <p> ]
```

### 🎞 Remark

Promise 관련 사이트 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise

Events 관련 사이트 : https://nodejs.org/api/events.html

Process 관련 사이트 : https://nodejs.org/api/process.html#process_a_note_on_process_i_o
