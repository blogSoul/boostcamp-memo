## 📕 Day 1 - BoostCamp

NodeJS는 javascript를 브라우저 밖에서 사용할 수 있도록 만든 언어입니다.

소소한 팁이지만, LTS버전을 사용할 수 있도록합니다. Ex) 14.17 LTS

command 창에서도 NodeJS를 사용할 수 있습니다.

### 📘 cmd에 관해

cd : 디렉토리 변경

cp : 파일 복사 

mv : 파일 이름(rename) / 위치(move) 변경

mkdir : 디렉토리 생성

rm : 파일 삭제

### 📘 git에 관하여

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

### 📘 javascript summary

```javascript
function check(a){
    return a.filter((item, index) => a.indexOf(item) === index);
}
```

filter 함수를 보면 첫 index는 해당 원소의 value, 두 번째 index는 해당 원소의 index를 제공합니다.

map 함수는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열로 반환하는 함수입니다.

map 함수는 변수 뿐만 아니라 함수도 가능합니다.

Spread Operator : 연산자의 대상 배열 또는 iterable한 객체를 개별 요소로 분리시킵니다.

Rest Parameter : Spread Operator를 사용하여 함수의 파라미터를 작성한 형태를 의미합니다. 

```javascript
var check = function () {
  console.log(arguments);
};
check(2, 3);
```

위 코드와 같이 arguments로 인자값을 확인할 수 있지만, arguments는 유사 배열 객체입니다.

하지만 rest parameter는 배열이므로 Array Object method를 사용할 수 있습니다.

bind() : 메소드가 호출되면 새로운 함수를 생성합니다. 

받게 되는 첫 인자의 value로는 this 키워드를 설정하고 이어지는 인자들은 바인드된 함수의 인수에 제공됩니다.   

bind()를 사용하는 이유는 window 객체를 사용하고 싶지 않기 떄문입니다.

대신 call, apply처럼 함수를 실행시키지 않습니다. 

call과 apply의 유일한 차이점은, 첫 번째 인자(this를 대체할 값)를 제외하고, 실제 function에 필요한 parameter를 입력하는 방식이다. 

call과는 다르게 apply함수는 두 번째 인자부터 모두 배열에 넣어야 한다.

let, const의 차이점은 immutable 여부이다.

let 은 변수에 재할당이 가능하다.

const는 변수 재선언, 변수 재할당 모두 불가능하다.

### 🎞 Remark

당신은 이미 휼륭한 개발자입니다!🙌
