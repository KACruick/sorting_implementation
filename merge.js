//DONE

// Use the pseudo-code from the Merge Sort overview reading to implement 
// a merge sort of an array. This should utilize two functions. 
// One for the sort, and one for the merge.

let array1 = [10, 3, 4, 1, 9, 7, 5, 8, 2, 6];

// Steps for Sorting Function:
// 1. Check if the input is length 1 or less.
// 2. If so, it's already sorted: return.
// 3. Divide the array in half.
// 4. Recursively sort the left half.
// 5. Recursively sort the right half.
// 6. Merge the halves together and return.


// Steps for Merge Function:
// 1. Create an empty return array.
// 2. Point to the first value of each array.
// 3. While there are still values in each array:
// 4. Compare the first values of each array.
// 5. Add the smaller value to the return array.
// 6. Move the pointer to the next value in that array.
// 7. Return the return array.


function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
}


function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort(array1))