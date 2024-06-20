//DONE

// Use the pseudo-code from the Quick Sort overview reading to implement 
// a quick sort of an array.

let array1 = [10, 3, 4, 1, 9, 7, 5, 8, 2, 6];

// 1. Choose an element called "the pivot", how that's done is up to the implementation.
// 2. Take two variables to point left and right of the list excluding pivot.
// 3. Left points to the low index.
// 4. Right points to the high index.
// 5. While value at left is less than pivot move right.
// 6. While value at right is greater than pivot move left.
// 7. If both step 5 and step 6 does not match, swap left and right.
// 8. If left ≥ right, the point where they met is new pivot.
// 9. Repeat, recursively calling this for smaller and smaller arrays.


function quickSort(arr){
  if (arr.length < 2) {return arr}
  let piviot = arr[0]
  let arrLeft = []
  let arrRight = []
  for (let i = 0; i < arr.length; i++){
    if(arr[i] < piviot){
      arrLeft.push(arr[i])
    }
    if(arr[i] > piviot){
      arrRight.push(arr[i])
    }
  }
  return quickSort(arrLeft).concat(piviot).concat(quickSort(arrRight))
}

console.log(quickSort(array1))