## ๐ Day 0 - BoostCamp

### ๐ ์ ๊ฐ ๊ตฌ๋ฌธ

์ ๊ฐ ๊ตฌ๋ฌธ์ ์ฌ์ฉํ๋ฉด ๋ฐฐ์ด์ด๋ ๋ฌธ์์ด๊ณผ ๊ฐ์ด ๋ฐ๋ณต ๊ฐ๋ฅํ ๋ฌธ์๋ฅผ 0๊ฐ ์ด์์ ์ธ์ (ํจ์๋ก ํธ์ถํ  ๊ฒฝ์ฐ) ๋๋ ์์ (๋ฐฐ์ด ๋ฆฌํฐ๋ด์ ๊ฒฝ์ฐ)๋ก ํ์ฅํ์ฌ, 0๊ฐ ์ด์์ ํค-๊ฐ์ ์์ผ๋ก ๊ฐ์ฒด๋ก ํ์ฅ์ํฌ ์ ์์ต๋๋ค.

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

### ๐ partial application๊ณผ curry์ ์ฐจ์ด

์ฐธ๊ณ  ์ฌ์ดํธ : https://blog.rhostem.com/posts/2017-04-20-curry-and-partial-application

### ๐ Remark
