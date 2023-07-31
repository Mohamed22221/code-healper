/*
"higher-order function" =>>>> is a function that accepts functions 
 as parameters and/or return function
 map(), reduce(), filter(), and sort() , Object.entries() 
*/

//(example 1) function return function same (curry)
export const multiplyBy = (num) => {
  return (multiplication) => {
    return num * multiplication;
  };
};

// const multiplyByTwo = multiplyBy(2)
// const multiplyByThree = multiplyBy(3)
// const multiplyByfour = multiplyBy(4)

// console.log(multiplyByTwo(10)) => 20
// console.log(multiplyByThree(10)) => 30
// console.log(multiplyByfour(10)) => 40

//(example 2) function accepts functions as parameters
async function authDash(urlLevel) {
  const response = await fetch(`http://example.com/${urlLevel}`);
  const auth = await response.json();
  console.log(auth);
}
function showMessage(name) {
  return `logged is ${name}`;
}
function person(person, fnAuth) {
  if (person.level === "admin") {
    fnAuth(person.url);
  } else if (person.level === "user") {
    fnAuth(person.url);
  } else if (person.level === "shipping") {
    fnAuth(person.url);
  }
  showMessage(person.name);
}

// console.log(
//   person({ level: "admin", url: "admin", name: "mohamed" }, authDash)
// );
