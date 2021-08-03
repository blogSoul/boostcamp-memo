## 📕 Day 12 - BoostCamp

### 📘 에 관하여

Publisher-Subscriber 패턴 :

객체들 사이에서 직접적으로 참조해야 하는 강한 결합을 느슨한 관계로 바꾸는 방법

Singleton :

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

#### 📘 JavaScript Singleton

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

참고 사이트 : https://www.dofactory.com/javascript/design-patterns/singleton

#### 📘 JavaScript Observer

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

### 🎞 Remark
