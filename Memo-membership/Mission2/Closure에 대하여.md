## 📕 Day 0 - BoostCamp

### 📘 전개 구문

전개 구문을 사용하면 배열이나 문자열과 같이 반복 가능한 문자를 0개 이상의 인수 (함수로 호출할 경우) 또는 요소 (배열 리터럴의 경우)로 확장하여, 0개 이상의 키-값의 쌍으로 객체로 확장시킬 수 있습니다.

```javascript
//code : https://www.gideonpyzer.com/blog/javascript-currying-and-partial-application/

let curry = (fn) => { 
    return function curryFn(...args1) {
        if (args1.length >= fn.length) {
            return fn(...args1);
        } else {
            return (...args2) => curryFn(...args1, ...args2);
        }
    }
}

function multiply(a, b, c){
    return a * b * c;
}

let curriedMultiply = curry(multiply);
let result = curriedMultiply(2,3)(4);
```

### 📘 partial application과 curry의 차이

참고 사이트 : https://blog.rhostem.com/posts/2017-04-20-curry-and-partial-application

### 🎞 Remark
