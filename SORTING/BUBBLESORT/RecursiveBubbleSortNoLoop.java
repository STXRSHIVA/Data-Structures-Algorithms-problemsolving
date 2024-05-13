package BUBBLESORT;

public class RecursiveBubbleSortNoLoop {
    // Recursive method to perform bubble sort
    public static void recursiveBubbleSort(int[] arr, int end) {
        if (end <= 1) return; // Base case: if the array size is 1 or less, it's sorted.

        // Recursive function to bubble up the largest element in the current pass
        bubble(arr, 0, end);

        // After the largest element has been bubbled to the end, sort the remaining array
        recursiveBubbleSort(arr, end - 1);
    }

    // Helper function to bubble up the largest element using recursion
    private static void bubble(int[] arr, int current, int end) {
        if (current < end - 1) {
            if (arr[current] > arr[current + 1]) {
                // Swap if current element is greater than the next
                int temp = arr[current];
                arr[current] = arr[current + 1];
                arr[current + 1] = temp;
            }
            bubble(arr, current + 1, end); // Recursive call to bubble the next element
        }
    }

    // Main method to test the recursive bubble sort without loops
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        recursiveBubbleSort(arr, arr.length);
        System.out.println("Sorted array: ");
        for (int i : arr) {
            System.out.print(i + " ");
        }
    }
}
