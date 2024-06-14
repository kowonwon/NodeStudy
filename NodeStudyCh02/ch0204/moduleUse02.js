/* ESM(ECMAScript Modules) 방식의 모듈 불러오기
 * ESM 방식의 모듈은 import 문을 이용해 불러올 모듈의 파일명을 확장자를 포함해서
 * 다음과 같이 지정하면 되는데 여기서 주의할 점은 모듈의 위치를 지정할 때 반드시 
 * 상대경로 방식이나 절대경로 방식을 사용해야 한다. 
 * 아래에서 from "module/myModule02_ESM.js"와 같이 지정하면 모듈을 찾지 못한다.
 * 또한 파일의 확장자를 모두 .js로 사용하려면 현재 실행되는 모듈이 있는 폴더
 * 또는 상위 폴더에 package.json 파일에 { "type": "module" }로 설정되어 있어야
 * 한다. 그렇지 않으면 "SyntaxError: Cannot use import statement outside a module"
 * 오류가 발생한다. package.json 파일에 { "type": "module" }을 설정하지 않고
 * ESM 방식을 사용하려면 사용하는 모든 파일의 확장자를 .mjs로 사용하면 된다.
 **/
import { PI, helloUser, helloTest } from "./module/myModule02_ESM.js";
console.log("PI : ", PI);
console.log(helloUser("임꺽정"));
console.log(helloTest('홍길동'));