const PI = 3.14;

function helloUser(user) {
  return "Hello " + user + " - ESM"
}

export function helloTest(user) {
  return "Hello Test " + user + " - ESM"
}

export {PI, helloUser}