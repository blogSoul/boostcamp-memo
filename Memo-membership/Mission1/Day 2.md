## ๐ Day 2 - BoostCamp

### ๐ ๋ฐ์ผ๋ฆฌ ์คํฌ๋ผ

์คํด์ : 

1. header ๊ธธ์ด๊ฐ ๊ณ ์ ๋๊ฒ ๋ง๋ค์ด์ ์ด์ํ์ต๋๋ค.

header๊ฐ 844px ๋ฏธ๋ง์ด๋ฉด ๊ณ ์ ๋๊ฒ ๋ง๋ค์์ต๋๋ค.

2. ๋ ์ง์ ๋ํ ๊ณ ๋ฏผ

์ ์ญ ๋ณ์ date๋ฅผ ๋ง๋ค๊ณ  ์๋ฒ์ ๋์ง ์์ 

์ ์ ํ

1. html => pug

์ฌ์ดํธ ์ฝ๋

2. ์ฝ๋ ์ค๋ณต์ ์ด๋ป๊ฒ 

extends, include

3. ๋ ์ง์ ๋ํ ์ํ 

๋์ค์ ๊ณ ๋ คํ๋๊ฑธ๋ก

๊ถ์๊ธฐ

1. ์ฝ๋ ์ค๋ณต์ ์ด๋ป๊ฒ

extends๋ก layout์ ๋ง๋ค์์ต๋๋ค. 

2. ๋ช์ธ์์ ์๋ ์์ด์ฝ์ ์ด๋?

figma ํ์ธํ๊ธฐ <- ์ฌ๊ธฐ์ ๋ค ์์ต๋๋ค.

### ๐ ์ค๋ ๋ชฉํ

1. create, read

2. redis ์ฌ์ฉํ๊ธฐ 

3. ๋ช์ธ์๋ถํฐ 

### ๐ console์ ๊ดํ์ฌ

The console module provides a simple debugging console that is similar to the JavaScript console mechanism provided by web browsers.

Warning: The global console object's methods are neither consistently synchronous like the browser APIs they resemble, nor are they consistently asynchronous like all other Node.js streams. See the note on process I/O for more information.

TTY(teletypewriter) ํญ๋ชฉ์ ๋ฆฌ๋์ค ๋๋ฐ์ด์ค ๋๋ผ์ด๋ธ์ค์์ ์ฝ์์ด๋ ํฐ๋ฏธ๋์ ์๋ฏธํฉ๋๋ค.

`console.time([label])`๋ก ์๊ฐ ์ธก์  ๊ฐ๋ฅ

`console.trace([message][, ...args])`๋ก ๋๋ฒ๊น์ด ๊ฐ๋ฅํฉ๋๋ค.

### ๐ DNS ์๋ฒ์ ๊ดํ์ฌ

> https://howdns.works/

DNS ๋๋ Domain Name System์ ์ฌ๋์ด ์ฝ์ ์ ์๋ ๋๋ฉ์ธ ์ด๋ฆ(์: www.amazon.com)์ ๋จธ์ ์ด ์ฝ์ ์ ์๋ IP ์ฃผ์(์: 192.0.2.44)๋ก ๋ณํํฉ๋๋ค.

### ๐ URL์ ๋ํ์ฌ

URL: Uniform Resource Locator

์คํด:์ฌ์ฉ์์ด๋ฆ:๋น๋ฒ@ํธ์คํธ:ํฌํธ/๊ฒฝ๋ก;ํจ๋ฌ๋ฏธํฐ?์ฟผ๋ฆฌ#ํ๋๊ทธ๋จผํธ

* ํฌ๋งท 

MIME (Multipurpose Internel Mail Extensions) ํ์์ผ๋ก ํ์ผ์ ํฌ๋งท์ ๋ถ๋ฅํฉ๋๋ค.

> ์ฐธ๊ณ  ์ฌ์ดํธ : https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types

### ๐ Tim Berners-Lee ยท TED2009์ ๊ดํ์ฌ

> https://www.ted.com/talks/tim_berners_lee_the_next_web?language=ko

์๋  ์น์ ๋ฌธ์ ์ค์ฌ์ผ๋ก ์ฝ๋๋ค

ํ์ฌ ์น์ ๋ฐ์ดํฐ ์ค์ฌ์ผ๋ก ์ฝ๋๋ค

hans rosling ๊ฐ์ ์ถ์ฒ

๋ฐ์ดํฐ์ ์์ด ์ค์ํฉ๋๋ค.

* Linked Data๋? 

1. http๋ก ์์ํ๋ ์ฃผ์๊ฐ ์์ต๋๋ค,.

2. ์ ๋ณด๊ฐ ํ๋กํ ์ฝ์ ๋ฐ๋ผ ์ ํด์ง๋๋ค. ๋ด๊ฐ ์ค์ํ ์ ๋ณด๋ฅผ ์ป์ด ์จ๋ค๋ ๊ฒ์๋๋ค.

3. ์ฐ๋ฆฌ๊ฐ ๊ทธ ์ ๋ณด๋ฅผ ์ป์ด์ฌ ๋, ์ ๋ณด๋ค ์ฌ์ด์ ๊ด๊ณ๋ ๊ฐ์ง๊ณ  ์จ๋ค๋ ๊ฒ์๋๋ค.

๋ฐ์ดํฐ๋ "๊ด๊ณ"์๋๋ค.

linked data standard

๋ฐ์ดํฐ hugging์ ๋ง๋ญ๋๋ค.

๊ฐ๊ณต๋์ง ์์ ๋ฐ์ดํฐ๋ฅผ ์ํฉ๋๋ค. (Raw Data Now)

* ์น์ 4์์

1. html

2. URL, URI

3. web browser, web server

4. http(HyperText Transfer Protocol)

### ๐ nth-child(n)์ nth-of-type(n)์ ์ฐจ์ด

nth-child(n) : ๋ถ๋ชจ ์๋ฆฌ๋จผํธ์ ๋ชจ๋  ์์ ์๋ฆฌ๋จผํธ์ค n๋ฒ์งธ

nth-of-type(n) : ๋ถ๋ชจ ์๋ฆฌ๋จผํธ์ ํน์  ์์ ์๋ฆฌ๋จผํธ์ค n๋ฒ์งธ

### ๐ Remark
