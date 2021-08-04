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

Publisher-Subscriber 패턴 :

객체들 사이에서 직접적으로 참조해야 하는 강한 결합을 느슨한 관계로 바꾸는 방법

![20210804_090223](https://user-images.githubusercontent.com/42922298/128101238-0f90d9a5-4861-4946-8fec-a681fb70c085.png)

### 📘 스스로 확인할 사항

Event Emitter를 도입하는 방법은 하나의 구조여서 쉬웠지만 Promise는 정말 어떤 상태로 되고 얼마나 시간이 걸리고 논리적인 순서를 어떻게 짜야 하는지 알 수 없는 존재였습니다.

Promise는 반드시 결정된다는(성공 또는 실패한다는) 보장이 없다.

따라서 async /await으로 직접 파라미터로 인해 함수가 동작하는지 확인해볼 필요가 있습니다.

EventEmitter는 웹 브라우저의 DOM 객체에 이벤트를 부여할 때 썼던 addEventListener() 와 비슷하다고 보면 된다.

모든 노드 객체는 EventEmitter를 상속받을 수 있습니다. 

* events 객체의 메소드

emitter.addListener(event, listener) : on() 메소드와 같다. 이벤트를 생성하는 메소드.

emitter.on(event, listener) : addListener()과 동일하다. 이벤트를 생성하는 메소드.

emitter.once(event, listener) : 이벤트를 한 번만 연결한 후 제거한다.

emitter.removeListener(event, listener) : 특정 이벤트의 특정 이벤트 핸들러를 제거한다. 이 메소드를 이용해 리스너를 삭제하면 리스너 배열의 인덱스가 갱신되니 주의.

emitter.removeAllListeners([event]) : 모든 이벤트 핸들러를 제거한다.

emitter.setMaxListeners(n) : n으로 한 이벤트에 최대허용 개수를 정해준다. node.js는 기본값으로 한 이벤트에 10개의 이벤트 핸들러를 작성할 수 있는데, 11개 이상을 사용하고 싶다면 n값을 넘겨주면 된다. n값으로 0을 넘겨 주면 연결 개수 제한이 사라짐.

emitter.emit(eventName[, ...args]) : 이벤트를 발생시킨다.

### 🎞 Remark
