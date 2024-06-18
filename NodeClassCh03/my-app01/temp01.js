// Express 프레임워크 사용하기
const express = require('express'); // express 모듈 불러오기
const url = require('url'); // url 모듈 불러오기

const app = express(); // express 서버 인스턴스 생성 - app은 express의 기능을 담고 있는 객체

app.get("/main", (req, res) => { // app 객체의 get() 메서드 -> get 방식 요청에 대한 라우팅 설정(맵핑)
  const user = url.parse(req.url, true).query; // true -> url에서 queryString을 객체로 읽어옴(false는 문자열로)
  console.log(user);

  res.json({name: user.name + '한글', age: user.age}); // json으로 응답
})
app.get("/list", (req, res) => {
  res.setHeader('Content-type', 'text/html; charset=utf-8'); // 응답 헤더 설정
  res.end(`<h1>여기는 리스트</h1>
           <ul>
             <li>Node.js</li>
             <li>JavaScript</li>
             <li>JSON</li>
           </ul>`);
})

app.listen(3000, () => { // 3000번 포트에서 사용자 접속 대기
  console.log(`Express 서버 시작 OK - http://localhost:3000/`);
})