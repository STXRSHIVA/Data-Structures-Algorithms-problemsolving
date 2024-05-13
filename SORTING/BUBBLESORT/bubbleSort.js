function bubbleSort(arr){
    let n = arr.length;
    for(let i = 0; i < n; i++){
        let isSwapped = false;
        for(let j = 0; j < n - i - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true;
            }
        }

        if(isSwapped == false) return;
    }
}

const arr = [12,31,25,8,32,17];
bubbleSort(arr)
console.log(arr);
