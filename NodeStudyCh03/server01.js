// http 모듈로 웹 서버 만들기
// https://nodejs.org/en/learn/getting-started/introduction-to-nodejs

// http 모듈 불러오기
const http = require('http');
const port = 3000;

// 서버 인스턴스 생성 - 요청이 들어오면 인수로 지정한 콜백 함수가 실행된다.
const server = http.createServer((req, res) => {  
  res.writeHead(200, {'Content-Type': "text/plain"});
  res.write('<h1>Hello World</h1>');
  setTimeout(() => {
    res.end('<h2>Hi Node.js<h2>');
  }, 2000);  
});

/* 지정한 포트에서 사용자 요청이 들어오길 기다리며 사용자 요청이 들어오면
 * 위에서 서버 인스턴스를 생성할 때 등록한 콜백 함수가 실행해 준다.
 * 아래와 같이 호스트 ip가 생략되면 기본 값은 locallhost 또는 127.0.0.1 이다.
 **/
server.listen(port, () => {
  console.log(`Server is running - http://localhost:${port}/`);
});