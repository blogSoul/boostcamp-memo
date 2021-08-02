## 📕 Day  - BoostCamp

### 📘 git에 관하여

![20210729_231057](https://user-images.githubusercontent.com/42922298/127511341-97d6e819-481e-4801-a8c6-e13cdfd4b1ae.png)

git이란 로컬(local) 버전 관리 시스템 (Version Control System)입니다.

* 그럼 github은 무엇일까?

github은 로컬(local)이 아니라 클라우드에서 관리되는 버전 관리 시스템입니다.

사진 참조 : https://www.edureka.co/blog/git-vs-github/

### 📘 git 명령어에 관하여

![20210729_231150](https://user-images.githubusercontent.com/42922298/127511328-b33180f2-8473-45bf-94a9-bfd953c38572.png)

![20210729_231801](https://user-images.githubusercontent.com/42922298/127511338-3a5a58c2-3718-4815-b36c-bd0c25d064e8.png)

위 표를 보면 명령어를 보기 전 파일 상태를 알아야 좀더 편하게 알 수 있습니다.

* git에서 파일 상태

Untracked : 작업 폴더에서 Stage에 올리지 않은 상태

Staged	수정한 파일을 Stage에 올려 Commit할 스냅샷을 만든 상태

Committed	Stage의 파일을 git 저장소에 commit한 상태

* git 명령어

$ git init [project_name] : 생성하기, 새로운 로컬 저장소를 생성하기

$ git clone [url] : 저장소 가져오기

$ git status : 살펴보기, 작업 디렉토리에 변경된 파일 보기

$ git diff : 변경된 staged 파일 보기

$ git log : 변경 이력 보기

$ git branch : 브랜치 작업하기, 로컬 브랜치 보기 

$ git branch -av : 로컬과 원격 브랜치 보기

$ git checkout <branch> : 브랜치 변경하기

$ git branch <new-branch> : 브랜치 생성하기

$ git branch -d <branch> : 브랜치 삭제하기

$ git checkout --track <remote/branch> : 원격 브랜치를 추적하는 새로운 브랜치 만들기

$ git branch -u <remote/branch> : 원격 브랜치 추적하기

$ git tag <tag-name> : 현재 커밋에 태그 달기

$ git add [file] : 변경하기, 파일의 변경 사항을 다음 커밋에 반영하기

$ git add . : 모든 변경 사항을 다음 커밋에 반영하기

$ git commit -m "commit message" : 메시지와 함께 커밋하기 

$ git commit -a : 모든 변경 사항을 반영하면서 커밋하기

$ git commit --amend : 마지막 커밋 수정하기(published commit에는 하지 말 것!)

$ git reset --hard HEAD : 취소하기, 작업 디렉토리에 모든 변경 버리기

$ git revert <commit> : 커밋 되돌아가기

$ git fetch <remote> : 동기화하기, 원격 저장소의 변경사항 가져오기

$ git pull <remote> <branch> : 원격 저장소의 변경사항을 가져오고 머지하기

$ git pull --rebase : 원격 저장소의 변경사항을 가져오고 리베이스하기

$ git push : 원격 저장소에 변경사항 발행하기

$ git push --tags : 원격 저장소에 태그 발행하기

$ git merge <branch> : 병합하기와 리베이스하기, 병합하기

$ git rebase <branch> : 리베이스하기

$ git stash : 변경사항 저장하고 복원하기, 임시로 변경사항 저장하기

$ git stash pop : 임시 변경사항 복원하기

$ git stash list : 임시 변경사항 보기

참고 사이트 : https://git-scm.com/book/ko/v2

### 📘 실제 git 명령어와 구현한 명령 동작 공통점과 차이점

제가 구현한 프로젝트는 폴더를 기준으로 git 기능 구현이 이루어졌습니다.

하지만 실제 프로젝트에선 .git 폴더에서 모든 git 설정 및 log가 전부 저장되는 구조를 가지고 있습니다.

따라서 프로젝트 구조가 다르기 때문에 실제 프로젝트에선 파일 로그를 저장하고, 제가 구현한 프로젝트는 폴더 자체를 저장합니다.

### 📘 객체를 복사할 때, 얕은 복사와 깊은 복사 차이점

javascript에선 원시값 Number, String, Boolean, Null, Undefined과 참조값 Object, Symbol이 서로 다릅니다.

원시값은 값을 복사 할 때 복사된 값을 다른 메모리에 할당하고 참조값은 변수가 객체의 주소를 가리키는 값을 복사합니다. 

* 원시값

```javascript
const a = 1;
let b = a;

b = 2

console.log(a); //1
console.log(b); //2
```

* 참조값

```javascript
const a = {number: 1};
let b = a;

b.number = 2

console.log(a); // {number: 2}
console.log(b); // {number: 2}
```

> 앝은 복사

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

> 깊은 복사 (lodash)

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

`slice`도 가장 앝은 층만 복사되는 Shallow Copy가 이루어집니다.

### 🎞 Remark

class 구조를 파악하기 쉽다.

커밋 구조가 트리로 만들어져 있습니다.

오브젝트 파일

Blob 파일 : 파일들의 내용 SHA1 해싱 기법 적용

Tree파일 : 파일 마다 Blob파일의 주소가 기록됩니다.

.gitignore 기능을 추가해보는 것도 나쁘지 않을 것입니다.


```javascript
if (command === "add")
    curRepo
      ? curRepo.getFile(name)
        ? curRepo.moveStage(name)
        : console.log("해당 파일이 Working Directory에 없습니다.")
      : console.log("저장소를 선택해주세요.");
```

새로운 Map() 에 기존의 Map()을 넣어주면 깊은 복사가 이루어집니다.

ramda 라이브러리를 사용해서 깊은 복사가 가능합니다.
