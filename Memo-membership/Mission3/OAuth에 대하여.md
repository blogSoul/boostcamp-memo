## 📕 Day 0 - BoostCamp

### 📘 

OAuth

3개의 참여자 : 

mine(opentutorials.org)

User

Their(google, facebook, Twitter)

![image](https://user-images.githubusercontent.com/42922298/135798853-a468ec66-d21d-4e97-b9d2-e411e73d6c3f.png)

## 📘 쿠키에 대해 

![image](https://user-images.githubusercontent.com/42922298/135851280-f3fa3a10-be78-469d-a44b-d4e0d10392cc.png)

response 안에 쿠키가 들어 있을 수 있습니다.

브라우저에 저장하고 싶은 쿠키가 존재할 수 있습니다.

쿠키는 인증이나 언어나 설정이 들어있을 수 있습니다.

세션과 토큰은 stateless합니다.

![image](https://user-images.githubusercontent.com/42922298/135852297-97cf50fb-6004-4954-9686-dc1c0ff0dee5.png)

stateless : 서버로 가는 모든 요청끼리 연결이 없습니다. 메모리도 존재하지 않습니다.

세션 : 웹에서 가능

토큰 : 앱에서 가능

쿠키는 세션 ID를 전달하기 위한 하나의 매개체입니다.

토큰은 이상하게 생긴 토큰입니다.

JWT은 토큰 형식입니다.

JWT을 사용하면 sessionDB을 사용하지 않아도 됩니다.

![image](https://user-images.githubusercontent.com/42922298/135853002-42b25a9a-c0c9-44c0-97aa-69fc7bcb269b.png)

세션은 로그인 시 sessionID만 존재하면 됩니다.

![image](https://user-images.githubusercontent.com/42922298/135853146-2b8be0ce-7dd3-48d8-a279-d12841c3fe93.png)

세션은 모든 유저의 정보를 가지고 있기 때문에 내가 직접 유저에 대한 새로운 기능을 추가할 수 있습니다.

reids 추천

JWT에선 서버는 유저를 인증하는데 필요한 정보를 토큰에 저장합니다.

![image](https://user-images.githubusercontent.com/42922298/135853341-5a99c2a3-a93e-4edc-8b9c-29b67e9a9acb.png)

![image](https://user-images.githubusercontent.com/42922298/135853427-182d69df-9f86-4363-9e50-a91a64920cf4.png)

JWT에선 토큰을 사인하고 이를 통해 유효한지 검증한다는 것입니다.

QR 코드를 의미합니다.

쿠키 = 그냥 옮기는 시스템, 매개체

토큰 = 서버가 시억하는 이상하게 생긴 텍스트

JWT = 정보를 갖고 있는 토큰, DB없이 검증할 수 있음.

세션 = 접속중인 웹 서버에 저장되는 매개체

### 🎞 Remark
