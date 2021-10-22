## 📕 Day 0 - BoostCamp

### 📘 Sample 코드

```javascript
#!/usr/bin/env node

const app = require("../app")
const debug = require("debug")("backend:server")
const http = require("http")

const port = normalizePort(process.env.PORT || "3000")
app.set("port", port)

const socketIo = require("socket.io")
const server = http.createServer(app)

const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
})

io.sockets.on("connection", (socket) => {
  console.log("connection cheeting")
  socket.on("init", (payload) => {
    console.log(payload)
  })
  socket.on("send message", (item) => {
    const name = "UnKnown"
    console.log(name + " : " + item.message)
    io.emit("receive message", { name: name, message: item.message })
  })
})

server.listen(port)
server.on("error", onError)
server.on("listening", onListening)

function normalizePort(val) {
  const port = parseInt(val, 10)

  if (isNaN(port)) {
    return val
  }

  if (port >= 0) {
    return port
  }
  return false
}

function onError(error) {
  if (error.syscall !== "listen") {
    throw error
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges")
      process.exit(1)
      break
    case "EADDRINUSE":
      console.error(bind + " is already in use")
      process.exit(1)
      break
    default:
      throw error
  }
}

function onListening() {
  const addr = server.address()
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port
  debug("Listening on " + bind)
}
```

참고 사이트 : https://donghunee.github.io/study/2019/12/09/socket/

참고 사이트 : https://okayoon.tistory.com/entry/Express-Socketio%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-%EC%B1%84%ED%8C%85%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-4-%EC%B1%84%ED%8C%85-%EA%B5%AC%ED%98%84?category=835827

### 🎞 Remark
