/* CJS(CommonJS) 모듈 시스템 방식
 * module.exports로 내보내기하고 require() 함수로 모듈을 불러온다.
 * 모듈을 동적으로 처리하며 순환 종속성 문제가 발생할 수 있다.
 * 확장자는 .js를 사용하고 //, /*//*/ 를 주석으로 사용한다.  
 **/
const PI = 3.14;

function helloUser(user) {
  return "Hello " + user + " - CJS";
}

function helloTest(user) {
  return "Hello Test " + user + " - CJS";
}

/* 모듈에서 내보내기
 * module은 현재 모듈을 나타내는 예약어로 현재 모듈에 대한 정보를 담고 있는
 * 일종의 객체라 할 수 있다. exports는 값으로 허용되는 모든 데이터를 내보내기
 * 할 수 있다. 아래와 같이 module.exports 하면 module 객체의 exports 안에는
 * 다음과 같이 데이터를 저장하고 있다.
 * exports: {
 *   PI: 3.14,
 *   helloUser: [Function: helloUser],
 *   helloTest: [Function: helloTest]
 * }
 **/
module.exports = { PI, helloUser, helloTest }
console.log("module :\n", module);