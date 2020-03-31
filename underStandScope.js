// https://openclassrooms.com/en/courses/3523231-learn-to-code-with-javascript/4379166-understand-scope

// Global

var equalProtection = "...nor shall any State deprive any person of life, liberty, or property, without due process of law; nor deny to any person within its jurisdiction the equal protection of the laws ";

function newJersey() {
  var noSelfServeGas = "Sorry, you can't pump your own gas.";

  function hunterdonCounty() {
    console.log(noSelfServeGas); // --> Sorry, you can't pump your own gas.
    console.log(equalProtection); // --> ...nor shall any State etc.
  }
}

function Pennsylvania() {
  console.log(noSelfServeGas); // --> Uncaught ReferenceError: noSelfServeGas is not defined
  console.log(equalProtection); // --> ...nor shall any State etc.

}

// Local
function myFunc(){
	var  foo = "bar";
}

console.log(foo);

// AKA