//example 1: finding average if there are elements in an array
var grades = [80, 87, 94, 82, 62, 98, 81, 81, 74, 91];

var sum = 0;
for (index = 0; index < grades.length; index++) {
	sum += grades[index];
}

document.write(sum/grades.length);

//example 2: finding average if there are no elements in array. important because you never want to divide by 0 in computer science. the answer results in 'NaN'
var grades= [];

var sum = 0;
if (grades.length > 0){
  for (index = 0; index < grades.length; index++){
  	//before finding the average, computer checks length of array to make sure that it's greater than 0
		sum += grades[index];
  }
  
  document.write(sum/grades.length);
}
else
  document.write("Empty Array");
//just prints out empty array if there are no elements in array

//example 3: array average with undefined (empty) elements
var grades= [2, 5, , , 9, 8, , 8];
var sum = 0;
var count = 0;
//declaring count allows the sum to be divided by ONLY the correct numbers (5), instead of the length of the array (8)

if (grades.length > 0){
  for (index = 0; index < grades.length; index++){
    if (grades[index] != undefined){
		  sum += grades[index];
	//only want to do this if the index has been defined. if its undefined, then skip. undefined is a keyword in JS 
    	  count = count + 1;
    }
  }
  //Do we really want to divide by the size of the array?
  document.write(sum/count);
}
else
  document.write("Empty Array");
