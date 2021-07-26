## 📕 Day 2 - BoostCamp

리눅스 : 오픈 소스 무료 OS

유닉스 : 인터넷 서버, 워크 스테이션 그리고 Solaris, Intel 등에 쓰이는 OS

shell : 리눅스의 shell은 명령어와 프로그램을 실행할 때 사용하는 인터페이스

여러 종류가 있지만 현재 bash가 많이 사용됨. zsh도 추천 많이 함

### 📘 shell 명령어 

pwd : 현재 디렉토리 확인

ls : 디렉토리 내용 확인

tree : 현 파일의 부모 디렉토리 확인

mkdir : 새로운 디렉토리 생성

touch : 파일 생성 (0 바이트)

cd : 디렉터리 변경

cat : 파일 내용 표시

history : 명령어 이력 확인

cp : 파일 복사

mv : 파일 이동

rm : 파일 삭제

### 📘 가상머신에 ubuntu 설치

virtualBox를 사용했지만, 몇가지 주의사항이 있습니다.

1. 해당 컴퓨터에 virtual 환경을 만들 수 있는지 확인(=bios 설정 확인)

2. 너무 많은 메모리 할당 주의

3. iso 파일 준비

가상환경을 만든 후 서버를 구축하면 훨씬 좋은 퍼포먼스를 지닐 수 있습니다.

많은 서버들이 리눅스 체계로 운영되고 있으며, 훨씬 더 좋은 퍼포먼스를 제공합니다.

예시는 트래픽이 많은 모든 대기업들은 리눅스를 사용한다고 해도 무관합니다.

ssh(Secure SHell, SSH) : 네트워크 상의 다른 컴퓨터이 접속하거나 원격시스템에서 명령어를 사용하고 다른 시스템으로 파일 이동도 할 수 있게 해주는 프로그램 or 프로토콜

### 📘 공개키 암호키 방식에 대하여

![20210721_094310](https://user-images.githubusercontent.com/42922298/126412781-89a55628-0ae7-4424-a381-f358dda8dab7.png)

ssh-keygen로 키 생성이 가능합니다.

ssh-keygen -t rsa : -t로 암호화 타입을 정할 수 있고 rsa라는 암호 기법을 이용한다는 의미입니다. 

cat id_rsa.pub <- Public 키(자물쇠)

* id_rsa <- Private 키(열쇠)

scp -P 5022 id_rsa.pub soul@localhost:/home/soul <- Public 키를 서버로 옮겨줍니다.

rename : id_rsa.pub -> authorized_keys : 내 열쇠에 맞는 자물쇠를 서버에 추가

서버 포트 및 ip로 접속!

망가지는 경우 : 

1. 해커 공격

2. key 분실 및 파일 분실

-> 그냥 이럴땐 다시 찾지말고 새롭게 만드는 것이 훨씬 좋습니다.

-> .ssh 폴더 관리만으로 충분히 접속 관리가 가능합니다.

### 🎞 Remark 
