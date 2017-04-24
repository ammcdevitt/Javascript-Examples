//example 1: basic, using and if statement and prompt 
var name = prompt("What is your name?")
//declared a variable called name
if (name.length != 0){
    document.write("Hello " +  name)
    //if somebody enters their name, displays 'Hello' and then their name
}
else
    document.write("Feeling shy?")
    //if user doesn't enter anything, displays "Feeling shy?"

//example 2: using nested if statements and prompy 
var name = prompt("What is your name?")
if (name.length != 0){
    if (name == "Anna")
        document.write("What a great name!");
  		//print out if name.lenth = 0 and name equals Anna
    else
        document.write("Hello " +  name);
  		//if name.length doesn't equal 0 and the name doesn't equal Anna, print out hello plus the name
}
else
    document.write("Feeling shy?");
