//example 1: finding average if there are elements in an array
var grades = [80, 87, 94, 82, 62, 98, 81, 81, 74, 91];

var sum = 0;
for (index = 0; index < grades.length; index++) {
	sum += grades[index];
}
document.write(sum/grades.length);

//example 2: finding average if there are no elements in array
//you never want to divide by 0 in CS
var grades= [];

var sum = 0;
if (grades.length > 0){
	for (index = 0; index < grades.length; index++){
  	//before finding average, computer checks length of array to make sure it's greater than 0
		sum += grades[index];
	}  
  	document.write(sum/grades.length);
}
else {
	document.write("Empty Array");
	//prints out 'Empty Array' if there are no elements in array
}

//example 3: array average with undefined (empty) elements
var grades= [2, 5, , , 9, 8, , 8];
var sum = 0;
var count = 0;
//declaring count allows sum to be divided by the correct total numbers (5), instead of the length of array (8)

if (grades.length > 0){
	for (index = 0; index < grades.length; index++){
		if (grades[index] != undefined){
			sum += grades[index];
			//only want to do this if the index has been defined. if its undefined, then skip. undefined is a keyword in JS 
		count += 1;
		}
	}
	document.write(sum/count);
	//don't want to divide by size of the array, so we divide by the count
}
else
	document.write("Empty Array");
