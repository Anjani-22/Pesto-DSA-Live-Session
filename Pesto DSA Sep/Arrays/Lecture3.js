/*

// Overall Agenda : 

// Problems on 1-D Arrays 
// - Print all Subarray Sums
// - Max Subarray Sum

// - Trapping Rain

// Problems on 2-D Arrays 
// - 1s and 0s 

session feedback : https://forms.gle/MG32gdbgz4EeA7Sw7

*/




// Print all Subarray Sums

// arr = [2,6,4,0,1,8,5];

arr = [1,2,3]; // 1, 1 2, 1 2 3   2, 2 3, 3
               // 1, 3, 6, 2, 5, 3

/*
Brute force approach

- generate all subarrays
    all the combinations of start and end
- pass the start and end point of any subarray to a function to find it's sum

T.C: O(N^3)
S.C: O(1)

    for(let i=0;i<n;i++)
        for(let j=i;j<n;j++)
            print(Sum(arr,i,j))

*/

/*
Trapping rain water problem

Given an array arr[] of N non-negative integers representing the height of blocks. 
If width of each block is 1, compute how much water can be trapped between the blocks during the rainy season. 

N = 6
arr[] = {3,0,0,2,0,4}

*/

// T.C: N^2, S.C: constant
function maxRainwater(arr, N){
    let sum = 0;
    for(let i=1;i<N-1;i++){
        let maxL = 0;
        let maxR = 0;
        for(let j=i-1;j>=0;j--){
            maxL = Math.max(arr[j],maxL);
        }
        for(let j=i+1;j<N;j++){
            maxR = Math.max(arr[j],maxR);
        }
        if(Math.min(maxL,maxR)-arr[i]>0){
            sum = sum + Math.min(maxL,maxR)-arr[i];
        }
    }
    return sum;
}

console.log(maxRainwater([3,0,0,2,0,4], 6))

// T.C: N
// S.C: N
function maxRainwater2(arr, N){
    // prefix and suffix concept
    let maxLeft = new Array(N).fill(0);// prefix
    let maxRight = new Array(N).fill(0); // suffix

    maxLeft[0]=arr[0];
    for(let i=1;i<N;i++){
        maxLeft[i] = Math.max(maxLeft[i-1],arr[i]);
    }
    maxRight[n-1]=arr[n-1];
    for(let i=n-2;i>=0;i--){
        maxRight[i] = Math.max(maxRight[i+1],arr[i]);
    }
    let waterTrapped = 0;
    for(let i=1;i<N-1;i++){
        if(Math.min(maxLeft[i-1],maxRight[i+1]) - arr[i]>0){
            waterTrapped = waterTrapped + Math.min(maxLeft[i-1],maxRight[i+1]) - arr[i];
        }
    }
    return waterTrapped;
}

