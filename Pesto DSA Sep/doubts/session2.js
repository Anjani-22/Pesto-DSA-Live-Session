// discussed in today's class

// maze path using recursion
// subsequence using recursion
// sudoku
// count sort
// 4 sum problem


// maximum points in a line
// print n digits
// print all permutations
// flood fill


// arr = ["a", "a" , "b",  "a", "c", "r", "b"];

// {
//     a:3,
//     b:2,
//     c:1
// }

// freqArr
// console.log(charCodeAt('A')+1);
function countSort(arr){
    let freqArr = new Array(256).fill(0);
    for(let i=0;i<arr.length;i++){
        let index = arr.charCodeAt(i);
        freqArr[index]++;
    }
    let temp = "";
    for(let i=0;i<256;i++){
        while(freqArr[i]>0){
            temp = temp + String.fromCharCode(i);
            freqArr[i]--;
        }
    }
    return temp;
}
// console.log(countSort("abcdabcd"));

// compression technique

// [10000, 100001, 100002,....1000010]
// [1,2,3, 30000, 100000, 120000]
// a a a, b b, c .....



// reverse [abcd] -> 

// function reverse(str, l, r){

//     if(l<r){
//         // [str[l], str[r]] = [str[r], str[l]];
//         let temp = str.charAt(l);
//         str[l] = str.charAt(r);
//         str[r] = temp;
//         //console.log(str[r]);
//         //console.log(str);
//         str = reverse(str, l+1, r-1);
//     }
//     return str; 
// }

// let str = "acd";
// console.log(str[0]);

function reverse(str, r){
    if(r==0) {
        return str[r];
    }
    return str[r] + reverse(str,r-1);
}

// function reverseString(str) {
//     if(str.length == 0 || str.length == 1) {
//       return str
//     }
    
//     return str[str.length-1] + reverseString(str.substring(0,str.length-1))
// }

// console.log(reverse("abcdefgh",7));

let r = 1/0;

console.log(r?1:0);