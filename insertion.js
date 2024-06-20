//DONE

// Use the pseudo-code from the Insertion Sort overview reading to 
// implement an insertion sort of an array.

let array1 = [10, 3, 4, 1, 9, 7, 5, 8, 2, 6];

// 1. If it is the first element, it is already sorted; return 1.
// 2. Pick next element.
// 3. Compare with all elements in the sorted sub-list.
// 4. Shift all the elements in the sorted sub-list that is greater than the value
//  to be sorted.
// 5. Insert the value.
// 6. Repeat until list is sorted.

function insertionSort(arr){
    let originalArray = arr.slice()
    let sorted = []
    //console.log(originalArray)
  
    while(originalArray.length > 0){
      let current = originalArray.pop()
      
      if (sorted.length > 0){
        for(let i = 0; i < sorted.length; i++){

          if (sorted[i] > current){
            sorted.splice(i, 0, current)
            break
          } 
          if (current > sorted[sorted.length-1]){
            sorted.push(current)
            break
          }
        }
      }
      if (sorted.length === 0){
        sorted.push(current)
      }
  }
  return sorted
}
console.log(insertionSort(array1))