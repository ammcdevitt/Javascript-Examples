//example 1: basic, using if statement

var name = prompt("What is your name?")
//declared a variable called name

if (name.length != 0){
    document.write("Hello " +  name)
}
//if somebody enters their name, print out hello and then their name
//if that if the length of a name doesn't equal 0, go ahead and write the entered name

else
  document.write("Feeling shy?")
//if user does not enter anything, don't say hello



//example 2: using nested statement

var name = prompt("What is your name?")

if (name.length != 0){
    if (name == "Anna")
      document.write("What a beautiful name");
  		//print out if name.lenth = 0 and name equals Anna
    else
      document.write("Hello " +  name);
  		//if name.length doesn't equal 0 and the name doesn't equal Anna, print out hello plus the name
}

else
   document.write("Feeling shy?");
