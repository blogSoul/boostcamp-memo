## ๐ Day 18 - BoostCamp

### ๐ ํ์ค ๋ฌธ๋ฒ์ ๊ดํ์ฌ

ํ์ฌ SQL:2011์ ๊ธฐ์ค์ผ๋ก ์ฌ์ฉ๋๋ค๊ณ  ํฉ๋๋ค. 

๊ทธ๋ฆฌ๊ณ  ๊ธฐ๋ฅ์ ๋ฐ๋ผ 3๊ฐ์ง๋ก ๋๋ ์ง๋ค๊ณ  ํฉ๋๋ค.

#### ๐ DDL(๋ฐ์ดํฐ ์ ์ ์ธ์ด)

1. CREATE

CREATE๋ DB์ ํ์ด๋ธ์ ์์ฑํ๋ ๊ธฐ๋ฅ์ ํ๋ค.

CREATE DATABASE[DB_NAME]; -> ๋ฐ์ดํฐ๋ฒ ์ด์ค๋ฅผ ์์ฑํ๋ค

ex) CREATE DATABASE test_db;

CREATE TABLE[NAME] ([COLUMN_NAME][DATA_TYPE]);

ex) CREATE TABLE test_tb (name char(20), age int);

2. DROP

DROP์ DB์ ํ์ด๋ธ์ ์ ๊ฑฐํ๋ ๊ธฐ๋ฅ์ ํ๋ค.

DROP [DB/TB] [NAME];

ex) DROP TABLE test_tb;

DROP DATABASE database_name;

3. ALTER

ALTER๋ ํ์ด๋ธ์ ์์ ํฉ๋๋ค.

UserTbl ํ์ด๋ธ์์ UserAge ์ปฌ๋ผ์ ์ญ์  ํฉ๋๋ค.

ex) alter table UserTbl drop column UserAge

#### ๐  DML(๋ฐ์ดํฐ ์กฐ์ ์ธ์ด)

> SQL ์ธ์ ์๊ณผ ์ฐ๊ด์ด ๊น์ต๋๋ค.

1. SELECT

SELECT๋ ๋ฐ์ดํฐ๋ฅผ ์กฐํํ๋ ๊ธฐ๋ฅ์ ํ๋ค

SELECT [COLUMN1] FROM [TABLE] WHERE [CONDITION];

ex) SELECT name, age FROM test_tb WHERE age = 20;

2. INSERT

INSERT๋ ๋ฐ์ดํฐ๋ฅผ ์ฝ์ํ๋ ๊ธฐ๋ฅ์ ํ๋ค

INSERT INTO [TABLE_NAME]([COLUMN1]..) VALUES([DATA1],[DATA2]..);

ex) INSERT INTO [test_tb](name, age) VALUES('Hong Kil-Dong',20);

3. UPDATE

UPDATE๋ ๋ฐ์ดํฐ๋ฅผ ์์ ํ๋ ๊ธฐ๋ฅ์ ํ๋ค

UPDATE[TABLE] SET[COLUMN1] = [DATA1] WHERE [CONDITION];

ex) UPDATE test_tb SET age = 35 WHERE name = 'Hong Kil-Dong';

4. DELETE

DELETE๋ ๋ฐ์ดํฐ๋ฅผ ์ ๊ฑฐํ๋ ๊ธฐ๋ฅ์ ํ๋ค

DELETE FROM [TABLE] WHERE [CONDITION];

#### ๐  DCL(๋ฐ์ดํฐ ์ ์ด ์ธ์ด)

1. GRANT

๊ถํ์ ๋ถ์ฌํด์ค๋๋ค.

2. REVOTE

๊ถํ์ ์ฃผ๊ณ , ์ ๊ฑฐํ๋ ์ญํ ์ ํ๋ค
 
### ๐ ๊ตฌํํ ํ๋ก์ ํธ์ ์ค์  ํ๋ก์ ํธ์ ์ฐจ์ด์ ๋ํ์ฌ

์ ๊ฐ ๊ตฌํํ ํ๋ก์ ํธ๋ fs๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ด์ฉํด์ ์์์ ํ๊ธฐ ์ด์  ๋ชจ๋  ๋ฐ์ดํฐ๋ฅผ ์ฝ๊ณ  ๋ฐ์ดํฐ ์ฒ๋ฆฌ๊ฐ ์ด๋ค์ง ํ ๋ค์ ๋ชจ๋  ๋ฐ์ดํฐ๋ฅผ ์์ฑํ๋ ๋ฐฉ์์ผ๋ก ๊ตฌํํ์์ต๋๋ค.

๋ค๋ฅธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ ์ฐพ์๋ดค์ง๋ง update ๊ธฐ๋ฅ์ด ๊ตฌํ๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๊ฐ ์กด์ฌํ์ง ์์์ต๋๋ค.

์ค์  ๋ฐ์ดํฐ๋ฒ ์ด์ค๋ ๊ธฐ์กด ๋ฐ์ดํฐ๋ ์ ์งํ๋ ๋ค๋ฅธ ์์์ด ์ด๋ฃจ์ด์ง ์ ์๋๋ก ๊ตฌ์ถํด๋์์ต๋๋ค.

### ๐ ํธ๋์ญ์(Transaction)์ ๋ํ์ฌ 

ํธ๋์ญ์์ด๋ '๊ฑฐ๋'๋ผ๋ ๋ป์ผ๋ก ๋ฐ์ดํฐ๋ฒ ์ด์ค ๋ด์์ ํ๋์ ๊ทธ๋ฃน์ผ๋ก ์ฒ๋ฆฌ๋์ด์ผ ํ๋ ๋ช๋ น๋ฌธ๋ค์ ๋ชจ์ ๋์ ๋ผ๋ฆฌ์ ์ธ ์์ ๋จ์์๋๋ค.

๋ฐ์ดํฐ๋ฒ ์ด์ค ์์ฉ ํ๋ก๊ทธ๋จ์ ํธ๋์ญ์๋ค์ ์งํฉ์ผ๋ก ์ ์ ํ  ์ ์์ต๋๋ค.

์ฌ๋ฌ ๋จ๊ณ์ ์ฒ๋ฆฌ๋ฅผ ํ๋์ ์ฒ๋ฆฌ์ฒ๋ผ ๋ค๋ฃจ๋ ๊ธฐ๋ฅ์๋๋ค.

์ฌ๋ฌ ๊ฐ์ ๋ช๋ น์ด์ ์งํฉ์ด ์ ์์ ์ผ๋ก ์ฒ๋ฆฌ๋๋ฉด ์ ์ ์ข๋ฃ๋ฉ๋๋ค.

ํ๋์ ๋ช๋ น์ด๋ผ๋ ์๋ชป๋๋ฉด ์ ์ฒด ์ทจ์๋ฉ๋๋ค.

ํธ๋์ญ์์ ์ฐ๋ ์ด์ ๋ ๋ฐ์ดํฐ์ ์ผ๊ด์ฑ์ ์ ์งํ๋ฉด์ ์์ ์ ์ผ๋ก ๋ฐ์ดํฐ๋ฅผ ๋ณต๊ตฌํ๊ธฐ ์ํจ์๋๋ค.

* ๊ตฌํ์ ํ๊ธฐ ์ํด์ ...

์ค์  ํ๋ก๊ทธ๋จ์์ ๊ตฌํํ๊ธฐ ์ํด์  ํธ๋์ ์์ด ์ด๋ฃจ์ด์ง๋ ๋ถ๋ถ์ ํ์ผ๋ก ๊ตฌ๋ถ์ง๊ณ  ํ์ผ ์์์ ๋ชจ๋  ์์์ด ์ด๋ฃจ์ด์ง๋ฉด ๊ตฌํ ๊ฐ๋ฅํ  ๊ฒ์ด๋ผ๊ณ  ์๊ฐํฉ๋๋ค.

### ๐ MySQL ์ด๋ SQLite3 ๊ตฌํ ๋ฐฉ์์ ๋ํ์ฌ

MySQL์ ๊ด๊ณํ ๋ฐ์ดํฐ๋ฒ ์ด์ค ๊ด๋ฆฌ ์์คํ(RDBMS)์ผ๋ก, ๋ฐ์ดํฐ๋ฒ ์ด์ค๋ฅผ ๊ด๋ฆฌํ๊ฑฐ๋ ์๋ฃ๋ฅผ ๊ด๋ฆฌํ๊ธฐ ์ํ GUI ๊ด๋ฆฌํด์ ๋ด์ฅ๋์ด ์์ง ์์ต๋๋ค.

SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine.

๋ ์์คํ์ ๊ฐ์ ์ฅ๋จ์ ์ด ์กด์ฌํฉ๋๋ค.

1. MySQL

* The Good:

A galore of built-in security features

Capable to handle and manage high-traffic receiving websites

Feature rich

Robust user management ability

* The Bad:

Low portability

Reliability issues

Slow development

2. SQLite

* The Good:

High portability due to the file-based system

Ideal for development and testing

Serverless, requires no configuration and becomes much easier to set up

* The Bad:

No network access

Unsuitable for large-scale and scalable applications

User management is unavailable

### ๐ JOIN์ ๋ํ์ฌ

![image](https://user-images.githubusercontent.com/42922298/129051110-82fb4c41-3d17-4712-b2df-e66f0939978f.png)

์ ํ์ ๋ณด์ด๋ฏ์ด ๋ด๊ฐ ์ํ๋ ์งํฉ์ ๋ฒ์๋ฅผ ๊ตฌํ  ์ ์๋ sql๋ฌธ์๋๋ค.

์ ๊ฐ ๋ง๋ค ํ๋ก์ ํธ๋ ์์์ ํ๊ธฐ ์  ๋ชจ๋  ๋ฐ์ดํฐ๋ฅผ ์ฝ์ด json๊ฐ์ฒด๋ก ๋ง๋๋ฏ๋ก json๊ฐ์ฒด๋ก ์ฒ๋ฆฌํ๋ฉด ์ถฉ๋ถํ join๋ฌธ์ ๊ตฌํํ  ์ ์๋ค๊ณ  ์๊ฐํฉ๋๋ค.

### ๐ Remark

csv package ๋งํฌ :

https://www.npmjs.com/package/csv

https://csv.js.org/

csv-parser package ๋งํฌ :

https://www.npmjs.com/package/csv-parser

csv-writer package ๋งํฌ :

https://www.npmjs.com/package/csv-writer