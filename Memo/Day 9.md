## ๐ Day  - BoostCamp

### ๐ git์ ๊ดํ์ฌ

![20210729_231057](https://user-images.githubusercontent.com/42922298/127511341-97d6e819-481e-4801-a8c6-e13cdfd4b1ae.png)

git์ด๋ ๋ก์ปฌ(local) ๋ฒ์  ๊ด๋ฆฌ ์์คํ (Version Control System)์๋๋ค.

* ๊ทธ๋ผ github์ ๋ฌด์์ผ๊น?

github์ ๋ก์ปฌ(local)์ด ์๋๋ผ ํด๋ผ์ฐ๋์์ ๊ด๋ฆฌ๋๋ ๋ฒ์  ๊ด๋ฆฌ ์์คํ์๋๋ค.

์ฌ์ง ์ฐธ์กฐ : https://www.edureka.co/blog/git-vs-github/

### ๐ git ๋ช๋ น์ด์ ๊ดํ์ฌ

![20210729_231150](https://user-images.githubusercontent.com/42922298/127511328-b33180f2-8473-45bf-94a9-bfd953c38572.png)

![20210729_231801](https://user-images.githubusercontent.com/42922298/127511338-3a5a58c2-3718-4815-b36c-bd0c25d064e8.png)

์ ํ๋ฅผ ๋ณด๋ฉด ๋ช๋ น์ด๋ฅผ ๋ณด๊ธฐ ์  ํ์ผ ์ํ๋ฅผ ์์์ผ ์ข๋ ํธํ๊ฒ ์ ์ ์์ต๋๋ค.

* git์์ ํ์ผ ์ํ

Untracked : ์์ ํด๋์์ Stage์ ์ฌ๋ฆฌ์ง ์์ ์ํ

Staged	์์ ํ ํ์ผ์ Stage์ ์ฌ๋ ค Commitํ  ์ค๋์ท์ ๋ง๋  ์ํ

Committed	Stage์ ํ์ผ์ git ์ ์ฅ์์ commitํ ์ํ

* git ๋ช๋ น์ด

$ git init [project_name] : ์์ฑํ๊ธฐ, ์๋ก์ด ๋ก์ปฌ ์ ์ฅ์๋ฅผ ์์ฑํ๊ธฐ

$ git clone [url] : ์ ์ฅ์ ๊ฐ์ ธ์ค๊ธฐ

$ git status : ์ดํด๋ณด๊ธฐ, ์์ ๋๋ ํ ๋ฆฌ์ ๋ณ๊ฒฝ๋ ํ์ผ ๋ณด๊ธฐ

$ git diff : ๋ณ๊ฒฝ๋ staged ํ์ผ ๋ณด๊ธฐ

$ git log : ๋ณ๊ฒฝ ์ด๋ ฅ ๋ณด๊ธฐ

$ git branch : ๋ธ๋์น ์์ํ๊ธฐ, ๋ก์ปฌ ๋ธ๋์น ๋ณด๊ธฐ 

$ git branch -av : ๋ก์ปฌ๊ณผ ์๊ฒฉ ๋ธ๋์น ๋ณด๊ธฐ

$ git checkout <branch> : ๋ธ๋์น ๋ณ๊ฒฝํ๊ธฐ

$ git branch <new-branch> : ๋ธ๋์น ์์ฑํ๊ธฐ

$ git branch -d <branch> : ๋ธ๋์น ์ญ์ ํ๊ธฐ

$ git checkout --track <remote/branch> : ์๊ฒฉ ๋ธ๋์น๋ฅผ ์ถ์ ํ๋ ์๋ก์ด ๋ธ๋์น ๋ง๋ค๊ธฐ

$ git branch -u <remote/branch> : ์๊ฒฉ ๋ธ๋์น ์ถ์ ํ๊ธฐ

$ git tag <tag-name> : ํ์ฌ ์ปค๋ฐ์ ํ๊ทธ ๋ฌ๊ธฐ

$ git add [file] : ๋ณ๊ฒฝํ๊ธฐ, ํ์ผ์ ๋ณ๊ฒฝ ์ฌํญ์ ๋ค์ ์ปค๋ฐ์ ๋ฐ์ํ๊ธฐ

$ git add . : ๋ชจ๋  ๋ณ๊ฒฝ ์ฌํญ์ ๋ค์ ์ปค๋ฐ์ ๋ฐ์ํ๊ธฐ

$ git commit -m "commit message" : ๋ฉ์์ง์ ํจ๊ป ์ปค๋ฐํ๊ธฐ 

$ git commit -a : ๋ชจ๋  ๋ณ๊ฒฝ ์ฌํญ์ ๋ฐ์ํ๋ฉด์ ์ปค๋ฐํ๊ธฐ

$ git commit --amend : ๋ง์ง๋ง ์ปค๋ฐ ์์ ํ๊ธฐ(published commit์๋ ํ์ง ๋ง ๊ฒ!)

$ git reset --hard HEAD : ์ทจ์ํ๊ธฐ, ์์ ๋๋ ํ ๋ฆฌ์ ๋ชจ๋  ๋ณ๊ฒฝ ๋ฒ๋ฆฌ๊ธฐ

$ git revert <commit> : ์ปค๋ฐ ๋๋์๊ฐ๊ธฐ

$ git fetch <remote> : ๋๊ธฐํํ๊ธฐ, ์๊ฒฉ ์ ์ฅ์์ ๋ณ๊ฒฝ์ฌํญ ๊ฐ์ ธ์ค๊ธฐ

$ git pull <remote> <branch> : ์๊ฒฉ ์ ์ฅ์์ ๋ณ๊ฒฝ์ฌํญ์ ๊ฐ์ ธ์ค๊ณ  ๋จธ์งํ๊ธฐ

$ git pull --rebase : ์๊ฒฉ ์ ์ฅ์์ ๋ณ๊ฒฝ์ฌํญ์ ๊ฐ์ ธ์ค๊ณ  ๋ฆฌ๋ฒ ์ด์คํ๊ธฐ

$ git push : ์๊ฒฉ ์ ์ฅ์์ ๋ณ๊ฒฝ์ฌํญ ๋ฐํํ๊ธฐ

$ git push --tags : ์๊ฒฉ ์ ์ฅ์์ ํ๊ทธ ๋ฐํํ๊ธฐ

$ git merge <branch> : ๋ณํฉํ๊ธฐ์ ๋ฆฌ๋ฒ ์ด์คํ๊ธฐ, ๋ณํฉํ๊ธฐ

$ git rebase <branch> : ๋ฆฌ๋ฒ ์ด์คํ๊ธฐ

$ git stash : ๋ณ๊ฒฝ์ฌํญ ์ ์ฅํ๊ณ  ๋ณต์ํ๊ธฐ, ์์๋ก ๋ณ๊ฒฝ์ฌํญ ์ ์ฅํ๊ธฐ

$ git stash pop : ์์ ๋ณ๊ฒฝ์ฌํญ ๋ณต์ํ๊ธฐ

$ git stash list : ์์ ๋ณ๊ฒฝ์ฌํญ ๋ณด๊ธฐ

์ฐธ๊ณ  ์ฌ์ดํธ : https://git-scm.com/book/ko/v2

### ๐ ์ค์  git ๋ช๋ น์ด์ ๊ตฌํํ ๋ช๋ น ๋์ ๊ณตํต์ ๊ณผ ์ฐจ์ด์ 

์ ๊ฐ ๊ตฌํํ ํ๋ก์ ํธ๋ ํด๋๋ฅผ ๊ธฐ์ค์ผ๋ก git ๊ธฐ๋ฅ ๊ตฌํ์ด ์ด๋ฃจ์ด์ก์ต๋๋ค.

ํ์ง๋ง ์ค์  ํ๋ก์ ํธ์์  .git ํด๋์์ ๋ชจ๋  git ์ค์  ๋ฐ log๊ฐ ์ ๋ถ ์ ์ฅ๋๋ ๊ตฌ์กฐ๋ฅผ ๊ฐ์ง๊ณ  ์์ต๋๋ค.

๋ฐ๋ผ์ ํ๋ก์ ํธ ๊ตฌ์กฐ๊ฐ ๋ค๋ฅด๊ธฐ ๋๋ฌธ์ ์ค์  ํ๋ก์ ํธ์์  ํ์ผ ๋ก๊ทธ๋ฅผ ์ ์ฅํ๊ณ , ์ ๊ฐ ๊ตฌํํ ํ๋ก์ ํธ๋ ํด๋ ์์ฒด๋ฅผ ์ ์ฅํฉ๋๋ค.

### ๐ ๊ฐ์ฒด๋ฅผ ๋ณต์ฌํ  ๋, ์์ ๋ณต์ฌ์ ๊น์ ๋ณต์ฌ ์ฐจ์ด์ 

javascript์์  ์์๊ฐ Number, String, Boolean, Null, Undefined๊ณผ ์ฐธ์กฐ๊ฐ Object, Symbol์ด ์๋ก ๋ค๋ฆ๋๋ค.

์์๊ฐ์ ๊ฐ์ ๋ณต์ฌ ํ  ๋ ๋ณต์ฌ๋ ๊ฐ์ ๋ค๋ฅธ ๋ฉ๋ชจ๋ฆฌ์ ํ ๋นํ๊ณ  ์ฐธ์กฐ๊ฐ์ ๋ณ์๊ฐ ๊ฐ์ฒด์ ์ฃผ์๋ฅผ ๊ฐ๋ฆฌํค๋ ๊ฐ์ ๋ณต์ฌํฉ๋๋ค. 

* ์์๊ฐ

```javascript
const a = 1;
let b = a;

b = 2

console.log(a); //1
console.log(b); //2
```

* ์ฐธ์กฐ๊ฐ

```javascript
const a = {number: 1};
let b = a;

b.number = 2

console.log(a); // {number: 2}
console.log(b); // {number: 2}
```

> ์์ ๋ณต์ฌ

```javascript
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

const copiedObj = {...obj}

copiedObj.b.c = 3

obj === copiedObj // false
obj.b.c === copiedObj.b.c // true
```

> ๊น์ ๋ณต์ฌ (lodash)

```javascript
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

const copiedObj = _.cloneDeep(obj);

copiedObj.b.c = 3

obj.b.c === copiedObj.b.c //false
```

`slice`๋ ๊ฐ์ฅ ์์ ์ธต๋ง ๋ณต์ฌ๋๋ Shallow Copy๊ฐ ์ด๋ฃจ์ด์ง๋๋ค.

### ๐ Remark

class ๊ตฌ์กฐ๋ฅผ ํ์ํ๊ธฐ ์ฝ๋ค.

์ปค๋ฐ ๊ตฌ์กฐ๊ฐ ํธ๋ฆฌ๋ก ๋ง๋ค์ด์ ธ ์์ต๋๋ค.

์ค๋ธ์ ํธ ํ์ผ

Blob ํ์ผ : ํ์ผ๋ค์ ๋ด์ฉ SHA1 ํด์ฑ ๊ธฐ๋ฒ ์ ์ฉ

Treeํ์ผ : ํ์ผ ๋ง๋ค Blobํ์ผ์ ์ฃผ์๊ฐ ๊ธฐ๋ก๋ฉ๋๋ค.

.gitignore ๊ธฐ๋ฅ์ ์ถ๊ฐํด๋ณด๋ ๊ฒ๋ ๋์์ง ์์ ๊ฒ์๋๋ค.


```javascript
if (command === "add")
    curRepo
      ? curRepo.getFile(name)
        ? curRepo.moveStage(name)
        : console.log("ํด๋น ํ์ผ์ด Working Directory์ ์์ต๋๋ค.")
      : console.log("์ ์ฅ์๋ฅผ ์ ํํด์ฃผ์ธ์.");
```

์๋ก์ด Map() ์ ๊ธฐ์กด์ Map()์ ๋ฃ์ด์ฃผ๋ฉด ๊น์ ๋ณต์ฌ๊ฐ ์ด๋ฃจ์ด์ง๋๋ค.

ramda ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ฌ์ฉํด์ ๊น์ ๋ณต์ฌ๊ฐ ๊ฐ๋ฅํฉ๋๋ค.
