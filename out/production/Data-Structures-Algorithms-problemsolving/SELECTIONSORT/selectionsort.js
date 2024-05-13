function selectionSort(arr){
    let n = arr.length;
    for(let i = 0 ; i < n - 1 ; i++){
        let min_idx = findMidElement(arr,i)
        if(min_idx != i){
            let temp = arr[i];
            arr[i] = arr[min_idx];
            arr[min_idx] = temp;
        }
    }
}

function findMidElement(arr,i){
    let min_idx_el = i;
    for(let j = i + 1;  j < arr.length ; j++){
        if(arr[j] < arr[min_idx_el]){
            min_idx_el = j;

        }
    }
}

const arr = [9,5,6,3,7,9,4,2,6]

selectionSort(arr);

console.log(arr);
