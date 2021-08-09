## 📕 Day 12 - BoostCamp

### 📘 Javascript 패턴에 관하여

#### 📘 JavaScript Singleton

Singleton :

![20210804_083950](https://user-images.githubusercontent.com/42922298/128099728-ce812831-5156-412e-bdac-0da88e387ea1.png)

```javascript
var Singleton = (function () {
    var instance;

    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

function run() {

    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();

    console.log("Same instance? " + (instance1 === instance2));
}
```

The getInstance method demonstates another design pattern called Lazy Load.

1. defines getInstance() which returns the unique instance.

2. responsible for creating and managing the instance object.

ex : database connection pool

참고 사이트 : https://www.dofactory.com/javascript/design-patterns/singleton

#### 📘 Observer 패턴

![20210804_083937](https://user-images.githubusercontent.com/42922298/128099760-7f9ba253-84bf-44ca-8c5f-4d97fc8259f5.png)

```javascript
class Observable {
    constructor() {
        this._observers = new Set();
    }
    subscribe(observer) {
        this._observers.add(observer);
    }
    unsubscribe(observer) {
        this._observers = [...this._observers].filter(subscriber => subscriber !== observer);
    }
    notify(data) {
        this._observers.forEach(observer => observer(data));
    }
}
```

```javascript
function Click() {
    this.handlers = [];  // observers
}

Click.prototype = {

    subscribe: function (fn) {
        this.handlers.push(fn);
    },

    unsubscribe: function (fn) {
        this.handlers = this.handlers.filter(
            function (item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    },

    fire: function (o, thisObj) {
        var scope = thisObj || window;
        this.handlers.forEach(function (item) {
            item.call(scope, o);
        });
    }
}

function run() {

    var clickHandler = function (item) {
        console.log("fired: " + item);
    };

    var click = new Click();

    click.subscribe(clickHandler);
    click.fire('event #1');
    click.unsubscribe(clickHandler);
    click.fire('event #2');
    click.subscribe(clickHandler);
    click.fire('event #3');
}
```

he Observer pattern facilitates good object-oriented design and promotes loose coupling.

The event and event-handler paradigm in JavaScript is the manifestation of the Observer design pattern. 

Another name for the Observer pattern is Pub/Sub, short for Publication/Subscription.

참고 사이트 : https://www.dofactory.com/javascript/design-patterns/observer

#### 📘 JavaScript Observer 와 Publisher / subscriber의 차이

![20210803_170250](https://user-images.githubusercontent.com/42922298/128078635-d33ce39e-5f27-4da8-a8ff-5deda31fdeda.png)

* Publisher-Subscriber 패턴 :

객체들 사이에서 직접적으로 참조해야 하는 강한 결합을 느슨한 관계로 바꾸는 방법

publisher는 전송 대상은 모르면서 미들웨어로 메시지를 전송하고 이를 통해 subscriber에 전송하는 시스템

![20210804_090223](https://user-images.githubusercontent.com/42922298/128101238-0f90d9a5-4861-4946-8fec-a681fb70c085.png)

1. 장점 : Loosely coupled, publisher와 subscriber 사이의 연결을 약하게 만들었다는 점이 장점입니다. 

2. 장점 : Scalable, 뛰어난 확정성을 보여줍니다.

3. 단점 : End-to-end 시스템의 강점 상실, 미들웨어를 통해 통신하기 때문에 의도한대로 전달하지 못할 수 있을 가능성이 생김

### 📘 스스로 확인할 사항

#### 📘 Promise나 Event Emitter를 도입할 때 가장 난해하거나 어려운 점

Event Emitter를 도입하는 방법은 하나의 구조여서 쉬웠지만 Promise는 정말 어떤 상태로 되고 얼마나 시간이 걸리고 논리적인 순서를 어떻게 짜야 하는지 알 수 없는 존재였습니다.

Promise는 반드시 결정된다는(성공 또는 실패한다는) 보장이 없다.

따라서 async /await으로 직접 파라미터로 인해 함수가 동작하는지 확인해볼 필요가 있습니다.

EventEmitter는 웹 브라우저의 DOM 객체에 이벤트를 부여할 때 썼던 addEventListener() 와 비슷하다고 보면 된다.

모든 노드 객체는 EventEmitter를 상속받을 수 있습니다. 

### 📘  event emitter형태로 비동기 동작을 지원하는 타입

1. setTimeout

2. setInterval

3. HTTP request /response

4. event / handler

### 📘 events 객체의 메소드

emitter.addListener(event, listener) : on() 메소드와 같다. 이벤트를 생성하는 메소드.

emitter.on(event, listener) : addListener()과 동일하다. 이벤트를 생성하는 메소드.

emitter.once(event, listener) : 이벤트를 한 번만 연결한 후 제거한다.

emitter.removeListener(event, listener) : 특정 이벤트의 특정 이벤트 핸들러를 제거한다. 이 메소드를 이용해 리스너를 삭제하면 리스너 배열의 인덱스가 갱신되니 주의.

emitter.removeAllListeners([event]) : 모든 이벤트 핸들러를 제거한다.

emitter.setMaxListeners(n) : n으로 한 이벤트에 최대허용 개수를 정해준다. node.js는 기본값으로 한 이벤트에 10개의 이벤트 핸들러를 작성할 수 있는데, 11개 이상을 사용하고 싶다면 n값을 넘겨주면 된다. n값으로 0을 넘겨 주면 연결 개수 제한이 사라짐.

emitter.emit(eventName[, ...args]) : 이벤트를 발생시킨다.

### 📘 redis 노드 모듈에 대하여

![20210809_095158](https://user-images.githubusercontent.com/42922298/128651196-8834f410-0985-403b-83ca-1f09e0728641.png)

Redis는 NoSQL Database입니다. 

Cash처럼 휘발성이나 임시성 Data를 저장하는데 많이 사용합니다.

하지만 백업이나 복구용으로 주로 사용할뿐 Data는 모두 memory에 저장되기 때문에, 빠른 접근 속도를 가지고 있습니다.

Redis node module은 Publisher-Subscriber 패턴을 따릅니다.

![20210809_103607](https://user-images.githubusercontent.com/42922298/128652628-fe1c3eaf-764a-47e8-a214-f84d6a9aab73.png)

우리가 만든 프로그램과 다른 방법은 redis는 key-value 구조를 가진다는 점입니다.

redis는 key-value 구조로 구현해서 더 빠르게 search를 할 수 있고 데이터를 더 빠르게 추가할 수 있었습니다.

제가 만든 프로젝트는 현 상태를 json으로 구현해서 해당 상태를 보기 편하게 만들었습니다.

### 🎞 Remark

async /await를 사용할 때, Promise 객체에만 사용이 가능해서 return이 void로 만들어 질 수 있기 때문에 크게 신경 안 써도 될거 같습니다.

EventEmitter는 동기적으로 작업이 이루어집니다.

redis는 pub /sub가 지원이 가능하다고 합니다. 

on에 등록된 클래스는 지우지 않는 이상 남습니다.

once는 한번 호출되면 사라집니다.

process.nextTik으로도 비동기를 구현할 수 있습니다.

Observer패턴은 대부분 동기 방식입니다.

Pub-sub 방식은 비동기 방식으로 동작합니다.

map에선 객체에서 키값을 사용해도 됩니다.

인터넷 프로토콜(IP, Internet Protocol)은 송신 호스트와 수신 호스트가 패킷 교환 네트워크(패킷 스위칭 네트워크, Packet Switching Network)에서 정보를 주고받는 데 사용하는 정보 위주의 규약(프로토콜, Protocol)이며, OSI 네트워크 계층에서 호스트의 주소지정과 패킷 분할 및 조립 기능을 담당한다.

The Publish/Subscribe Pattern in JavaScript 링크 : https://jsmanifest.com/the-publish-subscribe-pattern-in-javascript/

비동기 관련 링크 : https://developer.mozilla.org/ko/docs/Learn/JavaScript/Asynchronous/Async_await

nodejs에 대한 잘못된 상식 몇 가지 : https://yceffort.kr/2021/06/misconceptions-on-nodejs
