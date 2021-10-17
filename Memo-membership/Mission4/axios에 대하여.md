## 📕 Day 0 - BoostCamp

### 📘 샘플 코드 

express에서 `node-fetch`가 있지만 es6 이상이여야 가능합니다.

```javascript
axios({
  method: 'post',
  url: '/api/RegisterCustomer',
  data: { id: 'miiin', message: 'hi' },
  headers: { 'X-API-TOKEN': '1234', 'Content-Type': 'application/json' },
})
  .then( response => { console.log(response) } )
  .catch( response => { console.log(response) } );
```

### 🎞 Remark
