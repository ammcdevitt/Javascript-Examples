//troubleshooting for inding average if there are no elements in array, because in computer science, you never want to divide by 0, since the answer will be 'NaN'

var numbers = [];

var sum = 0;
//before finding the average, computer checks length of array to make sure that it's greater than 0
if (numbers.length > 0){
  for (index = 0; index < numbers.length; index++){
		sum += numbers[index];
  }
  document.write(sum/numbers.length);
}
else
  document.write("Empty Array");
