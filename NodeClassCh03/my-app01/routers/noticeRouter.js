import express from "express";
import url from "url";

const router = express.Router();

// http://localhost:3000/notices?title=안녕&writer=어머나
router.get('/', (req, res) => {
  const reqParam = url.parse(req.url, true).query;
  const result = {title: reqParam["title"], writer: reqParam.writer};

  // 객체를 JSON 문자열로 직렬화해서 응답
  res.json(result);
})

export default router;