## π Day 7 - BoostCamp

### π ν΄λμ€, κ°μ²΄, μΈμ€ν΄μ€μ κ΄νμ¬

#### ν΄λμ€(Class)λ? 

κ°μ²΄λ₯Ό λ§λ€μ΄ λ΄κΈ° μν μ€κ³λ νΉμ ν

μ°κ΄λμ΄ μλ λ³μμ λ©μλμ μ§ν©

#### κ°μ²΄(Object)λ?

μννΈμ¨μ΄ μΈκ³μ κ΅¬νν  λμ

ν΄λμ€μ μ μΈλ λͺ¨μ κ·Έλλ‘ μμ±λ μ€μ²΄

βν΄λμ€μ μΈμ€ν΄μ€(instance)β 

κ°μ²΄λ λͺ¨λ  μΈμ€ν΄μ€λ₯Ό λννλ ν¬κ΄μ μΈ μλ―Έλ₯Ό κ°μ΅λλ€.

OOPμ κ΄μ μμ class νμμΌλ‘ μ μΈλμμ λ βκ°μ²΄βλΌκ³  λΆλ¦λλ€.

#### μΈμ€ν΄μ€(Instance)λ?

μ€κ³λλ₯Ό λ°νμΌλ‘ μννΈμ¨μ΄ μΈκ³μ κ΅¬νλ κ΅¬μ²΄μ μΈ μ€μ²΄

μ¦, κ°μ²΄λ₯Ό μννΈμ¨μ΄μ μ€μ²΄ν νλ©΄ κ·Έκ²μ βμΈμ€ν΄μ€βλΌκ³  λΆλ₯Έλ€.

μ°Έκ³  : https://gmlwjd9405.github.io/2018/09/17/class-object-instance.html

### π μμμ΄λ?

λΆλͺ¨ ν΄λμ€μμ μ¬μ©λλ methodλ λ³μλ₯Ό μμ ν΄λμ€κ° λ°μμ μ¬μ©νλ κ²

javascriptμλ ν¬κ² 2κ°μ§ λ°©μμ΄ μ‘΄μ¬ν©λλ€.

#### μμ± μμ

Prototype μμμ΄ λ°λμ μ μ¬ν κ³μΈ΅κ΅¬μ‘°λ₯Ό μμ±νμ§λ μμ΅λλ€.

νλ‘ν νμ μ²΄μΈμ μ΅λν κ°κ²°νκ² λ§λλ κ²μ΄ μ€μν©λλ€.

Prototypeμ Object instanceμλλ€.

```javascript
// oλΌλ κ°μ²΄κ° μκ³ , μμ± 'a' μ 'b'λ₯Ό κ°κ³  μλ€κ³  νμ.
let f = function () {
    this.a = 1;
    this.b = 2;
}
let o = new f(); // {a: 1, b: 2}

// f ν¨μμ prototype μμ± κ°λ€μ μΆκ° νμ.
f.prototype.b = 3;
f.prototype.c = 4;

// f.prototype = {b: 3, c: 4}; λΌκ³  νμ§ λ§λΌ, ν΄λΉ μ½λλ prototype chain μ λ§κ°λ¨λ¦°λ€.
// o.[[Prototype]]μ μμ± 'b'μ 'c'λ₯Ό κ°μ§κ³  μλ€.
// o.[[Prototype]].[[Prototype]] μ Object.prototype μ΄λ€.
// λ§μ§λ§μΌλ‘ o.[[Prototype]].[[Prototype]].[[Prototype]]μ nullμ΄λ€.
// nullμ νλ‘ν νμμ μ’λ¨μ λ§νλ©° μ μμ μν΄μ μΆκ° [[Prototype]]μ μλ€.
// {a: 1, b: 2} ---> {b: 3, c: 4} ---> Object.prototype ---> null

console.log(o.a); // 1
// oλ 'a'λΌλ μμ±μ κ°μ§λκ°? κ·Έλ λ€. μμ±μ κ°μ 1μ΄λ€.

console.log(o.b); // 2
// oλ 'b'λΌλ μμ±μ κ°μ§λκ°? κ·Έλ λ€. μμ±μ κ°μ 2μ΄λ€.
// νλ‘ν νμ μ­μ 'b'λΌλ μμ±μ κ°μ§μ§λ§ μ΄ κ°μ μ°μ΄μ§ μλλ€. μ΄κ²μ "μμ±μ κ°λ €μ§(property shadowing)" μ΄λΌκ³  λΆλ₯Έλ€.

console.log(o.c); // 4
// oλ 'c'λΌλ μμ±μ κ°μ§λκ°? μλλ€. νλ‘ν νμμ νμΈν΄λ³΄μ.
// o.[[Prototype]]μ 'c'λΌλ μμ±μ κ°μ§λκ°? κ°μ§κ³  κ°μ 4μ΄λ€.

console.log(o.d); // undefined
// oλ 'd'λΌλ μμ±μ κ°μ§λκ°? μλλ€. νλ‘ν νμμ νμΈν΄λ³΄μ.
// o.[[Prototype]]μ 'd'λΌλ μμ±μ κ°μ§λκ°? μλλ€. λ€μ νλ‘ν νμμ νμΈν΄λ³΄μ.
// o.[[Prototype]].[[Prototype]]μ nullμ΄λ€. μ°Ύλ κ²μ κ·Έλ§λμ.
// μμ±μ΄ λ°κ²¬λμ§ μμκΈ° λλ¬Έμ undefinedλ₯Ό λ°ννλ€.
```

#### λ©μλ μμ

μλ°μ€ν¬λ¦½νΈμ "λ©μλ"λΌλκ±΄ μλ€.

νμ§λ§ μλ°μ€ν¬λ¦½νΈλ κ°μ²΄μ μμ±μΌλ‘ ν¨μλ₯Ό μ§μ ν  μ μκ³  μμ± κ°μ μ¬μ©νλ― μΈ μ μλ€.

Class μμμ μ΄μ©ν λ°©λ²μ λ³κ²½νκΈ° μ΄λ ΅κ³  κΈ°λ°μ΄ λλ ν΄λμ€λ₯Ό μμ νμ λ νμ ν΄λμ€λ€μ΄ μν₯μ μ½κ² λ°μ μ μλ κ³κΈ κ³μΈ΅κ΅¬μ‘°λ₯Ό λ§λ λ€.

Classλ μ€κ³λμ΄λ€.

```javascript
var o = {
  a: 2,
  m: function(b){
    return this.a + 1;
  }
};

console.log(o.m()); // 3
// o.mμ νΈμΆνλ©΄ 'this' λ oλ₯Ό κ°λ¦¬ν¨λ€.

var p = Object.create(o);
// p λ νλ‘ν νμμ oλ‘ κ°μ§λ μ€λΈμ νΈμ΄λ€.

p.a = 12; // p μ 'a'λΌλ μλ‘μ΄ μμ±μ λ§λ€μλ€.
console.log(p.m()); // 13
// p.mμ΄ νΈμΆ λ  λ 'this' λ 'p'λ₯Ό κ°λ¦¬ν¨λ€.
// λ°λΌμ oμ ν¨μ mμ μμ λ°μΌλ©°,
// 'this.a'λ p.aλ₯Ό λνλ΄λ©° pμ κ°μΈ μμ± 'a'κ° λλ€.
```

μμνλ λ°©λ² μ€μμ  prototypeμ μ΄μ©νλ λ°©μμ΄ μ μΌ λ§μ΄ μΆμ²λκ³  μμ΅λλ€.

μ°Έκ³  : https://developer.mozilla.org/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

### π Javascript μμ νλ‘ν νμμ μ¬μ©νλ λ°©λ²

```javascript
function doSomething(){}
//console.log( doSomething.prototype );
// It does not matter how you declare the function, a
//  function in JavaScript will always have a default
//  prototype property.
var doSomething = function(){};
console.log( doSomething.prototype );
```

κ²°κ³Ό :

```javascript
{
    constructor: Ζ doSomething(),
    __proto__: {
        constructor: Ζ Object(),
        hasOwnProperty: Ζ hasOwnProperty(),
        isPrototypeOf: Ζ isPrototypeOf(),
        propertyIsEnumerable: Ζ propertyIsEnumerable(),
        toLocaleString: Ζ toLocaleString(),
        toString: Ζ toString(),
        valueOf: Ζ valueOf()
    }
}
```

```javascript
function doSomething(){}
doSomething.prototype.foo = "bar";
console.log( doSomething.prototype );
```

κ²°κ³Ό :

```javascript
{
    foo: "bar",
    constructor: Ζ doSomething(),
    __proto__: {
        constructor: Ζ Object(),
        hasOwnProperty: Ζ hasOwnProperty(),
        isPrototypeOf: Ζ isPrototypeOf(),
        propertyIsEnumerable: Ζ propertyIsEnumerable(),
        toLocaleString: Ζ toLocaleString(),
        toString: Ζ toString(),
        valueOf: Ζ valueOf()
    }
}
```

```javascript
function doSomething(){}
doSomething.prototype.foo = "bar"; // add a property onto the prototype
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value"; // add a property onto the object
console.log( doSomeInstancing );
```

κ²°κ³Ό : 

```javascript
{
    prop: "some value",
    __proto__: {
        foo: "bar",
        constructor: Ζ doSomething(),
        __proto__: {
            constructor: Ζ Object(),
            hasOwnProperty: Ζ hasOwnProperty(),
            isPrototypeOf: Ζ isPrototypeOf(),
            propertyIsEnumerable: Ζ propertyIsEnumerable(),
            toLocaleString: Ζ toLocaleString(),
            toString: Ζ toString(),
            valueOf: Ζ valueOf()
        }
    }
}
```

doSomeInstancingμ __proto__μ __proto__μ __proto__λ μ‘΄μ¬ν  μ μλ€(window.Object.prototypeμ __proto__λ nullμ΄κΈ° λλ¬Έ).

```javascript
function doSomething(){}
doSomething.prototype.foo = "bar";
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value";
console.log("doSomeInstancing.prop:      " + doSomeInstancing.prop);
console.log("doSomeInstancing.foo:       " + doSomeInstancing.foo);
console.log("doSomething.prop:           " + doSomething.prop);
console.log("doSomething.foo:            " + doSomething.foo);
console.log("doSomething.prototype.prop: " + doSomething.prototype.prop);
console.log("doSomething.prototype.foo:  " + doSomething.prototype.foo);
```

κ²°κ³Ό :

```javascript
doSomeInstancing.prop:      some value
doSomeInstancing.foo:       bar
doSomething.prop:           undefined
doSomething.foo:            undefined
doSomething.prototype.prop: undefined
doSomething.prototype.foo:  bar
```

μ°Έκ³  : https://developer.mozilla.org/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

### π Remark