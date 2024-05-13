package BUBBLESORT;

public class bubbleSort {
    public static void bubblesort(int[] arr) {
        int n = arr.length;
        for(int i = 0 ; i < n ; i++ ){
            boolean isSwapped = false;
            for(int j = 0 ; j < n - i - 1 ; j++){
                if(arr[j] > arr[j+1]){
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    isSwapped = true;
                }
            }
            // if no swapping occurs then array is sorted
            if(isSwapped == false){ // return from function as array is sorted
                return;
            }
        }
    }

    public static void main(String[] args) {
        int arr[] = {12,31,25,8,32,17};
        bubblesort(arr);
        for(int i = 0 ; i < arr.length ; i++){
            System.out.println(arr[i]);
        }
    }
};
