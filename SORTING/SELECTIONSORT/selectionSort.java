package SELECTIONSORT;

public class selectionSort {

    public static void selectionsort(int[] arr) {
        for(int i = 0; i < arr.length - 1; i++){
            int min_idx = findMinElement(arr, i); // 
            if (min_idx != i) { 
                int temp = arr[i]; //arr[0](5) 
                arr[i] = arr[min_idx]; //arr[0](4)
                arr[min_idx] = temp;// arr[1] (5)
            }
        }
    }

    public static int findMinElement(int arr[] , int i) {
        int min_el_idx = i;//1
        for (int j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[min_el_idx]){// arr[2] (3) < arr[1] (5) min idx = 2
                min_el_idx = j;
            }
        }
        return min_el_idx;
    }

    public static void main(String[] args){
        int[] arr = {5,4,3,2,1};
        selectionsort(arr);
        for(int i = 0; i < arr.length ; i++){
            System.out.println(arr[i]);
        }
    }
}
