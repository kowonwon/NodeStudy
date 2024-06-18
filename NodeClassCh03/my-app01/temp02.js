// 미들웨어 사용하기
const express = require('express');
const url = require('url');
const createError = require('http-errors') // http-errors 모듈 불러오기(왜?)

const app = express();

app.use((req, res, next) => {
  console.log("첫 번째 미들웨어");
  next();
})

// 변수 정의
let requestTime = (req, res, next) => {
  req.requestTime = Date.now();
  next();
}

app.use(requestTime); // 두 번째 미들웨어(변수 사용)

app.get("/main", (req, res) => { // 라우팅
  const user = url.parse(req.url, true).query;
  console.log(user);
  res.json({name: user.name + '한글', age: user.age, reqTime: req.requestTime}); // requestTime 변수 사용(req에 넣었던)
})

app.use("/list", (req, res) => { // 라우팅
  res.setHeader('Content-type', 'text/html; charset=utf-8');
  res.end(`<h1>여기는 리스트</h1>
           <ul>
             <li>app.use(/list, (req, res) => {})로 라우팅</li>
           </ul>`);
})

// 요청 페이지가 없을 때 처리를 위한 미들웨어
app.use((req, res, next) => {
  next(createError(404));
})

app.listen(3000, () => {
  console.log(`Express 서버 시작 OK - http://localhost:3000/`);
})