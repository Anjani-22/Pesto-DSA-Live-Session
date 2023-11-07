// Overall Agenda : 
// subset sum problem
// - Q.) Print all n chars numbers using :  { a, b, c, d, e }
//         
// https://drive.google.com/drive/folders/1OJiLu-s8nWLnQYFlv11ujZRP1lbPL4Bj?usp=sharing
//https://forms.gle/M9Hf7MuqDJ3e256d9



// subset sum problem

// arr[] = {2,6,2,-4,0,1,-7} target = -11

// given an array check if there exists any subset with the target sum
// time:  2^N     space: N
function hasSubsetSumHelper(arr, target, i, currSum, isEmptySet){

    if(i==arr.length){
        return isEmptySet == false && target == currSum;
    }
    // include or exclude
   return hasSubsetSumHelper(arr, target,i+1, currSum+arr[i], false) || hasSubsetSumHelper(arr, target,i+1, currSum, isEmptySet);
}


function hasSubsetSum(arr, target){

    let isEmptySet = true;
    return hasSubsetSumHelper(arr, target, 0, 0, isEmptySet);
}

// console.log(hasSubsetSum([1,2,3], 0));


// Print all n chars  using :  { a, b, c, d, e }

// n=3 => {a,a,a} {a,a,b} {a,a,c} {a,a d} .....
// {b,b,b} {b,b,c}{b,b,d} ......

// approach

// t.c: 2^N * n where N is the length of s
// s.c: callstack max(N,n) + space of temp (n)  + space of res => (2^N * n) => 2^N * n
function printAllCombinationsHelper(s, n, i, temp, res){

    if(i==s.length){
        return;
    }

    if(temp.length == n){
        // push temp in result
        // create copy of temp
        res.push([...temp].join(""));
        //res.push(temp);
        return;
    }
    temp.push(s[i]);
    printAllCombinationsHelper(s, n,i, temp, res); 
    temp.pop();
    printAllCombinationsHelper(s, n,i+1, temp, res);

}

function printAllCombinations(s, n){

    let temp = [];
    let res = [];
    printAllCombinationsHelper(s,n,0,temp,res);

    return res;
}

console.log(printAllCombinations("abcd", 3));