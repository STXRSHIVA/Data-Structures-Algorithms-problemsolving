function recursiveBubbleSort(arr, end) {
    if (end <= 1) return; // Base case: if the array size is 1 or less, it's sorted.

    // Recursive function to bubble up the largest element in the current pass
    function bubble(current) {
        if (current < end - 1) {
            if (arr[current] > arr[current + 1]) {
                // Swap if current element is greater than the next
                let temp = arr[current];
                arr[current] = arr[current + 1];
                arr[current + 1] = temp;
            }
            bubble(current + 1); // Recursive call to bubble the next element
        }
    }

    bubble(0); // Start bubbling from the first element

    // After the largest element has been bubbled to the end, sort the remaining array
    recursiveBubbleSort(arr, end - 1);
}

// Example usage:
let arr = [64, 34, 25, 12, 22, 11, 90];
recursiveBubbleSort(arr, arr.length);
console.log(arr); // Output: [11, 12, 22, 25, 34, 64, 90]