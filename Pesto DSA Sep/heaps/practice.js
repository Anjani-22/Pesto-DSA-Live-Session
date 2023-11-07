


// var str = "abcde";

// // slice in arrays and slice in strings are same

// // let arr = [1,2,3,4,5];
// // let newArr = arr.slice(1,3);
// // console.log(arr);
// // console.log(newArr);

// // let newStr = str.slice(1,3);
// // console.log(str);
// // console.log(newStr);


// // let newStr = str.split("").sort((a,b)=>(a > b ? -1 : 1)).join();
// // console.log(newStr);

// let newStr = str.split("").sort((a,b)=>(b.charCodeAt(0)-a.charCodeAt(0)));
// console.log(newStr);

// str = "Abc"

// console.log(str.indexOf("d"));
// // let arr  = [1,2,3];
// // arr.sort((a,b)=>b-a);
// // console.log(arr);

// // console.log("b".charCodeAt(0)-"a".charCodeAt(0));

// // substring
// str = "abcdef"

// // a, ab, abc, abcd, abcde, abcdef
// // b, bc .....bcdef

// str = "abcdef"
// // subsequence
// // it may or maynot be continous
// // a, acd, acf, adf , bdf,....

// // prefix and suffix

// str = "programming";

// let prefix = ["p", "pr", "pro", "prog.."];
// let suffix = ["g", "ng", "ing", "ming...."];

// str[0] = 'n'

// console.log(str);

// // strings are innmutable in js

/*
- iterate over all the characters
- check if current char is a space and next char is non space
- convert the next char into uppercase
*/
function capitaliseFirstCharacter(str){

    if(str==""){
        return str;
    }
    let newStr = "";
    if(str[0]!=""){
        newStr = str[0].toUpperCase();
    }

    // time: N
    // space: N

        
    // i love programming
    //   ^
    for(let i=1;i<str.length;i++){
        if(str[i] == " " && str[i+1]!=" "){
            newStr = newStr + " " + str[i+1].toUpperCase();
            i=i+1;
        } else {
            newStr = newStr + str[i];
        }
    }
    return newStr;
}

// console.log(capitaliseFirstCharacter("i love programming"));
// console.log(capitaliseFirstCharacter(""));


// binary search