/*
bubble sort
selection sort
insertion sort
sorting and comparators in JS

https://forms.gle/HhVbMJ5b9xvbmq3P7

merge sort
quick sort

*/

// what is sorting?


// arr[] => arranging all the elements in asc or desc is known as sorting


// bubble sort

arr = [2,6,4,0,1]  
// a (left),b (right)  left <= right if (left>right) ->swap left and right

function bubbleSort(arr){

    let n = arr.length;

    for(let i=0;i<n-1;i++) // we need n-1 outer itertions
    {
        for(let j=0;j<n-1-i;j++){
            if(arr[j]>arr[j+1]){
                // swap
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    // t.c: N^2, s.c => constant
    return arr;
}

console.log(bubbleSort([2,6,2,4,0,1]));


// selection sort

function selectionSort(arr){
    let n = arr.length;

    // t.c: N^2, s.c: constant
    for(let i=0;i<n-1;i++){// n
        let  smallestIdx = i;
        for(let j=i+1;j<n;j++){// 
            if(arr[j]<arr[smallestIdx]){
                smallestIdx = j;
            }
        } // 0 1 2 3 4 
        [arr[i], arr[smallestIdx]] = [arr[smallestIdx], arr[i]];
        // swap arr[i] with arr[smallestIdx]
    }
    return arr;

}

console.log(selectionSort([0,1,2,3,4,5]));


// insertion sort
// t.c: N^2 worst case, N in best case (if the array is sorted)
// s.c : constant
function insertionSort(arr){

    let n = arr.length;

    for(let i=1;i<n;i++){
        let x = arr[i];
        let j = i-1;
        while(j>=0 && arr[j]>x){
            // right shifting
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1]=x;
    }
    return arr;
}

console.log(insertionSort([2,6,2,4,0,1]));


// comparators???

// how to sort the array in desc
// .sort.reverse()
// use comparators


// comparators are helper functions which allows you to modify the default behaviour of sort function.

function sortDescending(arr){

    arr.sort((a,b)=>{
        if(a>=b){
            return -1;
        }
        return 1;
    });

    return arr;

}

console.log(sortDescending([2,6,2,4,0,4,1]));

function comp(a,b){

    if(a>=b){
        // in favour of this
        return -1;
    }

    if(a<b){
        // we are against this
        return 1;
    }
    // if(a==b){
    //     // we are netural here
    //     return 0;
    // }

}


// arr = [2,-5,-4,3,4,6] sort the array on the basis of absolute values

//[2,3,4,-4,-5,6]

function sortAboslute(arr){

    let n = arr.length;

    arr.sort((a,b)=>{
        if(Math.abs(a)<=Math.abs(b)){
            return -1;
        }
        return 1;
    });

    return arr;
}

console.log(sortAboslute([2,-5,-4,3,4,6]));