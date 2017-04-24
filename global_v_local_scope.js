//GLOBAL SCOPE
var globalVar = 'hello';
//variable 'globalVar' can be accessed anywhere, even inside the function 'foo'
var foo = function() {
    console.log(globalVar);  
    //displays 'hello'
}

//LOCAL SCOPE
var bar = function() {
    var localVar = "howdy";
    //variable 'localVar' only exists inside the function 'bar'
    console.log(localVar); 
    //displaying to console must occur within the function, otherwise, it will error
}
