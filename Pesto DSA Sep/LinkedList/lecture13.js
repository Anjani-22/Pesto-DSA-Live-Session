/*
Find Intersection
Check Palindrom

Detect Cycle
Start of Cycle
remove cycle from the ll
*/


// class LinkedList {

//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }

//     printLinkedList() {
//         let currNode = this.head;
//         let res = " ";
//         while(currNode!=null){
//             res = res + " " + currNode.value;
//             currNode = currNode.next;
//         }
//         console.log(res);
//         return;
//     }

//     insertAtEnd(value){ // O(N)
//         let newNode = new Node(value);
//         this.size = this.size+1;
//         if(this.head == null){
//             this.head = newNode;
//             return this.head;
//         }
//         let currNode = this.head;
//         while(currNode.next!=null){
//             currNode = currNode.next;
//         }
//         currNode.next = newNode;
//         return this.head;
//     }



//     printSize(){
//         console.log(this.size);
//     }

// }


// class Node{
//     constructor(val){
//         this.value = val;
//         this.next = null;
//     }
// }

function countNodes(head){

    let currNode =  head;
    let count = 1;
    while(currNode!=null){
        currNode = currNode.next;
        count = count+1;
    }

    return count;
}

function Intersection2LL(head1, head2){

    /*
       c1  = count the number of nodes in list1
       c2 = count the number of nodes in list2
        diff = abs(c1-c2)
        if(c1>c2) -> move head1 by diff steps else
                     move head2 by diff steps
        move both head1 and head2 simulatnaously
        if they both point to the same node return the node.
        else return null
    */

    let c1 = countNodes(head1);
    let c2 = countNodes(head2);

    let diff = Math.abs(c1-c2);
    let curr1 = head1;
    let curr2 = head2;
    if(c1>c2){
        // move head1 by diff number of steps
        while(curr1!=null && diff>0){
            curr1 = curr1.next;
            diff--;
        }
    } else {
        // move head2 by diff number of steps
        while(curr2!=null && diff>0){
            curr2 = curr2.next;
            diff--;
        }
    }

    while(curr1!=null && curr2!=null){
        if(curr1===curr2){
            return curr1;
        }
        curr1 = curr1.next;
        curr2 = curr2.next;
    }
    return null;
}




// check if a LL is a palindrome

/*
approach:
traverse the LL till mid point,
reverse the second half and then we compare the first half and second half

traverse the LL and create a copy of the original LL
reverse the copy
compare the original and the copy

time: N
space: 1

time: N
space: N
*/


// detecting a cycle in a LL

/*
   1->2->3->4->5
            |  |
            7<-6

    hashset -> [1,2,3,4,5,6,7] this is the node address.

    yes we have a cycle
    return true if cycle exists, else return false

    approach1:

    hashset with node as the element
    time: N   space: N

    approach2:
    slow and fast pointer

*/
// T.C: N, S.C: 1
function detectCycleLL(head){
    let slow = head;
    let fast = head;

    while(fast!=null && fast.next!=null){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            slow = head;
            return findStartPoint(slow, fast);
        }
    }
    return false;
}


                       
function findStartPoint(t1, t2){
    while(t1!=null && t2!=null){
        t1 = t1.next;
        t2 = t2.next;
        if(t1===t2){
            return t1;
        }
    }
}
// find the start point of cycle in a ll






// remove the cycle from the LL
//https://www.geeksforgeeks.org/find-first-node-of-loop-in-a-linked-list/