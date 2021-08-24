## 📕 Day 2 - BoostCamp

### 📘 데일리 스크럼

윤해수 : 

1. header 길이가 고정되게 만들어서 이상했습니다.

header가 844px 미만이면 고정되게 만들었습니다.

2. 날짜에 대한 고민

전역 변수 date를 만들고 서버에 던질 예정

정유환

1. html => pug

사이트 코드

2. 코드 중복은 어떻게 

extends, include

3. 날짜에 대한 상태 

나중에 고려하는걸로

권영기

1. 코드 중복은 어떻게

extends로 layout을 만들었습니다. 

2. 명세서에 있는 아이콘은 어디?

figma 확인하기 <- 여기에 다 있습니다.

### 📘 오늘 목표

1. create, read

2. redis 사용하기 

3. 명세서부터 

### 📘 console에 관하여

The console module provides a simple debugging console that is similar to the JavaScript console mechanism provided by web browsers.

Warning: The global console object's methods are neither consistently synchronous like the browser APIs they resemble, nor are they consistently asynchronous like all other Node.js streams. See the note on process I/O for more information.

TTY(teletypewriter) 항목은 리눅스 디바이스 드라이브중에서 콘솔이나 터미널을 의미합니다.

`console.time([label])`로 시간 측정 가능

`console.trace([message][, ...args])`로 디버깅이 가능합니다.

### 📘 DNS 서버에 관하여

> https://howdns.works/

DNS 또는 Domain Name System은 사람이 읽을 수 있는 도메인 이름(예: www.amazon.com)을 머신이 읽을 수 있는 IP 주소(예: 192.0.2.44)로 변환합니다.

### 📘 URL에 대하여

URL: Uniform Resource Locator

스킴:사용자이름:비번@호스트:포트/경로;패러미터?쿼리#프래그먼트

* 포맷 

MIME (Multipurpose Internel Mail Extensions) 타입으로 파일의 포맷을 분류합니다.

> 참고 사이트 : https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types

### 📘 Tim Berners-Lee · TED2009에 관하여

> https://www.ted.com/talks/tim_berners_lee_the_next_web?language=ko

옛날 웹은 문서 중심으로 읽는다

현재 웹은 데이터 중심으로 읽는다

hans rosling 강의 추천

데이터의 양이 중요합니다.

* Linked Data란? 

1. http로 시작하는 주소가 있습니다,.

2. 정보가 프로토콜에 따라 정해집니다. 내가 중요한 정보를 얻어 온다는 것입니다.

3. 우리가 그 정보를 얻어올 때, 정보들 사이의 관계도 가지고 온다는 것입니다.

데이터는 "관계"입니다.

linked data standard

데이터 hugging을 만듭니다.

가공되지 않은 데이터를 원합니다. (Raw Data Now)

* 웹의 4요소

1. html

2. URL, URI

3. web browser, web server

4. http(HyperText Transfer Protocol)

### 📘 nth-child(n)와 nth-of-type(n)의 차이

nth-child(n) : 부모 엘리먼트의 모든 자식 엘리먼트중 n번째

nth-of-type(n) : 부모 엘리먼트의 특정 자식 엘리먼트중 n번째

### 🎞 Remark
