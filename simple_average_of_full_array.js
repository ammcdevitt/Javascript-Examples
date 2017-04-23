//finding average if there are elements in an array

var numbersArray = [807, 187, 794, 282, 682, 998, 481, 681, 974, 291];
//declare variable called 'numbersArray' and assign elements to it
//don't forget your semicolon!

var sum = 0;
//declare var sum to be used as a counter, and set it to 0
for (index = 0; index < numbersArray.length; index++) {
//initializer; boolean condition; incrementor
//as long as index is less than length of 'numbersArray' (which is 10), increment thru array
	sum += numbersArray[index];
	//add the given element to the total of the sum
}

window.document.write(sum/numbersArray.length);
	//displays to screen: (sum of all the elements in array)/(length of the array)
