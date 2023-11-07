

// Overall Agenda : 
// Introduction to Hashing -> done


// Problems on Hashmaps
//        Frequency of Numbers - 1
//        - First Non Repeating Element
//        - Sum Pair
//        - Difference Pair
//        - Group Anagrams

// feedback: https://forms.gle/1FPVjgRUBWssaULq9


// the task is to find which row has maximum number of 1

// observations : each row is sorted.
// let arr = [


//     [0,0,1,1,1], //count = 3, rowIdx = 0
//     [0,0,0,1,1], //count = 4, rowIdx = 2
//     [0,1,1,1,1], 
//     [0,0,0,0,1]
// ]

// can we optimise this?

// appraoch 1 : iterate each row and update the max count -> N*M
// appraoch 2: iterate each row using binary search -> NlogM
// approach 3: start iterating from last column and move to left whenever 1 is seen
             // keep updating the count and rowIdx   -> N+M


// function maxOne(matrix){
//     let rows = matrix.length;
//     let cols = matrix[0].length;
//     let row = 0, col = cols-1;
//     let minCol = Infinity;
//     let rowIdx = 0;
//     while(row<rows && col>=0){
//         if(matrix[row][col]==0){
//             row++;
//         } else {
//             col--;
//         }
//         if(col<minCol){
//             minCol = col;
//             rowIdx = row;
//         }
//     }
//     console.log(minCol, " ",rowIdx);
// }

// maxOne(arr);


/*
unordered hashmap -> 99% of time this is used

hashmap is a key-value container
every key is unique
operations like insertion, deletion, searching and updation are O(1)

for ordered map, the above operations would take logN time
*/

// given an array, find the freq of each element in the array
// [1,2,1]


// function findFrequency(arr){

//     let freqMap = new Map();

//     for(let i=0;i<arr.length;i++){

//         if(freqMap.has(arr[i])){
//             let oldFreq = freqMap.get(arr[i]);
//             freqMap.set(arr[i],oldFreq+1);
//         } else{
//             freqMap.set(arr[i],1);
//         }
//     }
//     //console.log(freqMap);
//     for(let [key,value] of freqMap.entries()){
//         console.log(`key is ${key} and value is ${value}`)
//     }
//     return freqMap;

// }
// findFrequency(arr);

// find the first non repeating element
// T.C: N, S.C: N

// let arr = [2,6,2,4,6,1,1,7,9];

// function firstNonRepeating(arr){

//     let freqMap = findFrequency(arr);

//     for(let i=0;i<arr.length;i++){
//         if(freqMap.get(arr[i])==1){
//             return arr[i];
//         }
//     }
// }

// console.log(firstNonRepeating(arr));

// given an array check if there exists any pair with  sum == x

// let x = 7;
// let arr=[2,6,2,4,0,1]

// ans is yes bcz of 6,1

/// brute force solution -> check for all pairs (N^2) time, Space is constant

// t.c: N
// s.c: N
// function findPairSum(arr, x){

//     // let indexMap = new Map();
//     let indexSet = new Set();
//     for(let i=0;i<arr.length;i++){
//         if(indexSet.has(x-arr[i])){
//             return true;
//         } else {
//             indexSet.add(arr[i]);
//         }
//     }
//     return false;
// }

// console.log(findPairSum(arr,x));


// group anagrams
let arr =  ["triangle", "integral", "abc", "cba", "bca", "def"];


// T.C: N*SlogS
// S.C: N*S
function generateKey(str){
    return str.split("").sort().join("");
}
function groupAnagrams(arr){
    let anagramMap = new Map();
    for(let i=0;i<arr.length;i++){
        let key = generateKey(arr[i]);
        if(anagramMap.has(key)){
            let anagramArr = anagramMap.get(key);
            anagramArr.push(arr[i]);
            anagramMap.set(key,anagramArr);
        } else {
            let anagramArr = [arr[i]];
            anagramMap.set(key,anagramArr);
        }
    }

    for(let [key,val] of anagramMap.entries()){
        console.log(val);
        console.log(`key is ${key} and value is ${val}`);
    }
}

groupAnagrams(arr);


