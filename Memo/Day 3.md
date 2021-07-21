## 📕 Day 3 - BoostCamp

### 캐시에 관하여

실제 컴퓨터 부품으로 대용량의 메인 메모리 접근을 빠르게 하기 위해 CPU 칩 내부나 바로 옆에 탑재하는 작은 메모리입니다.

하지만 cache로 인해 빨라지는 속도와 메모리 측면해서 볼 때 충분히 웹에서 적용 가능합니다.

### 캐시 교체 정책

![20210722_085151](https://user-images.githubusercontent.com/42922298/126573794-14985556-737b-48fa-8a07-0b1bf0f057f6.png)

![20210722_084759](https://user-images.githubusercontent.com/42922298/126573798-5818ac12-12e3-4597-92ef-c79d2051da85.png)

![20210722_084902](https://user-images.githubusercontent.com/42922298/126573806-d2fb4b34-9102-41d5-9e2e-fc594a56002f.png)

캐시는 실제 컴퓨터를 동작할 때 사용되는 기억장치이고 이 방식이 효율적이여서 서버에도 같은 방식을 적용합니다.

캐시 교체 정책에는 여러 개가 존재합니다.

1. LRU(= Least Recently Used) : 캐시 내에서 가장 오랫동안 참조되지 않은 블록을 교체하는 방식

2. FIFO(= First In First Out) : 캐시 내에서 가장 오랫동안 있던 블록을 먼저 교체하는 방식

3. LFU(Least Frequecy Used) : 가장 적게 참조되었던 블록을 교체하는 알고리즘

이 중 LRU가 가장 많이 사용됩니다.

### HashMap과 LRU cache의 차이점

LRU cache는 리소스의 양은 제한되어 있고, 캐시는 제한된 리소스 내에서 데이터를 빠르게 저장 하고 찾아야 합니다.

이러한 측면에서 LRU cache가 우수한 면을 보이고 있습니다.

HashMap은 key-value가 존재하며 key값을 기준으로 CRUD가 이루어집니다.

key값을 기준으로 동작이 이루어지므로 한 동작에 많은 시간이 소모됩니다.

### NodeJS에서의 콘솔 입력

아래와 같이 Read 객체를 만들어서 콘솔 입력을 받습니다.

알고리즘에선 비효율적이라는 생각이 많이 들었습니다.

```javascript
import readline from "readline";

const Read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

Read.on("line", function (line){
        input = line.split(' ');
        Crawling(input[0], input[1]);
        Read.close();
    })
    .on("close", function (){

        process.exit();
    });
```