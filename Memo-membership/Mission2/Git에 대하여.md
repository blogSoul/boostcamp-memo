## ๐ Day 0 - BoostCamp

### ๐ git

* ๋ช๋ น์ด

git hash-object : ๋ช๋ น์ ์ฃผ์ด์ง๋ ๋ฐ์ดํฐ๋ฅผ ์ ์ฅํ๊ณ  ์ด ๋ฐ์ดํฐ์ ์ ๊ทผํ๊ธฐ ์ํ key๋ฅผ ๋ฐํํ๋ค.

git-cat-file : ๋ฆฌํฌ์งํ ๋ฆฌ ๊ฐ์ฒด์ ๋ํ ์ฝํ์ธ  ๋๋ ์ ํ ๋ฐ ํฌ๊ธฐ ์ ๋ณด ์ ๊ณต, If -t is specified, one of the <type>.

git log --all --decorate --online --graph : log ์์๊ฒ ๋ณด๊ธฐ

### ๐ staging area, working directory, HEAD

.git ์์ฒด๊ฐ ๋ก์ปฌ ์ ์ฅ์์๋๋ค.

stage๋ .git ์์ ์์ต๋๋ค.

git hash-object ce013

git cat-file -t HEAD : commit

git cat-file -t ce013 : blob

git cat-file ce013 : hello

commit์ tree object๋ฅผ ๋ง๋ญ๋๋ค.

tree์๋ blob์ด ๋ถ์ด์์ต๋๋ค.

staging area == working directory == HEAD

HEAD๋ HEAD ํ์ผ์ด ๋ค์ด ์์ต๋๋ค. ์์ ์ฐธ์กฐํ๋ ๊ณณ์ด ์์ฑ๋์ด ์์ต๋๋ค. ์์ต๋๋ค.

staging area == working directory != HEAD ์ด๋ฉด modify

* bat

Ex) bat hello.txt

bat์ ๋จ์กฐ๋ก์ด command line์ ํ๋ คํ๊ฒ ์ฌ์ฉํ  ์ ์์ด ์์ค ์ฝ๋์ ๊ฐ๋์ฑ์ ๋์ด๊ณ , ๋ณด๋ค ํธ๋ฆฌํ๊ฒ git commit์ ๋ง๋ค ์ ์๋ค.

* ์ด์  reset, switch

resetํ๋ฉด stage, working, HEAD ์ ๋ถ ๋ฐ๋๋๋ค.

`detached head` ์กฐ์ฌํ๊ธฐ!

Detached HEAD : HEAD๊ฐ ๋ธ๋์น๋ฅผ ํตํด ๊ฐ์ ์ ์ผ๋ก commit์ ๊ฐ๋ฆฌํค์ง ์๊ณ , ์ง์  ์ปค๋ฐ์ ๊ฐ๋ฆฌํค๋ ๊ฒ

HEAD๋ ์ผ๋ฐ์ ์ผ๋ก ์ด๋ฆ์ด ๋ถ์ฌ์ง branch๋ฅผ ์ฐธ์กฐํฉ๋๋ค. Ex) master

### ๐ git rebase

> ์ฐธ๊ณ  ์ฌ์ดํธ : https://git-scm.com/book/ko/v2/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-Rebase-%ED%95%98%EA%B8%B0

### ๐ git merge

> ์ฐธ๊ณ  ์ฌ์ดํธ : https://ssungkang.tistory.com/entry/07git-merge-%EA%B7%B8-%EC%A2%85%EB%A5%98%EC%99%80-%EC%B6%A9%EB%8F%8C-%ED%95%B4%EA%B2%B0

### ๐ Remark
