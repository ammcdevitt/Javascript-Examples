//finding average if there are elements in an array
var numbersArray = [807, 187, 794, 282, 682, 998, 481, 681, 974, 291];

var sum = 0;
//set counter to 0
for (index = 0; index < numbersArray.length; index++) {
//initializer; boolean condition; incrementor
	sum += numbersArray[index];
}

document.write(sum/numbersArray.length);
