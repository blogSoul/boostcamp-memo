## π Day 12 - BoostCamp

### π Javascript ν¨ν΄μ κ΄νμ¬

#### π JavaScript Singleton

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

μ°Έκ³  μ¬μ΄νΈ : https://www.dofactory.com/javascript/design-patterns/singleton

#### π Observer ν¨ν΄

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

μ°Έκ³  μ¬μ΄νΈ : https://www.dofactory.com/javascript/design-patterns/observer

#### π JavaScript Observer μ Publisher / subscriberμ μ°¨μ΄

![20210803_170250](https://user-images.githubusercontent.com/42922298/128078635-d33ce39e-5f27-4da8-a8ff-5deda31fdeda.png)

* Publisher-Subscriber ν¨ν΄ :

κ°μ²΄λ€ μ¬μ΄μμ μ§μ μ μΌλ‘ μ°Έμ‘°ν΄μΌ νλ κ°ν κ²°ν©μ λμ¨ν κ΄κ³λ‘ λ°κΎΈλ λ°©λ²

publisherλ μ μ‘ λμμ λͺ¨λ₯΄λ©΄μ λ―Έλ€μ¨μ΄λ‘ λ©μμ§λ₯Ό μ μ‘νκ³  μ΄λ₯Ό ν΅ν΄ subscriberμ μ μ‘νλ μμ€ν

![20210804_090223](https://user-images.githubusercontent.com/42922298/128101238-0f90d9a5-4861-4946-8fec-a681fb70c085.png)

1. μ₯μ  : Loosely coupled, publisherμ subscriber μ¬μ΄μ μ°κ²°μ μ½νκ² λ§λ€μλ€λ μ μ΄ μ₯μ μλλ€. 

2. μ₯μ  : Scalable, λ°μ΄λ νμ μ±μ λ³΄μ¬μ€λλ€.

3. λ¨μ  : End-to-end μμ€νμ κ°μ  μμ€, λ―Έλ€μ¨μ΄λ₯Ό ν΅ν΄ ν΅μ νκΈ° λλ¬Έμ μλνλλ‘ μ λ¬νμ§ λͺ»ν  μ μμ κ°λ₯μ±μ΄ μκΉ

### π μ€μ€λ‘ νμΈν  μ¬ν­

#### π Promiseλ Event Emitterλ₯Ό λμν  λ κ°μ₯ λν΄νκ±°λ μ΄λ €μ΄ μ 

Event Emitterλ₯Ό λμνλ λ°©λ²μ νλμ κ΅¬μ‘°μ¬μ μ¬μ μ§λ§ Promiseλ μ λ§ μ΄λ€ μνλ‘ λκ³  μΌλ§λ μκ°μ΄ κ±Έλ¦¬κ³  λΌλ¦¬μ μΈ μμλ₯Ό μ΄λ»κ² μ§μΌ νλμ§ μ μ μλ μ‘΄μ¬μμ΅λλ€.

Promiseλ λ°λμ κ²°μ λλ€λ(μ±κ³΅ λλ μ€ν¨νλ€λ) λ³΄μ₯μ΄ μλ€.

λ°λΌμ async /awaitμΌλ‘ μ§μ  νλΌλ―Έν°λ‘ μΈν΄ ν¨μκ° λμνλμ§ νμΈν΄λ³Ό νμκ° μμ΅λλ€.

EventEmitterλ μΉ λΈλΌμ°μ μ DOM κ°μ²΄μ μ΄λ²€νΈλ₯Ό λΆμ¬ν  λ μΌλ addEventListener() μ λΉμ·νλ€κ³  λ³΄λ©΄ λλ€.

λͺ¨λ  λΈλ κ°μ²΄λ EventEmitterλ₯Ό μμλ°μ μ μμ΅λλ€. 

### π  event emitterννλ‘ λΉλκΈ° λμμ μ§μνλ νμ

1. setTimeout

2. setInterval

3. HTTP request /response

4. event / handler

### π events κ°μ²΄μ λ©μλ

emitter.addListener(event, listener) : on() λ©μλμ κ°λ€. μ΄λ²€νΈλ₯Ό μμ±νλ λ©μλ.

emitter.on(event, listener) : addListener()κ³Ό λμΌνλ€. μ΄λ²€νΈλ₯Ό μμ±νλ λ©μλ.

emitter.once(event, listener) : μ΄λ²€νΈλ₯Ό ν λ²λ§ μ°κ²°ν ν μ κ±°νλ€.

emitter.removeListener(event, listener) : νΉμ  μ΄λ²€νΈμ νΉμ  μ΄λ²€νΈ νΈλ€λ¬λ₯Ό μ κ±°νλ€. μ΄ λ©μλλ₯Ό μ΄μ©ν΄ λ¦¬μ€λλ₯Ό μ­μ νλ©΄ λ¦¬μ€λ λ°°μ΄μ μΈλ±μ€κ° κ°±μ λλ μ£Όμ.

emitter.removeAllListeners([event]) : λͺ¨λ  μ΄λ²€νΈ νΈλ€λ¬λ₯Ό μ κ±°νλ€.

emitter.setMaxListeners(n) : nμΌλ‘ ν μ΄λ²€νΈμ μ΅λνμ© κ°μλ₯Ό μ ν΄μ€λ€. node.jsλ κΈ°λ³Έκ°μΌλ‘ ν μ΄λ²€νΈμ 10κ°μ μ΄λ²€νΈ νΈλ€λ¬λ₯Ό μμ±ν  μ μλλ°, 11κ° μ΄μμ μ¬μ©νκ³  μΆλ€λ©΄ nκ°μ λκ²¨μ£Όλ©΄ λλ€. nκ°μΌλ‘ 0μ λκ²¨ μ£Όλ©΄ μ°κ²° κ°μ μ νμ΄ μ¬λΌμ§.

emitter.emit(eventName[, ...args]) : μ΄λ²€νΈλ₯Ό λ°μμν¨λ€.

### π redis λΈλ λͺ¨λμ λνμ¬

![20210809_095158](https://user-images.githubusercontent.com/42922298/128651196-8834f410-0985-403b-83ca-1f09e0728641.png)

Redisλ NoSQL Databaseμλλ€. 

Cashμ²λΌ νλ°μ±μ΄λ μμμ± Dataλ₯Ό μ μ₯νλλ° λ§μ΄ μ¬μ©ν©λλ€.

νμ§λ§ λ°±μμ΄λ λ³΅κ΅¬μ©μΌλ‘ μ£Όλ‘ μ¬μ©ν λΏ Dataλ λͺ¨λ memoryμ μ μ₯λκΈ° λλ¬Έμ, λΉ λ₯Έ μ κ·Ό μλλ₯Ό κ°μ§κ³  μμ΅λλ€.

Redis node moduleμ Publisher-Subscriber ν¨ν΄μ λ°λ¦λλ€.

![20210809_103607](https://user-images.githubusercontent.com/42922298/128652628-fe1c3eaf-764a-47e8-a214-f84d6a9aab73.png)

μ°λ¦¬κ° λ§λ  νλ‘κ·Έλ¨κ³Ό λ€λ₯Έ λ°©λ²μ redisλ key-value κ΅¬μ‘°λ₯Ό κ°μ§λ€λ μ μλλ€.

redisλ key-value κ΅¬μ‘°λ‘ κ΅¬νν΄μ λ λΉ λ₯΄κ² searchλ₯Ό ν  μ μκ³  λ°μ΄ν°λ₯Ό λ λΉ λ₯΄κ² μΆκ°ν  μ μμμ΅λλ€.

μ κ° λ§λ  νλ‘μ νΈλ ν μνλ₯Ό jsonμΌλ‘ κ΅¬νν΄μ ν΄λΉ μνλ₯Ό λ³΄κΈ° νΈνκ² λ§λ€μμ΅λλ€.

### π Remark

async /awaitλ₯Ό μ¬μ©ν  λ, Promise κ°μ²΄μλ§ μ¬μ©μ΄ κ°λ₯ν΄μ returnμ΄ voidλ‘ λ§λ€μ΄ μ§ μ μκΈ° λλ¬Έμ ν¬κ² μ κ²½ μ μ¨λ λ κ±° κ°μ΅λλ€.

EventEmitterλ λκΈ°μ μΌλ‘ μμμ΄ μ΄λ£¨μ΄μ§λλ€.

redisλ pub /subκ° μ§μμ΄ κ°λ₯νλ€κ³  ν©λλ€. 

onμ λ±λ‘λ ν΄λμ€λ μ§μ°μ§ μλ μ΄μ λ¨μ΅λλ€.

onceλ νλ² νΈμΆλλ©΄ μ¬λΌμ§λλ€.

process.nextTikμΌλ‘λ λΉλκΈ°λ₯Ό κ΅¬νν  μ μμ΅λλ€.

Observerν¨ν΄μ λλΆλΆ λκΈ° λ°©μμλλ€.

Pub-sub λ°©μμ λΉλκΈ° λ°©μμΌλ‘ λμν©λλ€.

mapμμ  κ°μ²΄μμ ν€κ°μ μ¬μ©ν΄λ λ©λλ€.

μΈν°λ· νλ‘ν μ½(IP, Internet Protocol)μ μ‘μ  νΈμ€νΈμ μμ  νΈμ€νΈκ° ν¨ν· κ΅ν λ€νΈμν¬(ν¨ν· μ€μμΉ­ λ€νΈμν¬, Packet Switching Network)μμ μ λ³΄λ₯Ό μ£Όκ³ λ°λ λ° μ¬μ©νλ μ λ³΄ μμ£Όμ κ·μ½(νλ‘ν μ½, Protocol)μ΄λ©°, OSI λ€νΈμν¬ κ³μΈ΅μμ νΈμ€νΈμ μ£Όμμ§μ κ³Ό ν¨ν· λΆν  λ° μ‘°λ¦½ κΈ°λ₯μ λ΄λΉνλ€.

The Publish/Subscribe Pattern in JavaScript λ§ν¬ : https://jsmanifest.com/the-publish-subscribe-pattern-in-javascript/

λΉλκΈ° κ΄λ ¨ λ§ν¬ : https://developer.mozilla.org/ko/docs/Learn/JavaScript/Asynchronous/Async_await

nodejsμ λν μλͺ»λ μμ λͺ κ°μ§ : https://yceffort.kr/2021/06/misconceptions-on-nodejs
