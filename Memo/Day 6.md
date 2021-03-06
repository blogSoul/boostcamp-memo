## π Day 6 - BoostCamp 

### π tokenizer, lexer, parser μ κ΄νμ¬

![20210726_231148](https://user-images.githubusercontent.com/42922298/127003234-b0b9f427-75fd-4af9-b22d-e8aa0e5d4481.png)

μ μ¬μ§μ parserμ κ΅¬μ‘°λ₯Ό λ³΄μ¬μ€λλ€.

Parserλ Lexical analyze λμ΄ ν ν°νλ λ°μ΄ν°λ₯Ό κ°μ§κ³  κ·Έκ²μ κ΅¬μ‘°μ μΌλ‘ λνλΌ μ μκ² ν΄μ€λλ€.

μ°μ  html νμΌμ νλμ String λ³μλ‘ λ³νν΄μ€λλ€.

1. tokenizer : λ³ν λ°μ String λ³μλ₯Ό `<>`λ‘ λλμ΄μ€λλ€.

ν ν°μ `identifier` λ‘ νκ·Έ μ΄λ¦κ³Ό μμ±μ λμν΄μ€λλ€.

`literal`λ ν΄λΉ textλ‘ λ°μ μ μκ² ν΄μ€λλ€.

`comment`λ ν΄λΉ μ½λκ° μ΄λ€ νΉμ§μ κ°μ§κ³  μλμ§ μλ €μ€λλ€.

λ λ§μ΄ λλ μ μμ§λ§ μμ λ₯Ό μ€μ μΌλ‘ λ€λ£° κ²μ΄κΈ° λλ¬Έμ 3κ°μ§λ‘ λΆλ₯ν©λλ€.

2. lexer : tokenμΌλ‘ λλ λ°°μ΄μ μμ±μ λ§κ² λ³νν΄μ€λλ€.

μλμ κ°μ ννλ‘ λ§λ€μ΄μ€λλ€.

```javascript
[
    { type: 'comment', element: '!DOCTYPE html' },
    { type: 'identifier', element: 'HTML', attributes: [Array] },
    { type: 'identifier', element: 'BODY' },
    { type: 'identifier', element: 'P' },
    { type: 'literal', element: 'BOOST' }
}
```

3. parser : lexerλ‘ λ³νλ λ°μ΄ν°λ₯Ό ν΄λΉ html κ΅¬μ‘°μ λ§κ² λ³νν΄μ€λλ€.

ν΄λΉ νΈλ¦¬λ‘ λ§λ€λ €λ©΄ bfs, bfs λ±μ μ΄μ©ν΄μ μ°κ΄κ΄κ³λ₯Ό λνλ΄μ£Όμ΄μΌ ν©λλ€.

### π μΉ λΈλΌμ°μ  DOM νμμ κ΄νμ¬

![20210726_233013](https://user-images.githubusercontent.com/42922298/127006273-de612d48-26f8-4f94-bee3-7b96b774445a.png)

λΈλΌμ°μ λ? μ¬μ©μμ μμ²­μΌλ‘ λ³΄κ³  μΆμ νμ΄μ§λ₯Ό μλ²μ μμ²­νκ³  μλ²λ‘λΆν° λ°μ μλ΅(html, css, javascript, img λ±) μ λΈλΌμ°μ μ νμνλ κΈ°λ₯μ νλ νλ‘κ·Έλ¨μλλ€.

λ λλ§ μμ§μ΄λ? μμ²­ λ°μ λ΄μ©μ λΈλΌμ°μ  νλ©΄μ νμνλ μΌμ ν©λλ€.

Ex) ν¬λ‘¬, μ¬νλ¦¬μμ μ¬μ©νλ Webkit

javascriptλ μλ°μ€ν¬λ¦½νΈ μμ§μμ μ²λ¦¬νκ³  html, cssλ λ λλ§ μμ§μμ μ²λ¦¬ν©λλ€.

![20210726_234813](https://user-images.githubusercontent.com/42922298/127009326-0fa07a25-be10-4cbc-9742-eac759675279.png)

html, css νμΌμ λ λλ§ μμ§μ html νμμ css νμμ μν΄ parsingλμ΄ DOM, CSSOM νΈλ¦¬λ‘ λ³ννκ³  λ λ νΈλ¦¬λ‘ κ²°ν©λ©λλ€.

κ²°ν©λ λ λ νΈλ¦¬λ₯Ό κΈ°λ°μΌλ‘ λ λ νΈλ¦¬ λ°°μΉ(layout), λ λ νΈλ¦¬ κ·Έλ¦¬κΈ°(paint)λ₯Ό κ±°μ³ λΈλΌμ°μ λ μΉνμ΄μ§λ₯Ό νμν©λλ€.

DOM (Document Object Model) μ΄λ?HTML tagλ₯Ό javasscriptμμ μ΄μ©ν  μ μλ κ°μ²΄λ‘ λ§λλ HTML λ¬Έμμ κ°μ²΄ κΈ°λ° νν λ°©μμλλ€.

html parserλ script tagλ₯Ό λ§λλ©΄ μλ°μ€ν¬λ¦½νΈ μ½λλ₯Ό μ€ννκΈ° μν΄ DOM μμ± νλ‘μΈμ€λ₯Ό μ€μ§νκ³  μλ°μ€ν¬λ¦½νΈ μμ§μΌλ‘ μ μ΄ κΆνμ λκΉλλ€.

λ€μ λ¨κ³λ‘ μλ°μ€ν¬λ¦½νΈ μμ§μ script νκ·Έ λ΄μ javascript code νΉμ scriptμ src attributeμ μ μλ js νμΌμ loadνκ³  parse/κΈ°κ³μ΄λ‘ μ»΄νμΌνμ¬ μ€νν©λλ€.

> body μμμ κ°μ₯ μλμ script νκ·Έλ₯Ό μμΉν΄μΌ μλ¬λ₯Ό λ λ°μνλ λ°©λ²μλλ€.

### π well-formed XML νμ κ²μ¦μ κ΄νμ¬

well-formed XML λ¬Έμ : XML λ¬Έμλ‘μ κ°μ ΈμΌ νλ μ΅μνμ νμ μκ±΄μ μΆ©μ‘±ν XML λ¬Έμ

* νμ μ‘°κ±΄ :

1. λ£¨νΈ(root) μμλ₯Ό νλλ§ κ°μ ΈμΌ ν©λλ€.

2. λͺ¨λ  XML μμλ μ’λ£ νκ·Έλ₯Ό κ°μ ΈμΌ ν©λλ€.

3. μμ νκ·Έμ μ’λ£ νκ·Έμ μ¬μ©λ νκ·Έ μ΄λ¦μ΄ λμλ¬ΈμκΉμ§ μλ²½νκ² μΌμΉν΄μΌ ν©λλ€.

4. λͺ¨λ  XML μμμ μ¬λ«λ μμκ° λ°λμ μ ννκ² μ§μΌμ ΈμΌ ν©λλ€.

5. λͺ¨λ  μμ±μ μμ±κ°μ΄ λ°μ΄νλ‘ λλ¬μΈμ¬ μμ΄μΌ ν©λλ€.

valid XML λ¬Έμ : well-formed XML λ¬Έμ + DTD(document type definition) or XSD(XML Schema Definition)

DTD(document type definition) : μΌλ°μ μΈ λ¬Έμ νμ μ μ(document type definition)

κ·μΉμ μ μ§ν€λ©΄ μ»΄νμΌ μ€λ₯κ° μκΉλλ€.

### π XPathμ κ΄νμ¬

XPath(=XML Path Language)λ W3Cμ νμ€μΌλ‘ νμ₯ μμ± μΈμ΄ λ¬Έμμ κ΅¬μ‘°λ₯Ό ν΅ν΄ κ²½λ‘ μμ μ§μ ν κ΅¬λ¬Έμ μ¬μ©νμ¬ ν­λͺ©μ λ°°μΉνκ³  μ²λ¦¬νλ λ°©λ²μ κΈ°μ νλ μΈμ΄μλλ€.

μ°Έκ³  νμ΄μ§ : https://loco-motive.tistory.com/26

XPathμμ μμ μ΄λ¦μ λͺμνμ§ μμΌλ©΄ μλ¬΄ undefinedλ₯Ό λ°νν©λλ€. 

### π Remark
