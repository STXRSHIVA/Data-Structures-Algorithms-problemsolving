public class RecursiveSelectionSort {
    // Recursive method to perform selection sort
    public static void recursiveSelectionSort(int[] arr, int start) {
        if (start >= arr.length - 1) return; // Base case: if the start index reaches the end of the array, return.

        // Function to find the index of the minimum element
        int minIndex = findMinIndex(arr, start, start + 1);

        // Swap the minimum element with the first element of the subarray
        if (minIndex != start) {
            int temp = arr[start];
            arr[start] = arr[minIndex];
            arr[minIndex] = temp;
        }

        // Recursively call the function for the next part of the array
        recursiveSelectionSort(arr, start + 1);
    }

    // Helper function to find the index of the minimum element using recursion
    private static int findMinIndex(int[] arr, int minIndex, int current) {
        if (current >= arr.length) return minIndex;
        if (arr[current] < arr[minIndex]) {
            minIndex = current;
        }
        return findMinIndex(arr, minIndex, current + 1);
    }

    // Main method to test the recursive selection sort
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        recursiveSelectionSort(arr, 0);
        System.out.println("Sorted array: ");
        for (int i : arr) {
            System.out.print(i + " ");
        }
    }
}