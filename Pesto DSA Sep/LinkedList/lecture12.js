/*
    linkedList and arrays
    operations of Linked List

    insert at end
    insert at front

    delete at end
    insert at x position

    problems
        finding the middle node
        reversng a LL
*/



/*
array elements are continous, linkedlist elements are present at random positions
linked list are dynamic are nature, in arrays we have to predefine the size of the array
accessing any array elements is constant time, accessing any element can take O(N) time
*/


class LinkedList {

    constructor(){
        this.head = null;
        this.size = 0;
    }

    printLinkedList() {
        let currNode = this.head;
        let res = " ";
        while(currNode!=null){
            res = res + " " + currNode.value;
            currNode = currNode.next;
        }
        console.log(res);
        return;
    }

    insertAtEnd(value){ // O(N)
        let newNode = new Node(value);
        this.size = this.size+1;
        if(this.head == null){
            this.head = newNode;
            return this.head;
        }
        let currNode = this.head;
        while(currNode.next!=null){
            currNode = currNode.next;
        }
        currNode.next = newNode;
        return this.head;
    }

    insertAtFront(value){
        let newNode = new Node(value);
        this.size = this.size+1;
        if(this.head == null){
            this.head = newNode;
            return this.head;
        }
        newNode.next = this.head;
        this.head = newNode;

        return this.head;
    }

    deleteAtEnd(){
        if(this.head == null){
            throw new Error("Linked List is empty");
        }
        this.size = this.size-1;
        if(this.head.next==null){
            this.head= null;
            return this.head;
        }
        
        let currNode = this.head;
        while(currNode.next.next!=null){
            currNode = currNode.next;
        }
        currNode.next = null;
        return this.head;

    }

    deleteFromFront(){

        if(this.head == null){
            throw new Error("Linked List is empty");
        }
        this.size = this.size-1;

        this.head = this.head.next;
        return this.head;
    }

    insertAtXPos(value, pos){

        // if(pos<0){
        //     throw new Error("Enter a valid pos");
        // }
        // 1 X 2 3
        // pos 0 means first element of ll
        // pos 1 means after the first element
        // pos 2 means after the second element

        if(pos <= 0){
            return this.insertAtFront(value);
        }
        let newNode = new Node(value);
        let currNode = this.head;
        let currCount = 0;
        // 1 2 3 4 5
        // pos = 10000
        // 1 2 3 4 5 6
        while(currNode.next && currCount<pos-1){
            currNode = currNode.next;
            currCount++;
        }
        // 1 3  5
        let nextNode = currNode.next;
        currNode.next = newNode;
        newNode.next = nextNode;
        return this.head;
    }

    deleteFromXPos(pos){
        if(pos==0){
            return this.deleteFromFront();
        }
        let currNode = this.head;
        let currCount = 0;
        while(currNode.next.next && currCount<pos-1){
            currNode = currNode.next;
            currCount++;
        }
        currNode.next = currNode.next.next;
        return this.head;
    }

    findingMiddleNode(){

        // hair and tortoise approach (fast and slow pointer)

        if(this.head == null){
            throw new Error("Empty linked list");
        }

        let slow = this.head;
        let fast = this.head;

        while(fast!=null && fast.next!=null){
            fast = fast.next.next;
            slow = slow.next;
        }

        return slow.value;

    }

    reverse(){

        if(this.head == null){
            return this.head;
        }
        //   null<-1   <-   2   ->   3   ->  4  -> null
        //                          prev      curr
        let currNode = this.head;
        let prevNode = null;
        let nextNode = currNode.next;

        while(nextNode!=null){
            currNode.next = prevNode; /// reversal of link
            prevNode = currNode;
            currNode = nextNode;
            nextNode = nextNode.next;
        }

        this.head = currNode;
        currNode.next = prevNode;
        return currNode;
    }


    printSize(){
        console.log(this.size);
    }

}


class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

let l1 = new LinkedList();
l1.insertAtEnd(2);
l1.insertAtEnd(3);
// l1.insertAtFront(1);
// l1.insertAtFront(0);

l1.printLinkedList();
l1.reverse();
l1.printLinkedList();


// console.log("before deletion")
// l1.printLinkedList();
// l1.deleteAtEnd();
// l1.deleteAtEnd();
// l1.deleteFromFront();
// console.log("after deletion")
// l1.printLinkedList();
// l1.insertAtXPos(10,1000);
// console.log("after inserting at x position");
// l1.printLinkedList();
// l1.deleteFromXPos(0);
// console.log("after deleting at x position");
// l1.printLinkedList();

