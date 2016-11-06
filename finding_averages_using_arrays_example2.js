//finding average if there are no elements in array. note: you never want to divide by 0 in computer science, because the answer will be 'NaN'

var numbers = [];

var sum = 0;
if (numbers.length > 0){
  for (index = 0; index < numbers.length; index++){
  	//before finding the average, computer checks length of array to make sure that it's greater than 0
		sum += numbers[index];
  }
  
  document.write(sum/numbers.length);
}
else
  document.write("Empty Array");
//just prints out empty array if there are no elements in array
