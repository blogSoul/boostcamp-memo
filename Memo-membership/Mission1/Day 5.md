## ๐ Day 5 - BoostCamp

### ๐ ํ๋ก์ ํธ ๊ธฐํ์

```json
{
  // ์ผ์
  year : 2021, // ๋
  month : 7, // ์
  day : 20, // ์ผ
  type : '์ํ', // ๋ถ๋ฅ
  context : '์คํธ๋ฆฌ๋ฐ์๋น์ค ์ ๊ธฐ ๊ฒฐ์ ', // ๋ด์ฉ
  payment : 'ํ๋์นด๋', // ๊ฒฐ์ฌ์๋จ
  money : 10900, // ๊ธ์ก
  isIncome : true // ์์์ด๋ฉด true, ์ง์ถ์ด๋ฉด false      
}
```

### ๐ ํ์๋ก

submit ์์ ์ด ์ด๋ฃจ์ด์ง๊ฑฐ๋ input์ด ์์ฑ๋์์ ๋, ์๊ฐ์ด ๋ณ๊ฒฝ๋ฉ๋๋ค.

prg ํจํด

### ๐ ๋ง์คํฐ ํด๋์ค

1์ฃผ์ฐจ ํผ๋๋ฐฑ 

git ์ฌ์ฉ๋ฒ :

pro git ์ฑ, ์ปค๋ฆฌํ๋ผ : pro git 2nd book (pdf โญ, ์ฑ โ)

์ ๋ฐ git ์ข ์์์๋ผ -n์ฌ-

์ด๋ป๊ฒ Git์ด ๋์ํ๋๊ฐ? ์ฑ ์ถ์ฒ

์ปค๋ฐ ๋ฉ์ธ์ง ์์ฑํ๊ธฐ : soo

์ฝ๊ธฐ ์ข์ ๋ฉ์ธ์ง, ํ๊ธ๋ก ์ฐ์ธ์, ๋ณธ๋ฌธ์ ์ ์ผ์ธ์

git commit : ์์ผ๋ก ๋ค์ด์์ ๋ณธ๋ฌธ์ ์ ์ผ์ธ์!

git commit์ ์ํ๋ฅผ ํ์ธํด์ผ ํฉ๋๋ค.

Ex)

```
์ ๋ชฉ

๋ณธ๋ฌธ
```

์ปค๋ฐ๊ณผ ์คํ์ด์ง ?

์ปค๋ฐ์ด๋? ์ค๋์ท, ๊ฒ์์ save point, ์ธ์ ๋ ์ง ๋๋์๊ฐ ์ ์์ต๋๋ค.

์ปค๋ฐ์ ๋ถ๋ชจ ์ปค๋ฐ์ ๊ฐ๋ฆฌํต๋๋ค

์ปค๋ฐ์ tree ๊ฐ์ฒด ์ ์ฒด์!

svn์ด diff๋ก ์๊ณ  ์์ต๋๋ค.

branching์ ์ปค๋ฐ์ ๊ฐ๋ฆฌํค๋ ํฌ์ธํฐ (= head๋ฅผ ๊ฐ๋ฆฌํค๋ ํฌ์ธํฐ)

head๋ current์๋๋ค.

๋ํ์น๋ ํค๋๊ฐ ๋ง๋ค์ด์ง๋ ๊ฒ์ ๋ฐฉ์งํด์ผ ํฉ๋๋ค.

commit์ ํน์  ์ปค๋ฐ์ ์ฐธ์กฐ์๋๋ค.

๋ธ๋์น๋ ์ปค๋ฐ์ ์ฐธ์กฐ์๋๋ค.

merge๋ history์ ๊ด๊ณ๊ฐ ์์ต๋๋ค.

merge๋ ๋ ๊ฐ์ ๋ถ๋ชจ๋ฅผ ํฉ์นฉ๋๋ค.

๋ฉํ ์ปค๋ฐ์ด๋ผ๊ณ  ๋ถ๋ฆ๋๋ค.

1. commit์ด ์ถ๊ฐ๋๊ณ 

2. commit log๊ฐ ๋๋ฌ์์ง๋๋ค.

rebase๋ ์ปค๋ฐ ํ์คํ ๋ฆฌ๋ฅผ ๊ณต์ ํฉ๋๋ค.

rebase๋ base๋ฅผ ๋ฐ๊ฟ๋๋ค.

๊ณตํต ์กฐ์์ธ ๋ถ๋ถ์ ๊ทธ๋๋ก ์ฎ๊น๋๋ค.

์ปค๋ฐ' ์ผ๋ก ๋ฐ๋๋๋ค. ๋ถ๋ชจ๊ฐ ๋ฌ๋ผ์ง๋๋ค.

์ปค๋ฐ์ ๋ถ๋ชจ ์ปค๋ฐ์ ์ ๋ณด๋ฅผ ๊ฐ์ง๊ณ  ์์ต๋๋ค.

commit์ immutableํฉ๋๋ค.

๋ก๊ทธ๊ฐ ๊น๋ํด์ง๋๋ค.

git reflog

git์ด ๋งํ๋ฉด ํ์คํ ๋ฆฌ๋ฅผ ๋ณด๋ฉด ๋ฉ๋๋ค.

git flow๋ ํ์ค์ด ์์ต๋๋ค. 

enDB

mongodb๋ง๊ณ  enDB, redis, splite3๋ฅผ ์ด์ฉํด์ ๋ง๋ญ๋๋ค.

์์ฃผ ๋ฐฐํฌํ๊ณ  ํ์ธํ์ธ์!

csr : 

ssr : ์์ฆ์

csr์์์ ssr๋ก ๋ง๋ญ๋๋ค.

express๋ ๋ฏธ๋ค์จ์ด๊ฐ ์ค์ํฉ๋๋ค.

ํ์ต ์ผ์ง ์ ์ด๋ณด๊ธฐ

position, display, flex

ํ๋ ์์ง๋์ด

TDD๋ ํ์คํธ ์ฝ๋ ์ง๊ณ  ํจ์ ์ง๊ณ  ๋ฆฌํฉํ ๋ง๊น์ง ํด์ผ ํ๋์ ์ฌ์ดํด์๋๋ค.

๊ธฐ์  ๋ถ์ฑ๋ฅผ ๋์น๊ฒ ํ์ง ๋ง์๋ค!

css ํ์คํธ? ์๋?

pr ์ ํ๋ ์ฌ๋์? 

๋ด๊ฐ ๊ณํํ ๊ฒ๊ณผ ๊ตฌํํ ๊ฒ์ ํ์ธํด๋ด์ผ ํฉ๋๋ค.

์์ธก์ ํ  ์ค ์์์ผ ํฉ๋๋ค.

์ค๋์ ๋ชฉํ๋ฅผ ๋ง๋ค๊ณ  ๋ฌ์ฑํ๋ ๊ฒ์ด ์ค์ํฉ๋๋ค.

์ง์์ ์ธ ํตํฉ์ ์ด๋ค์ผ ํฉ๋๋ค. ํฉ์ณค์ ๋ ๊นจ์ง๋์ง ํ์ธํด์ผ ํฉ๋๋ค.

๋ผ๋ ์ฝ๋๋ best practice๋ก ์ฐพ์๋ด์๋ค.

page ๋จ์๋ก ํด๋ ๋ฉ๋๋ค. ํ์ฌ๋ Component ๋ณ๋ก css, js๋ก ๋ด๋๋ค.

๋ฐ์ํ์ ๋์ค์ ํ๋๋ก ํฉ์๋ค.

flex๋ก ๋๋ถ๋ถ ๋ง๋ค ์ ์์ต๋๋ค.

์ฆ์ ์คํ ํจ์๋ก ์ง๊ธฐ๋ ํฉ๋๋ค.

์ด๋ฒคํธ ํธ๋ค๋ฌ๋ ๋ถ๋ฆฌํด์ ๋ง๋ค ์ ์๋๋ก ํฉ๋๋ค! ํจ์ ์ด๋ฆ์ผ๋ก ์ ์ ์๋๋ก ํฉ๋๋ค.

ํจ์์ ๋์์ ํํํ  ๋, ํ์ดํ ํจ์๋ฅผ ์ฌ์ฉํ๋ ๊ฒ์ด ์ข์ต๋๋ค. (๋๋ค ํ๊ธฐ๋ฒ์ ๋จ์ )

classlist๋ฅผ ์์ฃผ ์ฌ์ฉํ์ธ์!

js ์ฝ๋๋ก css style๋ฅผ ๋ฐ๊พธ๋๊ฑด ์ด๋ ค์ธ ์ ์์ต๋๋ค.

PR ๋ ๋ฆด ๋, ์ด๋ค ๋ด์ฉ์ ๊ฐ์ง๊ณ  ์๋์ง ํ์ธํ์ธ์!

ํ์ผ ํ๋๋ฅผ ๋ชจ๋๋ก ๋ณด๋๋ฐ, ๋์ฌ๋ ํ์ผ์ด๋ฆ์ ๋ง์ด ์ฌ์ฉ ์ํฉ๋๋ค.

์ฃผ์์ ๋ณต์กํ ๊ฒ๋ง

์ฃผ์์ ๋ธ๋ก ๋ฐ๊นฅ์ ๋ง๋ค์ด ์ฃผ๋ ๊ฒ์ด ์ค์ํฉ๋๋ค.

๋ฌด์์ ์ด๋ป๊ฒ ํ๋์ง ์๋ ค์ค ์ ์๋๋ก ํฉ๋๋ค.

$๋ ํ์ธํ  ์ ์๋๋ก ํฉ์๋ค!

alert๋ ์ง์ง ์ฌ์ฉํ์ง ์์ต๋๋ค.

for๋ฌธ์ ์ง์ธ ์ ์๋๋ก ํฉ์๋ค!

class = ~~~ ํ๋ ๊ฒ๋ณด๋ค classList์ addํ๋ ๋ฐฉ์์ด ์ข์ต๋๋ค. class๊ฐ ์ฌ๋ฌ ๊ฐ์ผ ์๋ ์์ต๋๋ค.

querySelector์ผ๋ก ์ฌ์ฉํ๋ ๊ฒ์ ์ง์  ๋ณ์๋ฅผ ๋ง๋ค ์ ์๋๋ก ํฉ์๋ค!

template literal๋ฅผ ์ด์ฉํ  ์ ์์ต๋๋ค!

DOM์ ๋ ๋๋งํ๋ ๋ฐฉ์์ผ๋ก ๋ง๋ญ๋๋ค!

### ๐ Remark

์ฐธ๊ณ  ์ฌ์ดํธ : https://www.hongkiat.com/blog/built-with-css/

demo url ๋ฃ์ด๋๊ธฐ!

ํ๊ณ ํ  ๋, ์ผ์ฃผ์ผ ๋์ ์ด๋ป๊ฒ ํ  ์ง ํผ๋๋ฐฑ์ ์ด๋ป๊ฒ ์ฃผ๊ณ  ๋ฐ์์ง ํ์ธํ๊ธฐ
