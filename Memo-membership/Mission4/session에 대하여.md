## 📕 Day 0 - BoostCamp

### 📘 session에 대하여

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

### 🎞 Remark
