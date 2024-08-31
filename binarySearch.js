// works with sorted arrays

// How Binary Search works given a sorted array

 let nums = [2, 5, 6, 13, 15, 18, 25, 30] 
//Scenario one: Searching for a target that exists,e.g target = 5

//step 1: Track left and right indices
//step 2: Find the mid
 mid = (0 +7)/2 
 //step 3: Compare the target to the mid, 
 //if mid === target, return the index of mid, the search ends
 //if the mid is greater than the target, eliminate everything on the right
 //including the mid, the vice versa is true
 //step 4: repeat step 1 -3
 
 //stop searching when left > right

 //ITERATIVE EMPLEMENTATION:

 function binarySearch(array, target ){
    let left = 0;
    let right = array.length - 1;

    while( left <= right ){
        let mid = Math.floor((left + right)/2);
        if(target === array[mid]){
            return mid;
        }else if(target < array[mid]){
            right = mid - 1;
        }else {
             left = mid + 1;
        }
        
    }
    return false;
 }

 console.log(binarySearch(nums, 5))
 console.log(binarySearch(nums, 10))

 //Time and space complexity
 //as the array size or input size increases substantially how will be our impementation impacted?

 //binary search is faster than lenear search sice it uses divide and conquer approach
//time complexity: o(log(n)), space complexity o(1)

//RECURSIVE IMPLEMENTATION

function binarySearch(array, target){
    return binarySearchHelper(array, target, 0, array.length - 1)
}

function binarySearchHelper(array, target, left, right){
    if (left > right){
        return false
    }

    let mid = Math.floor((left + right) / 2);
    if (target === array[mid]){
        return mid;
    }else {
        if (target < array[mid]){
            return binarySearchHelper(array, target, left, mid -1)
        } else {
           return binarySearchHelper(array, target, mid + 1, right)
        }
    }
}

console.log(binarySearch(nums, 5))
 console.log(binarySearch(nums, 10))

 //Time complexity: o(log(n)), space complexity: o(log(n)

 //conclusion: iterative approach is better compared to recursive because it has a smaller space complexity