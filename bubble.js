//DONE

// Use the pseudo-code from the Bubble Sort overview reading to implement 
// a bubble sort of an array. Try to create a helper function to assist 
// you in the swapping.

let array1 = [10, 3, 4, 1, 9, 7, 5, 8, 2, 6];

// 1. If the current value is greater than its neighbor to the right
// 2. Swap those values
// 3. If you get to the end of the array and no swaps have occurred, return
// 4. Otherwise, repeat from the beginning


function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - (i + 1); j++) {
      if (arr[j] > arr[j + 1]) {
        swapped = true;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (!swapped) break;
  }
  return arr;
}

console.log(bubbleSort(array1))