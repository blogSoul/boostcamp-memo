## 📕 Day 6 - BoostCamp 

### 📘 tokenizer, lexer, parser 에 관하여

![20210726_231148](https://user-images.githubusercontent.com/42922298/127003234-b0b9f427-75fd-4af9-b22d-e8aa0e5d4481.png)

위 사진은 parser의 구조를 보여줍니다.

Parser는 Lexical analyze 되어 토큰화된 데이터를 가지고 그것을 구조적으로 나타낼 수 있게 해줍니다.

우선 html 파일을 하나의 String 변수로 변환해줍니다.

1. tokenizer : 변환 받은 String 변수를 `<>`로 나누어줍니다.

토큰은 `identifier` 로 태그 이름과 속성을 대입해줍니다.

`literal`는 해당 text로 받을 수 있게 해줍니다.

`comment`는 해당 코드가 어떤 특징을 가지고 있는지 알려줍니다.

더 많이 나눌 수 있지만 예제를 중점으로 다룰 것이기 때문에 3가지로 분류합니다.

2. lexer : token으로 나눈 배열을 속성에 맞게 변환해줍니다.

아래와 같은 형태로 만들어줍니다.

```javascript
[
    { type: 'comment', element: '!DOCTYPE html' },
    { type: 'identifier', element: 'HTML', attributes: [Array] },
    { type: 'identifier', element: 'BODY' },
    { type: 'identifier', element: 'P' },
    { type: 'literal', element: 'BOOST' }
}
```

3. parser : lexer로 변환된 데이터를 해당 html 구조에 맞게 변환해줍니다.

해당 트리로 만들려면 bfs, bfs 등을 이용해서 연관관계를 나타내주어야 합니다.

### 📘 웹 브라우저 DOM 파서에 관하여

![20210726_233013](https://user-images.githubusercontent.com/42922298/127006273-de612d48-26f8-4f94-bee3-7b96b774445a.png)

브라우저란? 사용자의 요청으로 보고 싶은 페이지를 서버에 요청하고 서버로부터 받은 응답(html, css, javascript, img 등) 을 브라우저에 표시하는 기능을 하는 프로그램입니다.

렌더링 엔진이란? 요청 받은 내용을 브라우저 화면에 표시하는 일을 합니다.

Ex) 크롬, 사파리에서 사용하는 Webkit

javascript는 자바스크립트 엔진에서 처리하고 html, css는 렌더링 엔진에서 처리합니다.

![20210726_234813](https://user-images.githubusercontent.com/42922298/127009326-0fa07a25-be10-4cbc-9742-eac759675279.png)

html, css 파일은 렌더링 엔진의 html 파서와 css 파서에 의해 parsing되어 DOM, CSSOM 트리로 변환하고 렌더 트리로 결합됩니다.

결합된 렌더 트리를 기반으로 렌더 트리 배치(layout), 렌더 트리 그리기(paint)를 거쳐 브라우저는 웹페이지를 표시합니다.

DOM (Document Object Model) 이란?HTML tag를 javasscript에서 이용할 수 있는 객체로 만드는 HTML 문서의 객체 기반 표현 방식입니다.

html parser는 script tag를 만나면 자바스크립트 코드를 실행하기 위해 DOM 생성 프로세스를 중지하고 자바스크립트 엔진으로 제어 권한을 넘깁니다.

다음 단계로 자바스크립트 엔진은 script 태그 내의 javascript code 혹은 script의 src attribute에 정의된 js 파일을 load하고 parse/기계어로 컴파일하여 실행합니다.

> body 요소의 가장 아래에 script 태그를 위치해야 에러를 덜 발생하는 방법입니다.

### 📘 well-formed XML 형식 검증에 관하여

well-formed XML 문서 : XML 문서로서 가져야 하는 최소한의 필수 요건을 충족한 XML 문서

* 필수 조건 :

1. 루트(root) 요소를 하나만 가져야 합니다.

2. 모든 XML 요소는 종료 태그를 가져야 합니다.

3. 시작 태그와 종료 태그에 사용된 태그 이름이 대소문자까지 완벽하게 일치해야 합니다.

4. 모든 XML 요소의 여닫는 순서가 반드시 정확하게 지켜져야 합니다.

5. 모든 속성의 속성값이 따옴표로 둘러싸여 있어야 합니다.

valid XML 문서 : well-formed XML 문서 + DTD(document type definition) or XSD(XML Schema Definition)

DTD(document type definition) : 일반적인 문서 타입 정의(document type definition)

규칙을 안 지키면 컴파일 오류가 생깁니다.

### 📘 XPath에 관하여

XPath(=XML Path Language)는 W3C의 표준으로 확장 생성 언어 문서의 구조를 통해 경로 위에 지정한 구문을 사용하여 항목을 배치하고 처리하는 방법을 기술하는 언어입니다.

참고 페이지 : https://loco-motive.tistory.com/26

XPath에서 요소 이름을 명시하지 않으면 아무 undefined를 반환합니다. 

### 🎞 Remark
