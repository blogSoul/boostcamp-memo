## 📕 Day 0 - BoostCamp

### 📘 session에 대하여

![image](https://user-images.githubusercontent.com/42922298/137634672-e259e469-1c3d-4e4a-9343-5c17a12ed9c4.png)

* session 라우터 예제

```javascript
var express = require('express');
var router = express.Router();

router.get('/product', function(req, res, next) {
    if(req.session.user) {
        res.render('product.html');
    } else {
        res.render('login2.html');
    }
});

router.post('/login', function(req, res, next) {
    const paramID = req.body.id || req.query.id;
    const pw = req.body.passwords || req.query.passwords;

    if(req.session.user) {
        res.writeHead(200, { "Content-Type": "text/html;characterset=utf8" });
        res.write('<h1>already Login</h1>');
        res.write('[ID] : ' + paramID + ' [PW] : ' + pw);
        res.write('<a href="/process/product">Move</a>');
        res.end();
    } else {
        req.session.user = {
            id: paramID,
            pw: pw,
            name: "UserNames!",
            authorized: true
        };
        res.writeHead(200, { "Content-Type": "text/html;characterset=utf8" });
        res.write('<h1>Login Success</h1>');
        res.write('[ID] : ' + paramID + ' [PW] : ' + pw);
        res.write('<a href="/process/product">Move</a>');
        res.end();
    }
});

router.get('/logout', function(req, res, next) {
    if(req.session.user) {
        req.session.destroy(
            function(err) {
                if(err) {
                    console.log("에러");
                } else {
                    console.log("삭제 성공");
                    res.render('login2.html');
                }
            }
        );
    } else {
        console.log("로그인 안됨");
        res.render('login2.html');
    }
});

module.exports = router;
```

* github session 

공식 문서 : https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps

참고 사이트 : https://devhyun.com/blog/post/15

어플 확인 : https://github.com/settings/developers

### 🎞 Remark
