package BUBBLESORT;

public class RecursiveBubbleSort {
    // Method to perform recursive bubble sort
    public static void recursiveBubbleSort(int[] arr, int n) {
        // Base case: If the size is 1, return.
        if (n == 1) {
            return;
        }

        // Make a single pass and bubble the largest element to the end.
        for (int i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap arr[i] and arr[i + 1]
                int temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }

        // Largest element is fixed, recur for remaining array
        recursiveBubbleSort(arr, n - 1);
    }

    // Main method to test the recursive bubble sort
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        recursiveBubbleSort(arr, arr.length);
        System.out.println("Sorted array: ");
        for (int i : arr) {
            System.out.print(i+ " ");
        }
    }
}
