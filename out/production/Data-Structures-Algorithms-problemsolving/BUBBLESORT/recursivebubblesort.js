function recursiveBubbleSort(arr, n) {
    // Base case: If the size is 1, return.
    if (n === 1) {
        return;
    }

    // Make a single pass and bubble the largest element to the end.
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            // Swap arr[i] and arr[i + 1]
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }

    // Largest element is fixed, recur for remaining array
    recursiveBubbleSort(arr, n - 1);
}

// Example usage:
let arr = [64, 34, 25, 12, 22, 11, 90];
recursiveBubbleSort(arr, arr.length);
console.log(arr);