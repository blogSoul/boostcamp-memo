## ๐ Day 0 - BoostCamp

### ๐ session์ ๋ํ์ฌ

![image](https://user-images.githubusercontent.com/42922298/137634672-e259e469-1c3d-4e4a-9343-5c17a12ed9c4.png)

* session ๋ผ์ฐํฐ ์์ 

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
                    console.log("์๋ฌ");
                } else {
                    console.log("์ญ์  ์ฑ๊ณต");
                    res.render('login2.html');
                }
            }
        );
    } else {
        console.log("๋ก๊ทธ์ธ ์๋จ");
        res.render('login2.html');
    }
});

module.exports = router;
```

* github session 

๊ณต์ ๋ฌธ์ : https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps

์ฐธ๊ณ  ์ฌ์ดํธ : https://devhyun.com/blog/post/15

์ดํ ํ์ธ : https://github.com/settings/developers

### ๐ Remark
