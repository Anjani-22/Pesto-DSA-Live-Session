/*
Agenda
Introduction to arrays

Operations on Arrays 
- Insertion at ith position
- Deletion 


Problems on 1-D Arrays 
- Reverse the Array 
- Print SubArray 
- Print SubArrays 

Introduction to 2-D Arrays 

Problems on 2-D Arrays 
- Print the matrix 
- Spiral Order  
*/

// array

// Insert the element at ith position
// T.C: O(N)
// S.C: O(2)/O(3) => O(1)/constant





function insert(arr,x,pos){
    let n = arr.length;//4
    console.log(arr[n]);
    for(let i=n-1;i>=pos-1;i--){
        // do right shifting
        arr[i+1]= arr[i];
    }
    arr[pos-1]=x;
    return arr;
}

// console.log(insert(arr,3,3));

let arr = [1,2,3,4,5];

let pos = 2;
// T.C: O(N)
// S.C: O(1)
function deleteXPos(arr,pos){
    let n = arr.length;

    if(pos==0){
        throw new Error("invalid position");
    }
    // do left shifting
    for(let i=pos-1;i<n-1;i++){
        arr[i]=arr[i+1];
    }
    arr.length =arr.length-1;
    console.log(arr);
    return arr;
}

// console.log(deleteXPos(arr,pos));
  


// reverse the array

function reverseArray(arr){

    let l =0, r = arr.length-1;

    while(l<r){
        // swap arr[l] with arr[r]
        [arr[l], arr[r]] = [arr[r],arr[l]]
        l++;
        r--;
    }
    return arr;
}

//console.log(reverseArray([1,2,3,4,5]));

// let a = 2;
// let b =3;
// [a,b]=[b,a]
// console.log(a,b);

// Print SubArray
arr = [1,2,3,4,5]

// [3], [2,3,5]

function printSubarray(arr, start, end){

    let res = [];
    for(let i=start;i<=end;i++){
        res.push(arr[i]);
    }
    return res;
}


// printSubarray(arr, 1,3);

// print all subarrays

// T.C: N^3, S.C: O(N^3)
function printAllSubarrays(arr){

    let n = arr.length;
    let res = [];
    for(let i=0;i<n;i++){
        for(let j=i;j<n;j++){
            res.push(printSubarray(arr,i,j));
        }
    }
    return res;
}

console.log(printAllSubarrays([1,2,3]));


// Agenda, space complexity of return variables
