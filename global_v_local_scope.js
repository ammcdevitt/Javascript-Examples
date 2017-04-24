//GLOBAL SCOPE

var globalVar = "hello";
var foo = function() {
    console.log(globalVar);  
    // prints "hello". the variable globalVar can be accessed anywhere, even inside the function foo
}

//LOCAL SCOPE: variable localVar only exists inside the function bar. printing to the console must occur within the function, otherwise, it will error.

var bar = function() {
    var localVar = "howdy";
    console.log(localVar); 
}
