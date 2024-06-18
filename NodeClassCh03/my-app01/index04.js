import express from "express";

import commentRouter from "./routers/commentRouter.js";
import noticeRouter from "./routers/noticeRouter.js";

const app = express();
const port = 3000;

// req.body로 들어오는 데이터를 처리하는 미들웨어
app.use(express.json());

// POST 요청으로 들어올 때 Content-Type이 application/x-www-form-urlencoded인 경우
// 파싱해주는 설정 JSON 미들웨어와 같이 사용
app.use(express.urlencoded({extended: true}));

// CSS, JavaScript, html, 이미지 등의 정적 파일을 제공하기 위한 설정
// http://localhost:3000 -> index.html, http: ... /main.html -> main.html
app.use(express.static("public"));

app.use("/comments", commentRouter);

app.use("/notices", noticeRouter);

app.listen(port, () => {
  console.log(`Example 서버 시작 - OK - http://localhost:${port}`);
})