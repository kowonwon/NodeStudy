// 미들웨어

const express = require('express')
const url = require('url'); //parsing 하기 위함?
const creatError = require('http-errors');

const app = express() // 객체 생성
const port = 3000

// 첫 번째 미들웨어
app.use((req, res, next) => {
  console.log("첫 번째 미들웨어...");
  next(); // 반드시 다음 미들웨어를 호출해야 함.
});

// 두 번째 미들웨어 정의
let requestTime = (req, res, next) => {
  req.requerstTime = Date.now();
  next();
}

app.use(requestTime);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/main", (req, res) => { // callback함수 만듦
  // http://localhost:3000/main?name=홍길동&age=33
  // {name: "홍길동", age: 33}
  const user = url.parse(req.url, true).query; // true -> queryString을 js객체로 넘겨라.
  console.log(user);

  // {"name": "홍길동-한글", "age": "33"} 직렬화
  res.json({name: user.name + "-한글", age: user.age, reqTime: req.requestTime}); // 응답을 위해서 json 문자열로 만든 것.
})

app.use("/list", (req, res) => {
  res.setHeader("Content-type", "text/html; charset=UTF-8");
  res.end(`<h1>여기는 리스트</h1>
            <ul>
              <li>app.use("/list", (req, res) => {}) 라우팅</li>
            </ul>`);
})

// 요청 페이지가 없을 때 - 에러를 발생시키는 미들웨어
app.use((req, res, next) => {
  next(createError(404));
})

app.listen(port, () => { // 요청이 들어올 때까지 port를 열어놓고 대기
  console.log(`Example 서버 시작 - OK - http://localhost:${port}`);
})