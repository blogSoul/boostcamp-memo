## 📕 Day  - BoostCamp

### 📘 HTTP/3와 왜 UDP에 관하여

HTTP/3는 HTTP(Hypertext Transfer Protocol)의 세 번째 메이저 버전으로, 기존의 HTTP/1, HTTP/2와는 다르게 UDP 기반의 프로토콜인 QUIC을 사용하여 통신하는 프로토콜입니다.

HTTP/3와 기존 HTTP 들과 가장 큰 차이점이라면 TCP가 아닌 UDP 기반의 통신을 한다는 것입니다.

HTTP/3는 QUIC이라는 프로토콜 위에서 돌아가는 HTTP인 것이다. QUIC은 Quick UDP Internet Connection의 약자로, 말 그대로 UDP를 사용하여 인터넷 연결을 하는 프로토콜입니다.

![image](https://user-images.githubusercontent.com/42922298/129216369-d9961dc1-81ad-43fd-b7db-3e868b0ecc60.png)

UDP의 진짜 장점은 바로 커스터마이징이 용이하다는 것이기 때문입니다.

### 🎞 Remark

HTTP/3는 왜 UDP를 선택한 것일까? :

https://evan-moon.github.io/2019/10/08/what-is-http3/