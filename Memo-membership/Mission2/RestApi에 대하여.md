## 📕 Day 0 - BoostCamp

REST : REpresentational State Transfer

### 📘 The six constraints 

1. Uniform Interface : 균일한 인터페이스

균일한 인터페이스 제약 조건은 클라이언트와 서버 간의 인터페이스를 정의합니다.

* Resource-Based

개별 리소스는 URI를 리소스 식별자로 사용하여 요청에서 식별됩니다.

소스 자체는 클라이언트에 반환되는 표현과 개념적으로 별개입니다.

* Manipulation of Resources Through Representations

클라이언트가 연결된 메타데이터를 포함하여 리소스의 표현을 보유하고 있을 때 권한이 있는 경우 서버에서 리소스를 수정하거나 삭제할 수 있는 충분한 정보를 갖게 됩니다.

* Self-descriptive Messages

각 메시지에는 메시지 처리 방법을 설명하기에 충분한 정보가 포함되어 있습니다.

예를 들어, 호출할 파서는 인터넷 미디어 유형(이전에는 MIME 유형으로 알려짐)에 의해 지정될 수 있습니다. 

응답은 또한 캐시 기능을 명시적으로 나타냅니다.

* Hypermedia as the Engine of Application State (HATEOAS)

클라이언트는 본문 내용, 쿼리 문자열 매개변수, 요청 헤더 및 요청된 URI(리소스 이름)를 통해 상태를 전달합니다.

서비스는 본문 내용, 응답 코드 및 응답 헤더를 통해 클라이언트에 상태를 전달합니다. 

이를 기술적으로 하이퍼미디어(또는 하이퍼텍스트 내의 하이퍼링크)라고 합니다.

3. Stateless

본질적으로 이것이 의미하는 바는 요청을 처리하는 데 필요한 상태가 URI, 쿼리 문자열 매개변수, 본문 또는 헤더의 일부로 요청 자체 내에 포함된다는 것입니다.

what's the difference between state and a resource?

상태 또는 응용 프로그램 상태는 서버가 현재 세션 또는 요청에 필요한 데이터인 요청을 수행하기 위해 신경을 쓰는 상태입니다. 

리소스 또는 리소스 상태는 리소스 표현을 정의하는 데이터입니다(예: 데이터베이스에 저장된 데이터).

4. Cacheable

World Wide Web에서와 같이 클라이언트는 응답을 캐시할 수 있습니다.

5. Client-Server

균일한 인터페이스는 클라이언트를 서버와 분리합니다. 

이러한 관심 분리는 예를 들어 클라이언트가 각 서버 내부에 남아 있는 데이터 저장소에 관심을 두지 않음을 의미하므로 클라이언트 코드의 이식성이 향상됩니다.

6. Layered System

클라이언트는 일반적으로 최종 서버에 직접 연결되어 있는지 아니면 중간에 중간에 연결되어 있는지 알 수 없습니다. 

중간 서버는 로드 밸런싱을 활성화하고 공유 캐시를 제공하여 시스템 확장성을 향상시킬 수 있습니다. 

계층은 보안 정책을 시행할 수도 있습니다.

7. Code on Demand (optional)

서버는 실행할 수 있는 논리를 클라이언트에 전송하여 클라이언트의 기능을 일시적으로 확장하거나 사용자 지정할 수 있습니다. 

예를 들어 Java 애플릿과 같은 컴파일된 구성 요소 및 JavaScript와 같은 클라이언트 측 스크립트가 포함될 수 있습니다.

### 📘 http method

POST 요청은 대부분 idempotent(멱등, f(f(x))=f(x)) 하지 않다. (멱등, 반환되는 응답 리소스의 결과가 항상 동일하다)

GET, PUT 등의 요청은 idempotent 하다

GET /users/1의 경우 언제나 같은 결과로 응답한다.

PUT을 POST처럼 쓰는 경우엔 idempotent하지 않을 수 있다.

HATEOAS로 Content-Location를 대체할 수 있다.

### 🎞 Remark

참고 사이트 : https://sanghaklee.tistory.com/57

책 추천 : http://www.yes24.com/Product/Goods/94462254

책 추천 : https://m.search.daum.net/kakao?w=bookpage&bookId=5140806&tab=introduction&DA=SH2&q=%EC%8A%A4%ED%94%84%EB%A7%81%20%EB%B6%80%ED%8A%B8%EC%99%80
