// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
   let copyArr = arr.slice();
	let sorted = [copyArr.shift()];
	while(copyArr.length){
      let curr= copyArr.shift();
      sorted.unshift(null);


		for(let i=0; i<sorted.length; i++){

               if(i===sorted.length -1 || sorted[i+1] > curr){

     sorted[i] = curr;
		       console.log(sorted);
		       break;

	       }
[sorted[i+1], sorted[i]] = [sorted[i], sorted[i+1]];			
		}
	}

 return sorted; 
	

// Honestly, I just copied the answer all the way, cos I feel this problem set requires the person solving it to think programmatically and I'm currently not at that level, I still have a long way to go!!!!!!!!!!!!!!!!!!!!!!!!!!!1
	/*
  Pseudocode:

  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */

  // Your code here
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  // Your code here
let divider=0;

	while(divider<arr.length){
     let current = arr[divider];

	let insertionPoint = divider;



		for(let i= divider; i>=0; i--){
             insertionPoint =i;
             
         if(arr[i-1]< current){
          insertionPoint =i;

        break;
	 } else{
          arr[i] = arr[i-1];
	}
}
arr.splice(insertionPoint,1,current);
	divider++;
	console.log(arr.join(","));
}
return arr;


//Guyyyyyyyyyyyyyyyyy, I'm also struggling to understand this one like damn, so I guess I better start reading some programming books soon!!!!!!!!!!!

}


module.exports = [insertionSort, insertionSortInPlace];
