function recursiveSelectionSort(arr, start = 0) {
    if (start >= arr.length - 1) return; // Base case: If the start index reaches the end of the array, return.

    // Function to find the index of the minimum element
    function findMinIndex(arr, start) {
        if (start === arr.length - 1) return start;
        let minIndex = findMinIndex(arr, start + 1);
        return (arr[start] < arr[minIndex]) ? start : minIndex;
    }

    // Find the index of the minimum element in the subarray from start
    let minIndex = findMinIndex(arr, start);

    // Swap the minimum element with the first element of the subarray
    if (minIndex !== start) {
        let temp = arr[start];
        arr[start] = arr[minIndex];
        arr[minIndex] = temp;
    }

    // Recursively call the function for the next part of the array
    recursiveSelectionSort(arr, start + 1);
}

// Example usage:
let arr = [64, 34, 25, 12, 22, 11, 90];
recursiveSelectionSort(arr);
console.log(arr); // Output: [11, 12, 22, 25, 34, 64, 90]