## 📕 Day 18 - BoostCamp

### 📘 표준 문법에 관하여

현재 SQL:2011을 기준으로 사용된다고 합니다. 

그리고 기능에 따라 3가지로 나눠진다고 합니다.

#### 📘 DDL(데이터 정의 언어)

1. CREATE

CREATE는 DB와 테이블을 생성하는 기능을 한다.

CREATE DATABASE[DB_NAME]; -> 데이터베이스를 생성한다

ex) CREATE DATABASE test_db;

CREATE TABLE[NAME] ([COLUMN_NAME][DATA_TYPE]);

ex) CREATE TABLE test_tb (name char(20), age int);

2. DROP

DROP은 DB와 테이블을 제거하는 기능을 한다.

DROP [DB/TB] [NAME];

ex) DROP TABLE test_tb;

DROP DATABASE database_name;

3. ALTER

ALTER는 테이블을 수정합니다.

UserTbl 테이블에서 UserAge 컬럼을 삭제 합니다.

ex) alter table UserTbl drop column UserAge

#### 📘  DML(데이터 조작 언어)

> SQL 인젝션과 연관이 깊습니다.

1. SELECT

SELECT는 데이터를 조회하는 기능을 한다

SELECT [COLUMN1] FROM [TABLE] WHERE [CONDITION];

ex) SELECT name, age FROM test_tb WHERE age = 20;

2. INSERT

INSERT는 데이터를 삽입하는 기능을 한다

INSERT INTO [TABLE_NAME]([COLUMN1]..) VALUES([DATA1],[DATA2]..);

ex) INSERT INTO [test_tb](name, age) VALUES('Hong Kil-Dong',20);

3. UPDATE

UPDATE는 데이터를 수정하는 기능을 한다

UPDATE[TABLE] SET[COLUMN1] = [DATA1] WHERE [CONDITION];

ex) UPDATE test_tb SET age = 35 WHERE name = 'Hong Kil-Dong';

4. DELETE

DELETE는 데이터를 제거하는 기능을 한다

DELETE FROM [TABLE] WHERE [CONDITION];

#### 📘  DCL(데이터 제어 언어)

1. GRANT

권한을 부여해줍니다.

2. REVOTE

권한을 주고, 제거하는 역할을 한다
 
### 📘 구현한 프로젝트와 실제 프로젝트의 차이에 대하여

제가 구현한 프로젝트는 fs라이브러리를 이용해서 작업을 하기 이전 모든 데이터를 읽고 데이터 처리가 이뤄진 후 다시 모든 데이터를 작성하는 방식으로 구현하였습니다.

다른 라이브러리도 찾아봤지만 update 기능이 구현된 라이브러리가 존재하지 않았습니다.

실제 데이터베이스는 기존 데이터는 유지하되 다른 작업이 이루어질 수 있도록 구축해두었습니다.

### 📘 트랜잭션(Transaction)에 대하여 

트랜잭션이란 '거래'라는 뜻으로 데이터베이스 내에서 하나의 그룹으로 처리되어야 하는 명령문들을 모아 놓은 논리적인 작업 단위입니다.

데이터베이스 응용 프로그램은 트랜잭션들의 집합으로 정의 할 수 있습니다.

여러 단계의 처리를 하나의 처리처럼 다루는 기능입니다.

여러 개의 명령어의 집합이 정상적으로 처리되면 정상 종료됩니다.

하나의 명령어라도 잘못되면 전체 취소됩니다.

트랜잭션을 쓰는 이유는 데이터의 일관성을 유지하면서 안정적으로 데이터를 복구하기 위함입니다.

* 구현을 하기 위해선...

실제 프로그램에서 구현하기 위해선 트랜젝션이 이루어지는 부분을 파일로 구분짓고 파일 안에서 모든 작업이 이루어지면 구현 가능할 것이라고 생각합니다.

### 📘 MySQL 이나 SQLite3 구현 방식에 대하여

MySQL은 관계형 데이터베이스 관리 시스템(RDBMS)으로, 데이터베이스를 관리하거나 자료를 관리하기 위한 GUI 관리툴은 내장되어 있지 않습니다.

SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine.

두 시스템은 각자 장단점이 존재합니다.

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

### 📘 JOIN에 대하여

![image](https://user-images.githubusercontent.com/42922298/129051110-82fb4c41-3d17-4712-b2df-e66f0939978f.png)

위 표에 보이듯이 내가 원하는 집합의 범위를 구할 수 있는 sql문입니다.

제가 만들 프로젝트는 작업을 하기 전 모든 데이터를 읽어 json객체로 만드므로 json객체로 처리하면 충분히 join문을 구현할 수 있다고 생각합니다.

### 🎞 Remark