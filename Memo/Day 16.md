## 📕 Day 16 - BoostCamp

### 📘 response에 관하여

response method는 아래와 같이 구성되어져 있습니다.

```javascript
"_readableState"
"_events"
"_eventsCount"
"_maxListeners"
"socket"
"httpVersionMajor"
"httpVersionMinor"
"httpVersion"
"complete"
"headers"
"rawHeaders"
"trailers"
"rawTrailers"
"aborted"
"upgrade"
"url"
"method"
"statusCode"
"statusMessage"
"client"
"_consuming"
"_dumped"
"req"
"setTimeout"
"_read"
"destroy"
"_addHeaderLines"
"_addHeaderLine"
"_dump"
"_undestroy"
"_destroy"
"push"
"unshift"
"isPaused"
"setEncoding"
"read"
"pipe"
"unpipe"
"on"
"addListener"
"removeListener"
"off"
"removeAllListeners"
"resume"
"pause"
"wrap"
"setMaxListeners"
"getMaxListeners"
"emit"
"prependListener"
"once"
"prependOnceListener"
"listeners"
"rawListeners"
"listenerCount"
"eventNames"
```

### 📘 웹 브라우저에 관하여

![20210726_233013](https://user-images.githubusercontent.com/42922298/127006273-de612d48-26f8-4f94-bee3-7b96b774445a.png)

브라우저란? 사용자의 요청으로 보고 싶은 페이지를 서버에 요청하고 서버로부터 받은 응답(html, css, javascript, img 등) 을 브라우저에 표시하는 기능을 하는 프로그램입니다.

렌더링 엔진이란? 요청 받은 내용을 브라우저 화면에 표시하는 일을 합니다.

Ex) 크롬, 사파리에서 사용하는 Webkit

javascript는 자바스크립트 엔진에서 처리하고 html, css는 렌더링 엔진에서 처리합니다.

![20210726_234813](https://user-images.githubusercontent.com/42922298/127009326-0fa07a25-be10-4cbc-9742-eac759675279.png)

html, css 파일은 렌더링 엔진의 html 파서와 css 파서에 의해 parsing되어 DOM, CSSOM 트리로 변환하고 렌더 트리로 결합됩니다.

결합된 렌더 트리를 기반으로 렌더 트리 배치(layout), 렌더 트리 그리기(paint)를 거쳐 브라우저는 웹페이지를 표시합니다.

![20210810_104126](https://user-images.githubusercontent.com/42922298/128795555-8e424d94-c596-48a9-a2d3-fc281f5f6b87.png)

DOM (Document Object Model) 이란?HTML tag를 javasscript에서 이용할 수 있는 객체로 만드는 HTML 문서의 객체 기반 표현 방식입니다.

html parser는 script tag를 만나면 자바스크립트 코드를 실행하기 위해 DOM 생성 프로세스를 중지하고 자바스크립트 엔진으로 제어 권한을 넘깁니다.

다음 단계로 자바스크립트 엔진은 script 태그 내의 javascript code 혹은 script의 src attribute에 정의된 js 파일을 load하고 parse/기계어로 컴파일하여 실행합니다.

### 📘 페이지 로딩에 가장 영향을 주는 요소들에 대하여

> body 요소의 가장 아래에 script 태그를 위치해야 에러를 덜 발생하는 방법입니다.

위와 같은 말을 들어본 적이 있을 것입니다.

이유는 script태그가 중간에 있으면 DOM 트리를 만들던 렌더링 엔진이 중간에 멈춥니다.

따라서 중간에 엔진이 꺼질 일이 없도록 만드는 것이 중요합니다.

### 📘 시간 정보를 정밀하게 측정하기 위해서 고려한 방식에 대하여

The process.hrtime() method returns the current high-resolution real time in a [seconds, nanoseconds] tuple Array, where nanoseconds is the remaining part of the real time that can't be represented in second precision.

```javascript
import { hrtime } from 'process';

const NS_PER_SEC = 1e9;
const time = hrtime();
// [ 1800216, 25 ]

setTimeout(() => {
  const diff = hrtime(time);
  // [ 1, 552 ]

  console.log(`Benchmark took ${diff[0] * NS_PER_SEC + diff[1]} nanoseconds`);
  // Benchmark took 1000000552 nanoseconds
}, 1000);
```

참고 사이트 : https://nodejs.org/api/process.html

해당 방법이 1나노세컨드까지 측정해주므로 제일 정확하다고 생각합니다.

### 📘 로컬에 캐싱되는 경우 실제 개발자 도구와 내가 구현한 프로그램과의 차이점에 대하여

제가 만든 프로그램은 cache를 직접 저장해야 하고 직접 다운받아 크기를 확인해야 합니다.

하지만 개발자 도구는 도구 자체에서 파일 이름을 포함한 수많은 정보를 내포하고 있습니다.

최대한 가깝게 만들기 위해선 http 요청을 보내는 서버를 만들면 가까워지지 않을까 생각이 듭니다.

### 🎞 Remark
