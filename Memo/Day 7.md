## 📕 Day 7 - BoostCamp

### 📘 클래스, 객체, 인스턴스에 관하여

#### 클래스(Class)란? 

객체를 만들어 내기 위한 설계도 혹은 틀

연관되어 있는 변수와 메서드의 집합

#### 객체(Object)란?

소프트웨어 세계에 구현할 대상

클래스에 선언된 모양 그대로 생성된 실체

‘클래스의 인스턴스(instance)’ 

객체는 모든 인스턴스를 대표하는 포괄적인 의미를 갖습니다.

OOP의 관점에서 class 타입으로 선언되었을 때 ‘객체’라고 부릅니다.

#### 인스턴스(Instance)란?

설계도를 바탕으로 소프트웨어 세계에 구현된 구체적인 실체

즉, 객체를 소프트웨어에 실체화 하면 그것을 ‘인스턴스’라고 부른다.

참고 : https://gmlwjd9405.github.io/2018/09/17/class-object-instance.html

### 📘 상속이란?

부모 클래스에서 사용되는 method나 변수를 자식 클래스가 받아서 사용하는 것

javascript에는 크게 2가지 방식이 존재합니다.

#### 속성 상속

Prototype 상속이 반드시 유사한 계층구조를 생성하지는 않습니다.

프로토타입 체인을 최대한 간결하게 만드는 것이 중요합니다.

Prototype은 Object instance입니다.

```javascript
// o라는 객체가 있고, 속성 'a' 와 'b'를 갖고 있다고 하자.
let f = function () {
    this.a = 1;
    this.b = 2;
}
let o = new f(); // {a: 1, b: 2}

// f 함수의 prototype 속성 값들을 추가 하자.
f.prototype.b = 3;
f.prototype.c = 4;

// f.prototype = {b: 3, c: 4}; 라고 하지 마라, 해당 코드는 prototype chain 을 망가뜨린다.
// o.[[Prototype]]은 속성 'b'와 'c'를 가지고 있다.
// o.[[Prototype]].[[Prototype]] 은 Object.prototype 이다.
// 마지막으로 o.[[Prototype]].[[Prototype]].[[Prototype]]은 null이다.
// null은 프로토타입의 종단을 말하며 정의에 의해서 추가 [[Prototype]]은 없다.
// {a: 1, b: 2} ---> {b: 3, c: 4} ---> Object.prototype ---> null

console.log(o.a); // 1
// o는 'a'라는 속성을 가지는가? 그렇다. 속성의 값은 1이다.

console.log(o.b); // 2
// o는 'b'라는 속성을 가지는가? 그렇다. 속성의 값은 2이다.
// 프로토타입 역시 'b'라는 속성을 가지지만 이 값은 쓰이지 않는다. 이것을 "속성의 가려짐(property shadowing)" 이라고 부른다.

console.log(o.c); // 4
// o는 'c'라는 속성을 가지는가? 아니다. 프로토타입을 확인해보자.
// o.[[Prototype]]은 'c'라는 속성을 가지는가? 가지고 값은 4이다.

console.log(o.d); // undefined
// o는 'd'라는 속성을 가지는가? 아니다. 프로토타입을 확인해보자.
// o.[[Prototype]]은 'd'라는 속성을 가지는가? 아니다. 다시 프로토타입을 확인해보자.
// o.[[Prototype]].[[Prototype]]은 null이다. 찾는 것을 그만두자.
// 속성이 발견되지 않았기 때문에 undefined를 반환한다.
```

#### 메소드 상속

자바스크립트에 "메소드"라는건 없다.

하지만 자바스크립트는 객체의 속성으로 함수를 지정할 수 있고 속성 값을 사용하듯 쓸 수 있다.

Class 상속을 이용한 방법은 변경하기 어렵고 기반이 되는 클래스를 수정했을 때 하위 클래스들이 영향을 쉽게 받을 수 있는 계급 계층구조를 만든다.

Class는 설계도이다.

```javascript
var o = {
  a: 2,
  m: function(b){
    return this.a + 1;
  }
};

console.log(o.m()); // 3
// o.m을 호출하면 'this' 는 o를 가리킨다.

var p = Object.create(o);
// p 는 프로토타입을 o로 가지는 오브젝트이다.

p.a = 12; // p 에 'a'라는 새로운 속성을 만들었다.
console.log(p.m()); // 13
// p.m이 호출 될 때 'this' 는 'p'를 가리킨다.
// 따라서 o의 함수 m을 상속 받으며,
// 'this.a'는 p.a를 나타내며 p의 개인 속성 'a'가 된다.
```

상속하는 방법 중에선 prototype을 이용하는 방식이 제일 많이 추천되고 있습니다.

참고 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

### 🎞 Remark