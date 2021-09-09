## 📕 Day 0 - BoostCamp

### 📘 이점

> 참고 사이트 : https://ui.toast.com/weekly-pick/ko_20180402
> 참고 사이트 : https://www.sitepoint.com/understanding-es6-modules/

1. Code can be split into smaller files of self-contained functionality.
2. The same modules can be shared across any number of applications.
3. Ideally, modules need never be examined by another developer, because they’ve has been proven to work. 
4. Code referencing a module understands it’s a dependency. If the module file is changed or moved, the problem is immediately obvious. 
5. Module code (usually) helps eradicate naming conflicts. Function x() in module1 cannot clash with function x() in module2. Options such as namespacing are employed so calls become module1.x() and module2.x().

### 📘 CommonJS(CJS)와 ESM(EcmaScript modules)

이처럼 모듈은 유용하므로 그동안 자바스크립트에 모듈의 기능을 도입하려는 노력이 여러 번 있었다.

현재 활발하게 사용되는 모듈 시스템은 두 가지가 있다.

CommonJS(CJS)는 Node.js가 오래전부터 사용해오던 것이다.

ESM(EcmaScript modules)은 자바스크립트 명세에 추가된 최신의 모듈 시스템이다.

브라우저는 이미 ES 모듈을 지원하며 Node.js는 ES 모듈 지원을 추가 중이다.

Module로 설정하면 entry point를 찾아서 따라 들어가면 됩니다.

### 📘 ES 모듈의 세 가지 단계

1. 구성 - 모든 파일을 찾아 다운로드하고 모듈 레코드로 구문분석한다.
2. 인스턴스 화 - export 된 값을 모두 배치하기 위해 메모리에 있는 공간들을 찾는다(아직 실제 값은 채우지 않음). 그다음 export와 import들이 이런 메모리 공간들을 가리키도록 한다. 이를 연결(linking) 이라고 한다. 
3. 평가 - 코드를 실행하여 상자의 값을 변수의 실제 값으로 채운다.

### 📘 ES 모듈의 구성 단계에서의 세 가지 단계

1. 모듈이 들어있는 파일을 어디서 다운로드 할 것인지 확인한다.(module resolution이라고도 함).

2. 파일을 가져온다(URL을 통해 다운로드 하거나 파일 시스템에서 불러옴).

3. 파일을 모듈 레코드로 구문분석한다.

### 🎞 Remark

https://ui.toast.com/weekly-pick/ko_20180402
