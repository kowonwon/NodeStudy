const express = require('express')
const url = require('url'); //parsing 하기 위함?

const app = express() // 객체 생성
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/main", (req, res) => { // callback함수 만듦
  // http://localhost:3000/main?name=홍길동&age=33
  // {name: "홍길동", age: 33}
  const user = url.parse(req.url, true).query; // true -> queryString을 js객체로 넘겨라.
  console.log(user);

  // {"name": "홍길동-한글", "age": "33"} 직렬화
  res.json({name: user.name + "-한글", age: user.age}); // 응답을 위해서 json 문자열로 만든 것.
})

app.get("/list", (req, res) => {
  res.setHeader("Content-type", "text/html; charset=UTF-8");
  res.end(`<h1>여기는 리스트</h1>
            <ul>
              <li>Node.js</li>
              <li>JavaScript</li>
              <li>JSON</li>
            </ul>`);
})

app.listen(port, () => { // 요청이 들어올 때까지 port를 열어놓고 대기
  console.log(`Example 서버 시작 - OK - http://localhost:${port}`);
})