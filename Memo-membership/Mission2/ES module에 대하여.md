## ๐ Day 0 - BoostCamp

### ๐ ์ด์ 

> ์ฐธ๊ณ  ์ฌ์ดํธ : https://ui.toast.com/weekly-pick/ko_20180402
> ์ฐธ๊ณ  ์ฌ์ดํธ : https://www.sitepoint.com/understanding-es6-modules/

1. Code can be split into smaller files of self-contained functionality.
2. The same modules can be shared across any number of applications.
3. Ideally, modules need never be examined by another developer, because theyโve has been proven to work. 
4. Code referencing a module understands itโs a dependency. If the module file is changed or moved, the problem is immediately obvious. 
5. Module code (usually) helps eradicate naming conflicts. Function x() in module1 cannot clash with function x() in module2. Options such as namespacing are employed so calls become module1.x() and module2.x().

### ๐ CommonJS(CJS)์ ESM(EcmaScript modules)

์ด์ฒ๋ผ ๋ชจ๋์ ์ ์ฉํ๋ฏ๋ก ๊ทธ๋์ ์๋ฐ์คํฌ๋ฆฝํธ์ ๋ชจ๋์ ๊ธฐ๋ฅ์ ๋์ํ๋ ค๋ ๋ธ๋ ฅ์ด ์ฌ๋ฌ ๋ฒ ์์๋ค.

ํ์ฌ ํ๋ฐํ๊ฒ ์ฌ์ฉ๋๋ ๋ชจ๋ ์์คํ์ ๋ ๊ฐ์ง๊ฐ ์๋ค.

CommonJS(CJS)๋ Node.js๊ฐ ์ค๋์ ๋ถํฐ ์ฌ์ฉํด์ค๋ ๊ฒ์ด๋ค.

ESM(EcmaScript modules)์ ์๋ฐ์คํฌ๋ฆฝํธ ๋ช์ธ์ ์ถ๊ฐ๋ ์ต์ ์ ๋ชจ๋ ์์คํ์ด๋ค.

๋ธ๋ผ์ฐ์ ๋ ์ด๋ฏธ ES ๋ชจ๋์ ์ง์ํ๋ฉฐ Node.js๋ ES ๋ชจ๋ ์ง์์ ์ถ๊ฐ ์ค์ด๋ค.

Module๋ก ์ค์ ํ๋ฉด entry point๋ฅผ ์ฐพ์์ ๋ฐ๋ผ ๋ค์ด๊ฐ๋ฉด ๋ฉ๋๋ค.

### ๐ ES ๋ชจ๋์ ์ธ ๊ฐ์ง ๋จ๊ณ

1. ๊ตฌ์ฑ - ๋ชจ๋  ํ์ผ์ ์ฐพ์ ๋ค์ด๋ก๋ํ๊ณ  ๋ชจ๋ ๋ ์ฝ๋๋ก ๊ตฌ๋ฌธ๋ถ์ํ๋ค.
2. ์ธ์คํด์ค ํ - export ๋ ๊ฐ์ ๋ชจ๋ ๋ฐฐ์นํ๊ธฐ ์ํด ๋ฉ๋ชจ๋ฆฌ์ ์๋ ๊ณต๊ฐ๋ค์ ์ฐพ๋๋ค(์์ง ์ค์  ๊ฐ์ ์ฑ์ฐ์ง ์์). ๊ทธ๋ค์ export์ import๋ค์ด ์ด๋ฐ ๋ฉ๋ชจ๋ฆฌ ๊ณต๊ฐ๋ค์ ๊ฐ๋ฆฌํค๋๋ก ํ๋ค. ์ด๋ฅผ ์ฐ๊ฒฐ(linking) ์ด๋ผ๊ณ  ํ๋ค. 
3. ํ๊ฐ - ์ฝ๋๋ฅผ ์คํํ์ฌ ์์์ ๊ฐ์ ๋ณ์์ ์ค์  ๊ฐ์ผ๋ก ์ฑ์ด๋ค.

### ๐ ES ๋ชจ๋์ ๊ตฌ์ฑ ๋จ๊ณ์์์ ์ธ ๊ฐ์ง ๋จ๊ณ

1. ๋ชจ๋์ด ๋ค์ด์๋ ํ์ผ์ ์ด๋์ ๋ค์ด๋ก๋ ํ  ๊ฒ์ธ์ง ํ์ธํ๋ค.(module resolution์ด๋ผ๊ณ ๋ ํจ).

2. ํ์ผ์ ๊ฐ์ ธ์จ๋ค(URL์ ํตํด ๋ค์ด๋ก๋ ํ๊ฑฐ๋ ํ์ผ ์์คํ์์ ๋ถ๋ฌ์ด).

3. ํ์ผ์ ๋ชจ๋ ๋ ์ฝ๋๋ก ๊ตฌ๋ฌธ๋ถ์ํ๋ค.

### ๐ Remark

https://ui.toast.com/weekly-pick/ko_20180402
