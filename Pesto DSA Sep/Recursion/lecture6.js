// Overall Agenda : 
// Introduction to Recursion 
// Given an array of integers, find the sum
// Problems on Recursion
//        - Nth fibonacci number 
//        - Palindrome
//        - Power



// recursion  -> function calling itself is recursion

// sumN(N) = N + sumN(N-1)
// T.C: O(N), S.C: O(N)

// function sumN(N){

//     if(N<=0){
//         return 0;
//     }
    
//     return N + sumN(N-1); // main logic
// }

// console.log(sumN(-4));

// fibonacci series => 

// [0,1,1,2,3,5,8..]

// T.C: 2^N, S.C: N

// function NthFibonacci(N){

//     if(N==1 || N==2){
//         return N-1;
//     }
//     return NthFibonacci(N-1) + NthFibonacci(N-2);
// }

// console.log(NthFibonacci(5));

// N=1,   N=2
// [0,     1,   1,   2,   3]


// is a string is paindrome
//          r    l
// [a   b   b    b   b     a]

// function helper(s, l, r){

//     if(l>=r){
//         return true;
//     }
//     // if(s[l]!=s[r]){
//     //     return false;
//     // }
//     return s[l]==s[r] && helper(s, l+1, r-1);
// }

// function isPalindrome(s){

//     return helper(s,0,s.length-1);
// }


// console.log(isPalindrome("abbcdbba"));


// power of 2, find 2^n

// powerTwo(N) = 2 * PowerTwo(N-1)

// A^2 => A*A

// T.C: LogN, S.C: logN
function powerOfTwo(N){

    if(N==0){
        return 1;
    }

    let x = powerOfTwo(Math.floor(N/2));

    if(N%2==0){
        return x*x;
    }

    return 2*x*x;
}

console.log(powerOfTwo(5));

