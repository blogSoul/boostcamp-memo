## π Day 0 - BoostCamp

### π μν μ½λ 

expressμμ `node-fetch`κ° μμ§λ§ es6 μ΄μμ΄μ¬μΌ κ°λ₯ν©λλ€.

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

### π Remark
