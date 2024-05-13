function InsertionSort(arr){
    for( let i = 1 ; i < arr.length ; i++){
        let element = arr[i];
        let j;
        for(j = i - 1; j >= 0 ; j--){
            if(arr[j] > element){
                arr[j+1] = arr[j];
            }else{
                //arr[j] <= element
                break;
            }
        }
        arr[j+1] = element;
    }
}

let arr = [12,31,25,8,32,17];
InsertionSort(arr)
console.log(arr); //[ 8, 12, 17, 25, 31, 32 ]

let myArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(InsertionSort(myArray)); // undefined