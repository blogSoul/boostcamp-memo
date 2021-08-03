## 📕 Day 11 - BoostCamp

### 📘 프로세스에 관하여

![20210802_235226](https://user-images.githubusercontent.com/42922298/127881204-75da09dd-f524-423b-8f71-4a3e5c8ecffc.png)


프로세스(process) : 컴퓨터에서 연속적으로 실행되고 있는 컴퓨터 프로그램

스케줄링의 대상이 되는 작업(task)와 같은 의미로 얘기하기도 합니다.

디스크에 저장되어 있던 실행 가능한 프로그램이 메모리에 적재되어 운영체제가 관리하는 상태

* 스레드(Thread)

경량화 프로세스(=LWP)(Light Weight Process) : 프로세스에서 실행 제어만 분리해서 처리하는 단위로 한 프로세스 안에 있는 스레드들은 메모리 공유를 한다는 특징을 가지고 있습니다.

### 📘 폰 노이만 구조의 구조도

![20210802_233818](https://user-images.githubusercontent.com/42922298/127881207-ab262b0b-4407-41b0-b019-d5832a8c8792.png)

1. 하드웨어 전선을 재배치할 필요 없이 소프트웨어만 교체 가능

2. 병목현상 = 메모리에 명령어와 데이터가 함께 존재하는 것, 기억장소의 지연현상을 일컫는데 나열된 명령을 순차적으로 수행하고 그 명령은 일정한 기억장소의 값을 변경하는 작업

3. 문제점 : CPU의 비효율적인 활용과 메모리 버스 병목현상

### 📘 하버드 구조의 구조도

![20210802_234154](https://user-images.githubusercontent.com/42922298/127881196-7c24f039-a6a8-4372-8eef-e53f4af9923d.png)

1. 명령어 버스와 데이터용 버스로 물리적으로 분할한 컴퓨터 구조

2. 전기 회로가 필요하다는 단점 존재

![20210802_234205](https://user-images.githubusercontent.com/42922298/127881199-47abd19a-9cf5-45ca-a2ae-fc1b1643026b.png)

3. 수정된 하버드 구조는 하버드 구조에서 사용했던 통합 캐시 메모리를 분리하여 하나의 블록 사이클에서 적재와 저장을 동시에 가능

### 📘 프로세스 스케줄링

![20210802_234839](https://user-images.githubusercontent.com/42922298/127881202-48e2aadd-56b0-429d-8fe9-e2a23023d241.png)

프로세스 스케쥴링의 목적은 CPU가 쉬지않고 일하게 하는 것입니다.

### 📘 멀티 스레드 스케줄링

![20210803_100751](https://user-images.githubusercontent.com/42922298/127942012-b3b29e83-a01d-4375-b297-9b524f33595d.png)

하나의 프로세스 내에 여러개의 스레드를 허용하는 환경을 멀티 스레딩 환경이라 부릅니다.

하나의 프로세스 내의 여러 스레드들은 프로세스에게 할당된 자원을 공유합니다.

스레드 간의 context switch 로 인한 오버헤드는 프로세스간의 전환 오버헤드보다 훨씬 적습니다.

> 스레드 스케줄링 방식에는 크게 2가지가 있습니다.

1. 우선순위 방식 : 우선 순위 방식은 우선순위가 높은 스레드가 실행 상태를 더 많이 가지도록 스케줄링 하는 것을 말하며 setPriority()메소드를 사용하여 우선순위를 설정합니다.

2. 순환 할당 방식 : 순환 할당방식은 시간 할당량(Time Slice)을 정해서 하나의 스레드를 정해진 시간만큼 실행하고 다시 다른 스레드를 실행하는 방식입니다.

### 📘 실제 운영체제 스레드 동작 방식과 구현한 프로그램의 차이

실제 운영체제에선 각각 스레드도 동작 순서를 정해주셨는데 제가 구현한 프로그램은 스레드의 작업량만 지정해줌

실제 운영체제에선 프로세스 상태에 waiting -> ready 이후 running이 이루어지지만 제가 구현한 프로그램은 waiting, running 으로 가는 방식으로 구현함

실제 운영체제에선 컴퓨터 성능이나 아키첵쳐에 따라 프로세스의 우선순위가 바뀔 수 있는데 제가 구현한 프로그램은 프로세스의 state변수로만 판단합니다.

### 📘 스레드를 무제한으로 만들수 없다면, 프로세스가 많아질 때 성능 향상을 할 수 있는 방법은?

1. 코어를 여러개 두어 멀티 코어 방식을 채택합니다.

### 📘 WindowTimers.setTimeout()에 관하여 

```
var timeoutID = window.setTimeout(func[, delay, param1, param2, ...]);
var timeoutID = window.setTimeout(code[, delay]);
window.setTimeout(function, milliseconds);
```

타이머가 만료된 뒤 함수나 지정된 코드를 실행하는 타이머를 설정합니다.

반환되는 timeoutID는 숫자이고, setTimeout()을 호출하여 만들어진 타이머를 식별할 수 있는 0이 아닌 값 입니다.

이 값은 타이머를 취소시키기 위해 WindowTimers.clearTimeout() (en-US)에 전달할 수도 있습니다.

setTimeout()과 setInterval() (en-US)는 같은 ID 공간을 공유하기 때문에, clearTimeout()과 clearInterval() (en-US) 둘 중 어느 것을 사용해도 기술적으로 동일하게 동작합니다.

참고 사이트 : https://developer.mozilla.org/ko/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout

현재 시간을 알려주는 함수인 Date().getTime()를 이용해서 start하는 기점과 end하는 지점을 측정해 차이를 계산해도 timer를 구현가능할 것으로 얘상합니다.

### 📘 뮤텍스(Mutex)와 세마포어(Semaphore)의 차이

해당 개념은 toiler problem을 해결하기 위한 아이디어에서 출발했습니다.

즉, 동시성 프로그래밍의 가장 큰 숙제는 ‘공유자원 관리’일 것이다. 

공유자원을 안전하게 관리하기 위해서는 상호배제(Mutual exclusion)를 달성하는 기법이 필요하다.

![20210803_103939](https://user-images.githubusercontent.com/42922298/127945092-78c2e455-6542-48de-85ad-c9ea63cf2166.png)

뮤텍스(Mutex)는 한 공유자원을 공유자원에 접근하기 위한 오브젝트를 가진 프로세스나 쓰레드가 이용하는 방식을 의미합니다.

즉, 한 쓰레드, 프로세스에 의해 소유될 수 있는 Key를 기반으로 한 상호배제기법

공유된 자원의 데이터 혹은 임계영역(Critical Section) 등에 여러 Process 혹은 Thread가 접근하는 것을 막아줍니다.(즉, 동기화 대상이 하나 이상)

![20210803_105131](https://user-images.githubusercontent.com/42922298/127945108-17b5d6fe-60c0-457d-b520-3398c8e86a86.png)

세마포어(Semaphore)는 현재 공유자원에 접근할 수 있는 쓰레드, 프로세스의 수를 나타내는 값을 두어 상호배제를 달성하는 기법을 의미합니다.

또한 공유된 자원의 데이터 혹은 임계영역(Critical Section) 등에 여러 Process 혹은 Thread가 접근하는 것을 막아줍니다.(즉, 동기화 대상이 하나 이상)

### 🎞 Remark