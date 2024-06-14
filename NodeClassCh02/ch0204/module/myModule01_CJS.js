const PI = 3.14;

function helloUser(user) {
  return "Hello " + user + " - CJS"
}

function helloTest(user) {
  return "Hello Test " + user + " - CJS"
}

module.exports = {PI, helloUser, helloTest}
console.log("module : \n", module);