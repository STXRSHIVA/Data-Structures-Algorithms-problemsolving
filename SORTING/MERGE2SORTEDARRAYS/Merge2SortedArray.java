package MERGE2SORTEDARRAYS;

public class Merge2SortedArray {
    public static void merge(int[] nums1, int m, int[] nums2, int n) {
        // actual length of nums1 is m+1, which we will use to store the final result
        int i = 0,j = 0,k = 0;
        int[] result = new int[m+n];
        while (i < m && j < n) { // 0 , 0
            if(nums1[i] <= nums2[j]){ 
                result[k] = nums1[i]; 
                k++;
                i++;
            }else{
                result[k] = nums2[j];
                k++;
                j++;
            }
        }
        // if i == m , nums1 is exhausted
        // we have elements left in nums2, lets fill that directly
        while (j < n) {
            result[k] = nums2[j];
            k++;
            j++;
        }
        // if j == n , nums2 is exhausted
        while (i < m) {
            result[k] = nums1[i];
            k++;
            i++;
        }

        k = 0;
        while(k < m + n){
            nums1[k] = result[k];
            k++;
        }
    }

    public static void main(String[] args) {
        int[] nums1 = {1,2,3,0,0,0};
        int m = 3;
        int[] nums2 = {2,5,6};
        int n = 3;
        merge(nums1,m,nums2,n);
        for (int i = 0; i < nums1.length; i++) {
            System.out.println(nums1[i]);
        }
    }
}