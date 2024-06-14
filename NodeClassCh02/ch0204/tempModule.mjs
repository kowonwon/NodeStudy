// ESM 모듈 시스템 방식
// 모듈(내보내기): export문
// 사용: import

const PI = 3.14;

export function helloUser(user) {
  return "Hello " + user + " - ESM"
}

function helloTest(user) {
  return "Hello Test " + user + " - ESM"
}

export {PI, helloTest}