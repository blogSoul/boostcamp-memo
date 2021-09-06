## 📕 Day 0 - BoostCamp

### 📘 git

* 명령어

git hash-object : 명령은 주어지는 데이터를 저장하고 이 데이터에 접근하기 위한 key를 반환한다.

git-cat-file : 리포지토리 개체에 대한 콘텐츠 또는 유형 및 크기 정보 제공, If -t is specified, one of the <type>.

git log --all --decorate --online --graph : log 예쁘게 보기

### 📘 staging area, working directory, HEAD

.git 자체가 로컬 저장소입니다.

stage는 .git 안에 있습니다.

git hash-object ce013

git cat-file -t HEAD : commit

git cat-file -t ce013 : blob

git cat-file ce013 : hello

commit은 tree object를 만듭니다.

tree에는 blob이 붙어있습니다.

staging area == working directory == HEAD

HEAD는 HEAD 파일이 들어 있습니다. 안에 참조하는 곳이 작성되어 있습니다. 있습니다.

staging area == working directory != HEAD 이면 modify

* bat

Ex) bat hello.txt

bat은 단조로운 command line을 화려화게 사용할 수 있어 소스 코드의 가독성을 높이고, 보다 편리하게 git commit을 만들 수 있다.

* 이전 reset, switch

reset하면 stage, working, HEAD 전부 바뀝니다.

`detached head` 조심하기!

Detached HEAD : HEAD가 브랜치를 통해 간접적으로 commit을 가리키지 않고, 직접 커밋을 가리키는 것

HEAD는 일반적으로 이름이 붙여진 branch를 참조합니다. Ex) master

### 🎞 Remark
