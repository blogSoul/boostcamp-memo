## π Day 3 - BoostCamp

### π νμλ‘

flex-grow : flex-item μμκ°, flex-container μμ λ΄λΆμμ ν λΉ κ°λ₯ν κ³΅κ°μ μ λλ₯Ό μ μΈν©λλ€.

prepend : The Element.prepend() method inserts a set of Node objects or DOMString objects before the first child of the Element. DOMString objects are inserted as equivalent Text nodes.

```javascript
let div = document.createElement("div");
let p = document.createElement("p");
let span = document.createElement("span");
div.append(p);
div.prepend(span);

console.log(div.childNodes); // NodeList [ <span>, <p> ]
```

### π Remark

Promise κ΄λ ¨ μ¬μ΄νΈ : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise

Events κ΄λ ¨ μ¬μ΄νΈ : https://nodejs.org/api/events.html

Process κ΄λ ¨ μ¬μ΄νΈ : https://nodejs.org/api/process.html#process_a_note_on_process_i_o
