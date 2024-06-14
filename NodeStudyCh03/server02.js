// 라우터 만들기
const http = require('http'); // http 모듈 불러오기
const url = require('url');  // url 모듈 불러오기

// 서버 인스턴스 생성
const server = http.createServer((req, res) => {  

  // 요청된 URL에서 경로를 읽어 온다.
  // "http://localhost:3000/main"으로 요청이 들어오면 pathname은 "/main"이 된다.
  const path = url.parse(req.url, true).pathname;
  res.setHeader('Content-type', 'text/html; charset=utf-8'); // 응답 헤더 설정  

  // 라우팅 작성
  if(path == "/main") {
    res.write("<h1>main</h1>");               // /main에 대한 응답 데이터 작성
    res.end("<h3>여기는 메인</h3>") 

  } else if(path == "/list") {
    res.write("<h1>list</h1>");               // /list에 대한 응답 데이터 작성
    res.end("<h3>여기는 리스트</h3>");

  } else {
    res.statusCode = 404;                     // 페이지 없음 응답 코드 작성
    res.end('Page Not Found - 404');          // 에러 메시지를 응답하고 종료
  }
});

// 3000번 포트에서 사용자 접속 대기
server.listen(3000, () => {
  console.log(`서버 시작 OK - http://localhost:3000/`);
});