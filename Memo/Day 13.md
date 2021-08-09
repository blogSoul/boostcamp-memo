## 📕 Day 13 - BoostCamp

### 📘 OSI 7계층에 관하여

ISO에서 개발한 모델로서 네트워크 프로토콜 디자인과 통신을 계층으로 나뉘 설명한 것입니다.

![image](https://user-images.githubusercontent.com/42922298/128276969-d391b0b4-6aa3-48f7-a737-f34e3041c7f5.png)

#### 📘 PDU(Protocol data unit)

PDU(Protocol data unit) : 각 계층별로 packet을 부르는 용어라고 생각.

application layer : message

transport layer : segment

network layer : datagram

link layer : frame

송신자의 각각의 layer에서는 header를 씌웁니다. (disassemble, encapsulation)

수신자의 각각의 layer에서는 자신의 맞는 header의 벗김. (assemble, decapsulation)

Sockets : Application에서 transport layer로 message를 주는 창구
#### 📘 물리 계층(Physical Layer)

물리 계층은 말 그대로 하드웨어 전송 기술로 이루어져 있다.

전기적인, 기계적인 신호를 주고받는 역할을하는 계층이다. 비트 0, 1의 통신단위로 통신한다.

#### 📘 데이터 링크 계층(Data Link Layer)

데이터링크 계층은 Point to Point 간의 신뢰성 있는 전송을 보장하기 위한 계층이다.

전송 데이터에 대한 CRC 오류제어가 필요하다.

#### 📘 네트워크 계층(Network Layer)

네트워크 계층은 우리가 흔히 아는 IP주소를 제공하는 계층이다.

이 IP주소 또한 계층적으로 A,B,C,D클래스로 나누어져 있지만 자세히 다루진 않겠다.

네트워크 계층에서는 대표적으로 노드들을 거칠때마다 라우팅 해주는 역할을 담당합니다.

#### 📘 전송 계층(Transport Layer)

전송계층의 경우 양 끝단(End to End)의 사용자들이 데이터를 주고 받을 수 있게 하는 계층이다.

대표적으로 우리가 자주 사용하는 TCP, UDP 프로토콜이 있는 계층이다.

TCP는 연결시 3-way hanshaking 방식으로 목적지와 상호 패킷을 교환하여 연결한다. 연결을 종료할 때는 4-way hanshaking 방식을 사용한다.

UDP 프로토콜의 경우 비연결형 프로토콜로서 데이터를 빠르게 전달하는데에 초점을 두고 있다. 따라서 UDP는 목적지에 데이터가 제대로 전달 되었는지 조차 확인하지 않는다. 그냥 전송하면 끝인 것이다. 이렇게만 말하면 이걸 왜쓰냐라고 할 수 있는데 비연결을 지향하고 데이터를 전달할 때 TCP에 비해 오버헤드가 적다. 그래서 신뢰성 있는 데이터 전송이 필요할 때보다 스트리밍같이 연속적인 특성을 가지고 있는 서비스에 사용한다.

전송 단위는 Segment이다.

#### 📘 세션 계층(Session Layer)

세션 계층부터 데이터를 만들어내는 계층이다.

양 끝단의 응용 프로세스가 통신을 관리하기 위한 방법을 제공한다.

#### 📘 표현 계층(Presentation Layer)

표현 계층은 코드 간의 번역을 담당하여 사용자 시스템에서 데이터의 형식상 차이를 다루는 부담을 응용 계층으로부터 덜어 준다.

#### 📘 응용 계층(Application Layer)

응용 계층은 응용 프로세스와 직접 관계하여 일반적인 응용 서비스를 수행한다.

한마디로 우리가 사용하는 사용자 인터페이스를 제공하는 프로그램 등을 말하는 것이다.

대표적으로 우리가 잘 알고있는 HTTP, FTP 등의 프로토콜이 응용 계층에 속한다.

#### 📘 왜 나눴는가?

각자 서로 다르게 네트워크를 사용해서 하나의 규약이 필요한 상황에 놓여 ISO에서 직접 규칙을 지정한 것입니다.

#### 📘 TCP 3-way Handshake 란?

TCP는 장치들 사이에 논리적인 접속을 성립(establish)하기 위하여 three-way handshake를 사용한다.

TCP 3 Way Handshake는 TCP/IP프로토콜을 이용해서 통신을 하는 응용프로그램이 데이터를 전송하기 전에

먼저 정확한 전송을 보장하기 위해 상대방 컴퓨터와 사전에 세션을 수립하는 과정을 의미한다..

* Client > Server : TCP SYN

* Server > Client : TCP SYN ACK

* Client > Server : TCP ACK

여기서 SYN은 'synchronize sequence numbers', 그리고 ACK는'acknowledgment' 의 약자이다.

이러한 절차는 TCP 접속을 성공적으로 성립하기 위하여 반드시 필요하다.

> 프로토콜 : 사람간의 대화에서 같은 언어를 이용해 의사소통 하듯 네트워크 상에서 데이터를 주고받기 위해서 일종의 정해진 규약 

### 📘 4-way 핸드쉐이크 방식

4-Way handshake는 세션을 종료하기 위해 수행되는 절차입니다.

![image](https://user-images.githubusercontent.com/42922298/128277210-5ef737ef-9550-4cbe-90ba-b0ef93f8d27e.png)

![image](https://user-images.githubusercontent.com/42922298/128277187-0866fd7b-305a-4e81-ad64-7a6398400694.png)

1. 클라이언트가 연결을 종료하겠다는 FIN플래그를 전송한다. 이때 A클라이언트는  FIN-WAIT 상태가 된다.

2. B서버는 FIN플래그를 받고, 일단 확인메시지 ACK 보내고 자신의 통신이 끝날때까지 기다리는데 이 상태가 B서버의 CLOSE_WAIT상태다.

3. 연결을 종료할 준비가 되면, 연결해지를 위한 준비가 되었음을 알리기 위해  클라이언트에게 FIN플래그를 전송한다. 이때 B서버의 상태는 LAST-ACK이다.

4. 클라이언트는 해지준비가 되었다는 ACK를 확인했다는 메시지를 보낸다.

5. A클라이언트의 상태가 FIN-WAIT ->TIME-WAIT 으로 변경된다.

### 📘 TCP vs UDP

TCP(Transmission Control Protocol): 인터넷상에서 데이터를 메세지의 형태로 보내기 위해 IP와 함께 사용하는 프로토콜

* TCP 특징

1. 연결형 서비스로 가상 회선 방식을 제공한다.

2. 3-way handshaking과정을 통해 연결을 설정하고 4-way handshaking을 통해 해제한다.

3. 흐름 제어 및 혼잡 제어.

4. 높은 신뢰성을 보장한다.

5. UDP보다 속도가 느리다.

6. 전이중(Full-Duplex), 점대점(Point to Point) 방식.

서버소켓은 연결만을 담당한다.

연결과정에서 반환된 클라이언트 소켓은 데이터의 송수신에 사용된다형 서비스로 가상 회선 방식을 제공한다.

서버와 클라이언트는 1대1로 연결된다.

스트림 전송으로 전송 데이터의 크기가 무제한이다.

패킷에 대한 응답을 해야하기 때문에(시간 지연, CPU 소모) 성능이 낮다.

Streaming 서비스에 불리하다.(손실된 경우 재전송 요청을 하므로)

UDP(User Datagram Protocol) :  데이터를 데이터그램 단위로 처리하는 프로토콜

* UDP 특징

1. 비연결형 서비스로 데이터그램 방식을 제공한다

2. 정보를 주고 받을 때 정보를 보내거나 받는다는 신호절차를 거치지 않는다.

3. UDP헤더의 CheckSum 필드를 통해 최소한의 오류만 검출한다.

4. 신뢰성이 낮다

5. TCP보다 속도가 빠르다

* 패킷(Packet)이란?

인터넷 내에서 데이터를 보내기 위한 경로배정(라우팅)을 효율적으로 하기 위해서 데이터를 여러 개의 조각들로 나누어 전송을 하는데 이때, 이 조각을 패킷이라고 합니다.

![image](https://user-images.githubusercontent.com/42922298/128277839-973c9369-442f-48a2-858f-8a7b529898b0.png)

UDP에는 연결 자체가 없어서(connect 함수 불필요) 서버 소켓과 클라이언트 소켓의 구분이 없다.

소켓 대신 IP를 기반으로 데이터를 전송한다.

서버와 클라이언트는 1대1, 1대N, N대M 등으로 연결될 수 있다.

데이터그램(메세지) 단위로 전송되며 그 크기는 65535바이트로, 크기가 초과하면 잘라서 보낸다.

흐름제어(flow control)가 없어서 패킷이 제대로 전송되었는지, 오류가 없는지 확인할 수 없다.

파일 전송과 같은 신뢰성이 필요한 서비스보다 성능이 중요시 되는 경우에 사용된다.

UDP로 짜면 비동기로 짜야 할거 같습니다!

### 📘 실제 TCP와 제 프로젝트의 차이

![20210809_104419](https://user-images.githubusercontent.com/42922298/128652948-1543cbf7-adc3-4ccb-81ec-832163179e73.png)

실제 네트워크 구조는 패키지 구성이 훨씬 구조적으로 잘짜여져 있습니다. 제가 만든 프로젝트처럼 제한 용량이 자유로운 객체로 이루어져 있지 않습니다.

실제 패킷은 메모리 제한이 있고 헤더가 있어 속성에 맞게 적용시켜줘야 합니다.

### 📘 IP

IP : internet Protocool

![20210805_111931](https://user-images.githubusercontent.com/42922298/128403855-6ed00779-bb46-4c5e-bac7-15a33903935f.png)

\r\n는 무슨 의미인가?

![20210805_114933](https://user-images.githubusercontent.com/42922298/128403861-92bf4718-922d-4dbf-8b89-ae47986734ca.png)

### 📘 PORT에 관하여 

인터넷 프로토콜 스위트에서 포트(port)는 운영 체제 통신의 종단점입니다. 

이 용어는 하드웨어 장치에도 사용되지만, 소프트웨어에서는 네트워크 서비스나 특정 프로세스를 식별하는 논리 단위입니다.

PORT가 같으면 응용 프로그램은 같을 것입니다. 

PORT가 다르면 당연히 다른 응용프로그램일 것이고 서로 다른 종단점이기 때문에 같은 응용 프로그램일 수 없습니다.

### 🎞 Site

표준 규약 사이트 : 

https://datatracker.ietf.org/doc/html/rfc793#page-30

data/ask 이동 규약은 어떻게 짜는가?

https://unabated.tistory.com/entry/TCP-%EC%8B%A0%EB%A2%B0%EC%A0%81%EC%9D%B8-%EC%A0%84%EC%86%A1-5-TCP%EB%8A%94-%EC%8B%A4%EC%A0%9C-Sequence-number%EC%99%80-Ack-number-field%EC%97%90-%EB%AC%B4%EC%97%87%EC%9D%84-%EC%B1%84%EC%9A%B0%EB%8A%94%EA%B0%80

개발자 지망생을 위한 주관적 추천도서:

https://kumo.notion.site/44da2a336b864d35bd642bc62a300708

### 🎞 Remark

JSON.parse(myJSONString); : string to Oject

uuid, readline-sync : 해당 패키지 확인하기

4-Way handshake는 half close 기법을 사용합니다.

종료할 때, 값에 대한 처리만 종료합니다.

데이터 링크 계층

Port는 하나의 IP에서 여러 프로그램들이 실행되고 통신할 수 있습니다.

parseInt(~~, 16) 16진수로 바꿉니다.

인터넷상에서 컴퓨터를 구분하기 위해서 port를 사용합니다.

TCP 헤드은 체크섬이 없습니다.

rfc 4122 규격 : uuid ,

uuid : 고유 범용

MSS :

layer 1,2는 하드웨어로 이용됩니다.
