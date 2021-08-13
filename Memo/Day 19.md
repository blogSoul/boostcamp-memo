## 📕 Day  - BoostCamp

### 📘 HTTP Request 종류와 HTTP Response 종류에 대하여

* HTTP Request 종류

![image](https://user-images.githubusercontent.com/42922298/129288810-5880cac2-d770-4bad-9567-c88ac0de4480.png)
![image](https://user-images.githubusercontent.com/42922298/129288826-19d9f606-8c9e-45ee-b771-fa9ed2341b91.png)
![image](https://user-images.githubusercontent.com/42922298/129288841-86e516b4-7570-47ac-8d06-aa751dcbdc74.png)
![image](https://user-images.githubusercontent.com/42922298/129288855-d38b993f-4d6e-41ce-81fb-644cc44ce818.png)
![image](https://user-images.githubusercontent.com/42922298/129288877-d60b010e-02f2-4370-88b8-d39035b255c4.png)

* HTTP Response

![image](https://user-images.githubusercontent.com/42922298/129288913-2b0bf9ea-d6ff-4a55-8cb2-8f205a081b3e.png)

### 📘 운영체제에서 HTTP Proxy를 설정하고 웹 브라우저가 어떻게 동작하는지에 대하여

![image](https://user-images.githubusercontent.com/42922298/129289046-a503e87c-8d7c-4af7-bdd1-1851dbeec288.png)
![image](https://user-images.githubusercontent.com/42922298/129289103-adcd0329-e48f-4a03-8a11-02f123d46b4c.png)
![image](https://user-images.githubusercontent.com/42922298/129289115-e7891c5a-0d69-402a-b67d-3560505f3b69.png)

프록시 서버의 주된 역할은, 웹 서비스 프로그램(이하 웹 서버)의 로드 감소

* 포워드 프록시 

컴퓨터 공학 전반에에 깔려있는 캡슐화(상세 처리 과정을 숨기는 것)를 바탕으로,  클라이언트는 서비스의 보이는 전면(Front)과 실제 서버를 수행하는 뒷면(Back)으로 구분하여 Front-end와 Back-end로 구분한다.

![image](https://user-images.githubusercontent.com/42922298/129289956-b8078f6c-dcf1-4e1d-b77e-20c9d280c8a7.png)

전면(Front)으로 데이터를 밀어내는 역할을 수행하므로 Forward Proxy라고 한다. 일반적으로 말하는 프록시(Proxy)는 포워드 프록시(Forward Proxy)를 말합니다.

* 리버스 프록시

![image](https://user-images.githubusercontent.com/42922298/129290354-050fd02a-6d11-434b-8e9d-74ac3eb8c9fd.png)

Reverse Proxy를 이용하게 되면, 하나의 프록시로 다수의 서버(동일한 서비스이든지, 다른 서비스이든지 상관없음) 요청을 처리할 수 있다. 따라서 몇가지 잇점이 생기는데, 그중 라이트 유저에게 가장 큰 장점은 1개의 IP로 다수의 웹 서비스를 수행할 수 있다는 점입니다. 

이러한 프록시 기능은 대다수의 HTTP 프레임워크에서 제공합니다.

### 📘 리눅스 또는 CLI 환경에서 wget 이나 curl 명령 사용법에 대하여

> wget 과 curl 은 둘 다 웹 서버로부터 컨텐츠를 가져오는 Linux 명령어입니다.

`curl [options] <url>`

curl은 네트워크 프로토콜(HTTP, HTTPS, FTP, LDAP, SCP, TELNET, SMTP, POP3등) 을 사용하여 데이터를 전송하기 위한 command line 명령어 입니다.

![image](https://user-images.githubusercontent.com/42922298/129291136-1501715e-02c4-496a-8002-acdff0e443e6.png)

* wget

간단하고 직관적입니다.

별도의 라이브러리를 지원하지 않습니다.

재귀적으로 다운로드합니다. (즉, 페이지에 있는 모든 내용이나 FTP 디렉터리에 있는 모든 파일들을 한 번에 그대로 복사해 옵니다.)

curl 에 비하여 더 오래되었습니다.

GNU 프로젝트입니다.

* curl

libcurl 라이브러리로 더 강력한 기능들을 추가/사용할 수 있습니다.

stdin 또는 stdout 의 pipe 를 이용하는 전통적인 unix 스타일의 방식도 지원합니다.

LDAP 이나 Samba 공유도 지원합니다.

양방향입니다. (wget 은 일반 HTTP POST request 만 지원합니다.)

SSL 을 지원합니다.

gzip 압축 및 해지를 지원합니다.

MIT 라이센스입니다.

### 📘 HTTP/2 규격과 HTTP/3 규격에 관하여

HTTP/3는 HTTP(Hypertext Transfer Protocol)의 세 번째 메이저 버전으로, 기존의 HTTP/1, HTTP/2와는 다르게 UDP 기반의 프로토콜인 QUIC을 사용하여 통신하는 프로토콜입니다.

HTTP/3와 기존 HTTP 들과 가장 큰 차이점이라면 TCP가 아닌 UDP 기반의 통신을 한다는 것입니다.

HTTP/3는 QUIC이라는 프로토콜 위에서 돌아가는 HTTP인 것이다. QUIC은 Quick UDP Internet Connection의 약자로, 말 그대로 UDP를 사용하여 인터넷 연결을 하는 프로토콜입니다.

![image](https://user-images.githubusercontent.com/42922298/129216369-d9961dc1-81ad-43fd-b7db-3e868b0ecc60.png)

UDP의 진짜 장점은 바로 커스터마이징이 용이하다는 것이기 때문입니다.

### 📘 WireShark에 대해서 

![image](https://user-images.githubusercontent.com/42922298/129287503-ec6fa065-f3f3-4bee-b48c-b6085115e56f.png)
![image](https://user-images.githubusercontent.com/42922298/129287632-22a6c9e2-83cd-4792-b673-05e15068120b.png)

같은 네트워크 구간의 Noel과 Susan은 이메일이나 메신저 등을 통해 대화를 주고받는다.

여기에서 Wireshark를 사용하는 제3자는 이 둘 사이의 네트워크로 돌아다니는 패킷( 네트워크상의 데이터 )을 수신하여 저장한다.

이때, PCAP이라는 파일 포맷으로 저장된다.

PCAP 은 Packet Capture의 약자로 네트워크 트래픽을 캡처하는 API구성이다.

Wireshark는 자체 프로그램으로 네트워크 트래픽을 캡처하는 것이 아니고, 운영체제에서 지원하는 캡처 라이브러리를 이용하여 수집한다.

유닉스 : libpcap

윈도우 : Winpcap

### 📘 프록시 서버에 관하여

프록시 서버(영어: proxy server 프록시 서버[*])는 클라이언트가 자신을 통해서 다른 네트워크 서비스에 간접적으로 접속할 수 있게 해 주는 컴퓨터 시스템이나 응용 프로그램을 가리킨다.

참고 사이트 : https://www.youtube.com/watch?v=5cPIukqXe5w

### 🎞 Remark

HTTP/3는 왜 UDP를 선택한 것일까? :

https://evan-moon.github.io/2019/10/08/what-is-http3/

http 확인 사이트 : 

http://httpbin.org/

Perform a POST Request :

https://nodejs.dev/learn/making-http-requests-with-nodejs

트랜잭션에 대한 사이트 :

https://nodejs.org/ko/docs/guides/anatomy-of-an-http-transaction/

Transfer-Encoding :

https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Transfer-Encoding

HTTP의 진화 :

https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP

### 🎞 회의록
