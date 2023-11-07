/*
Agenda

    Queues and it's operations
    Queues using arrays
    Queues using LinkedList

    How to implement stack using queues
    How to implement queue using stacks

    sliding window (max window sum of size k)
*/


// First In First Out
// enqueue
// Dequeue
// peek
// isEmpty
// implementation of queue using arrays

class QueueA{

    constructor(){
        this.queue = [];
    }


    enqueue(x){ // 1

        this.queue.push(x);
    }

    dequeue(){ // N

        if(this.isEmpty(this.queue)){
            throw new Error ("queue is empty ");
        }
        //let x = this.q
        return this.queue.shift();

        // this.queue = this.queue.slice(1,this.queue.length);
        // console.log(this.queue);
    }

    peek(){

        if(this.isEmpty()){
            throw new Error ("queue is empty ");
        }
       return this.queue[0];
    }


    isEmpty(){

        return this.queue.length==0;
    }

    size(){
        return this.queue.length;
    }
}
// [9]
// let queue = new Queue();
// queue.enqueue(3);
// queue.enqueue(6);
// queue.enqueue(9);
// console.log(queue.peek());
// console.log(queue.dequeue());
// console.log(queue.peek());
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();


// queue using linked list


class Node{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class QueueL{

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //    h           t
    //    2->3->4->5->6

    enqueue(x){ 
        let newNode = new Node(x);
        this.length++;
        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        this.tail = this.tail.next;
    }

    dequeue(){ 
        if(this.isEmpty()){
            throw new Error ("queue is empty ");
        }
        this.length--;
        let data = this.head.val;
        this.head = this.head.next;

        if(this.head == null){
            this.tail = null;
        }
        return data;
    }

    peek(){
        if(this.isEmpty()){
            throw new Error ("queue is empty ");
        }
        let data = this.head.val;
        return data;
    }


    isEmpty(){
        // if(!this.head && !this.tail){
        //     return true;
        // }
        return this.length == 0;
        //return false;
    }

    size(){
        return this.length;
    }
}

// let queue1 = new QueueL();
// queue1.enqueue(3);
// queue1.enqueue(6);
// queue1.enqueue(9);
// console.log(queue1.peek());
// console.log(queue1.dequeue());
// console.log(queue1.size());
// queue1.dequeue();
// queue1.dequeue();
// console.log(queue1.size());

// How to implement stack using queues


// push -> enqueue
// pop -> dequeue

/*
push(5)
push(6)
push(7)
push(8)
pop()

costly enquue

q1             q2
[8,7,6,5] =>   [7,6,5]

costly dequee


*/
// impleemting stack using queue
class Stack{

    constructor(){
        this.q1 = new QueueA();
    }

    push(x){
        this.q1.enqueue(x);
    }

    pop(){
        this.q2 = new QueueA();

        while(this.q1.size()>1){
            this.q2.enqueue(this.q1.dequeue());
        }
        let data = this.q1.dequeue();
        while(this.q2.size()>0){
            this.q1.enqueue(this.q2.dequeue());
        }

        return data;
    }
}

let stack = new Stack();

stack.push(3);
stack.push(6);
stack.push(7);
console.log(stack.pop());
console.log(stack.pop());
// console.log(stack.pop());


// implement queue using stacks

class Queue {


    enqueue(){
        // with the help of push and pop
    }

    dequeue(){

    }
}

// enqueue
// dequeue


//  s1      s2
// [3,4,5]     []

// deque costly enqueue as it is
// 1 2 3
// [3 2]    []

// enqueue costly, deque as it is
//  s1          s2
//[3,4,5,6]      []

// insert 5