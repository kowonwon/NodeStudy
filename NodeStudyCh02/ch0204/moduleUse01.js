/* CJS(CommonJS) 방식의 모듈 불러오기
 * CJS 방식의 모듈은 require() 함수를 이용해 불러올 모듈의 js 파일명에서 확장자를
 * 제외하고 다음과 같이 지정하면 되는데 여기서 주의할 점은 모듈의 위치를 지정할 때
 * 반드시 상대경로 방식이나 절대경로 방식을 사용해야 한다. 
 * 아래에서 require("module/myFunc01_CJS")와 같이 지정하면 모듈을 찾지 못한다.
 **/
//const {PI, helloUser, helloTest} = require("./module/myModule01_CJS");
const myModule01 = require("./module/myModule01_CJS")
console.log("myModule01 : \n", myModule01);
console.log(myModule01.PI);
console.log(myModule01.helloUser('홍길동'));
