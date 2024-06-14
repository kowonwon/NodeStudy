import http from "k6/http"

// 테스트 옵션
export const options = {
  // 사용자 100명이 10초 동안 계속해서 서버로 요청을 보내는 설정
  vus: 100,
  duration: "10s"
}

// http get 요청 테스트에 사용할 함수
export default function() {
  http.get("http://localhost:3000");
}