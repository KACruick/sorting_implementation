//DONE

// Use the pseudo-code from the Selection Sort overview reading to implement
//  a selection sort of an array. This is another great case to use a 
//  helper function to assist with the swap.

let array1 = [10, 3, 4, 1, 9, 7, 5, 8, 2, 6];

// 1. Set MIN to location 0.
// 2. Search the minimum element in the list.
// 3. Swap with value at location MIN.
// 4. Increment MIN to point to next element.
// 5. Repeat until list is sorted.


function selectionSort(arr){
    //loops through array, changing the location MIN
    for(let i = 0; i < arr.length - 1; i++){
        
        let minIndex = i

        //look for min value
        for (let j = i + 1; j < arr.length; j++){
            let current = arr[j]
            if (current < arr[minIndex]){
                minIndex = j
            }
        }
        //now swap 
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp


    }
    
    return arr
}


console.log(selectionSort(array1))