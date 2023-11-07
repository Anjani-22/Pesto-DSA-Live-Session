// Problems on Hashmaps
// - Subarray with Sum Zero
// - Subarrays with Sum K
// - A B C D
// feedback -> https://forms.gle/8BYQ68gS5NiHDX9B6

// Return true if there exists any subarray with sum 0..

// arr = [1,4,5,-3,-6,7,1,2] => [4,5,-3,-6] whose sum is 0??

// brute force solution
// finding all subarray sum and comparing with 0
// T.C: N^2  S.C: constant

// optimal solution
// prefix sum

// arr = [1,4,5,-3,-6,7,1,2]

// prefixSum = [1,5,10,7,1,8,9,11]

// T.C: O(N), S.C: O(N)
function subarrayZeroSum(arr, k){

    let n = arr.length;
    let prefixSum = new Array(n);

    prefixSum[0] = arr[0];
    for(let i=1;i<n;i++){
        prefixSum[i] = prefixSum[i-1] + arr[i];
    }
    let count = 0;
    let prefixSet = new Set();
    for(let i=0;i<n;i++){
        if(prefixSet.has(prefixSum[i]-k) || prefixSum[i] == k){
            count++;
        } else {
            prefixSet.add(prefixSum[i]);
        }
    }

    return count;
}

console.log(subarrayZeroSum([1,1,4,-2,5],3));


// length of longest subarray with sum 0

// o(n), o(n)
function longestSubarrayZeroSum(arr){

    let n = arr.length;
    let prefixSum = new Array(n);

    prefixSum[0] = arr[0];
    for(let i=1;i<n;i++){
        prefixSum[i] = prefixSum[i-1] + arr[i];
    }

    let prefixMap = new Map();
    let len = 0, maxlen = 0;

    for(let i=0;i<n;i++){
        if(prefixMap.has(prefixSum[i])){
            len = i - prefixMap[prefixSum[i]];
            maxlen = Math.max(len,maxlen);
        } else {
            prefixMap.set(prefixSum[i],i);
        }
    }
    return maxlen;
}

// check in an array if a+b = c+d, return true else return false

// [1,2,5,6,0,3] => (1+5) (6+0), (1+2) (0,3) ....

// brute force -> 4 nested loops 

// optimise this using hashmap/hashset

// T.C: N^2  S.C: N^2
function findQuadraplet(arr){

    let n = arr.length;
    let pairSumMap =  new Map();

    for(let i=0;i<n-1;i++){
        for(let j=i+1;j<n;j++){
            let key = arr[i]+arr[j];
            if(pairSumMap.has(key)){
                let [p,q] = pairSumMap.get(key);
                let indexSet = new Set();
                indexSet.add(i);
                indexSet.add(j);
                indexSet.add(p);
                indexSet.add(q);
                if(indexSet.size==4){
                    return true;
                }
                // if((p!=i && p!=j) && (q!=i && q!=j))
                // {
                //     return true;
                // }
                // check for unique indices
            } else {
                pairSumMap.set(key,[i,j]);
            }
        }
    }
    return false;
}
console.log(findQuadraplet([5,2,5,6,8,5,5]));