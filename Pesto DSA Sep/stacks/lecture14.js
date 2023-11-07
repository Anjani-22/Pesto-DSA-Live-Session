/*
    stacks
    operations of stacks using arrays
    operations of stacks using linkedList

    sorting of an array using stacks
    next greater element
        
       
    [4, 2, 6, 4, 0, 1]
nge [6,-1,-1, 1,-1]

    curr = 
    stack = [6, 4, 0] 

    nge of 2 is 6
    nge of 0 is 1


*/

// stack follows LIFO mechanism (Last IN First Out)

/*
operations on stack
- push
- pop
- peek
*/

// class Stack {
//     constructor(){
//         this.stack = []
//     }

//     push(element){
//         this.stack.push(element);
//     }

//     pop(){
//         if(this.stack.length==0){
//             throw new Error("Stack is already empty");
//         }
//         return this.stack.pop();
//     }

//     peek(){
//         if(this.stack.length == 0){
//             throw new Error("Stack is already empty");
//         }
//         return this.stack[this.stack.length-1];
//     }

//     print(){
//         console.log(this.stack);
//     }

//     isEmpty(){
//         return this.stack.length == 0;
//     }
// }

// let stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);

// stack.print(); // [1,2,3]

// console.log(stack.peek()); // 3

// console.log(stack.pop()); // 3

// stack.print();// [1,2]

class Node{
    constructor(value){
        this.val = value
        this.next = null;
    }
}

class Stack {

    constructor(){
        this.head = null;
        this.length = 0;
    }

    push(val){
        const newNode = new Node(val);
        this.length = this.length+1;
        if(this.head == null){
            this.head= newNode;
            //return this.head;
            return;
        } 
        newNode.next = this.head;
        this.head = newNode;
    }

    pop(){
        if(this.head==null){
            throw new Error("Stack is already empty");
        }
        let value = this.head.val;
        this.head = this.head.next;
        this.length = this.length-1;
        return value;
    }

    peek(){
        if(this.head==null){
            throw new Error("Stack is already empty");
        }
        return this.head.val;
    }

    isEmpty(){
       return this.head == null; 
    }

    print(){
        let curr = this.head;
        while(curr!=null){
            console.log(curr.val);
            curr = curr.next;
        }
        console.log("print finished");
    }

}


// let stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.print();
// console.log(stack.peek());
// stack.pop();
// stack.print();


// balanced parathesis

// ([({)})] -> not balanced
//     ]} -> balanced

// {
function balancedParanthesis(str){

    let stack = [];
    for(let i=0;i<str.length;i++){
        if(str[i]== '(' || str[i] == '{' || str[i]=='['){
            stack.push(str[i]);
        } else {
            let lastIdx = stack.length-1;
            if(str[i]==')' && stack[lastIdx]!='('){
                return false;
            }
            if(str[i]=='}' && stack[lastIdx]!='{') {
                return false;
            }
            if(str[i]==']' && stack[lastIdx]!='[') {
                return false;
            }
            stack.pop();
        }
    }
   // console.log(stack.length);
    if(stack.length==0){
        return true;
    }

    return false;
   
}
// console.log(balancedParanthesis("[()]"));


//  => 

// stack1 => [0, 2, 2, 4, 6]
// stack2 = []

// [2,6,2,4,0,1]
// stack1 = [6, 4, 2, 2] 
// stack2 = []

// N^2, N

function sortArrayUsingStacks(arr){
    let stack1 = new Stack();
    let stack2 = new Stack();
    for(let i=0;i<arr.length;i++){
        while(stack1.isEmpty()==false && stack1.peek()<=arr[i]){
            let temp = stack1.pop();
            stack2.push(temp);
        }
        stack1.push(arr[i]);
        while(stack2.isEmpty()==false){
            stack1.push(stack2.pop());
        }
    }
    let res = [];
    while(stack1.isEmpty()==false){
        res.push(stack1.pop());
    }
    return res;
}

console.log(sortArrayUsingStacks([0, 2, 2, 4, 6]));