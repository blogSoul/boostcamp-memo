## 📕 Day 1 - BoostCamp

NodeJS는 javascript를 브라우저 밖에서 사용할 수 있도록 만든 언어입니다.

소소한 팁이지만, LTS버전을 사용할 수 있도록합니다. Ex) 14.17 LTS

command 창에서도 NodeJS를 사용할 수 있습니다.

### cmd에 관해

cd : 디렉토리 변경

cp : 파일 복사 

mv : 파일 이름(rename) / 위치(move) 변경

mkdir : 디렉토리 생성

rm : 파일 삭제

### git에 관하여

git는 free and open source distributed version control system입니다.

github은 오픈소스 저장소입니다.

add : 파일 추가

commit : 커밋 내용 작성

branch : 현재 repository에 있는 branch 확인 밋 추가, 삭제

checkout : Switch branches or restore working tree files, 점차 사라지고 있는 명령어...

switch : Switch branches

restore : restore working tree files

merge : 두 개의 branch를 하나로 합칩니다. default로는 현재 위치한 branch로 merge됩니다.

Pull-request : 현업에서 가장 많이 사용하는 방식으로 기존 코드를 건드리지 않고 개발할 수 있는 방법입니다.

> Pull-request 순서

1. Fork
   
2. clone, remote 설정
   
3. branch 생성

`git clone [repository 주소] -b [branch-name] --single-branch` : 해당 repository에 지정한 branch 이름 한 개만 생성해 clone을 할 수 있습니다.

4. 수정 작업 후 add, commit, push

5. Pull Request 생성

6. 코드리뷰, Merge Pull-request

7. Merge 이후 branch 삭제 및 동기화

### javascript summary

```javascript
function check(a){
    return a.filter((item, index) => a.indexOf(item) === index);
}
```

filter 함수를 보면 첫 index는 해당 원소의 value, 두 번째 index는 해당 원소의 index를 제공합니다.

### 🎞 Remark

Gist Link : [Go to Link](https://gist.github.com/blogSoul/b543f1080bab3d95ef0c9aeaca58ed65)
