/*
Introduction to heaps
Implementation of heaps
time and space complexity of heap operations
*/


/*
heap is a complete binary which is of two types

1) Max heap -> parent is always greather than child
2) Min heap -> parent is always less than child

*/

// const { Heap } = require('heap-js');
// const minHeap = new Heap();

// minHeap.push(1);
// minHeap.push(1);

// console.log(minHeap.pop());
// console.log(minHeap.pop());
// console.log(minHeap.pop());

// A class for Min Heap
class MinHeap
{
	// Constructor: Builds a heap from a given array a[] of given size
	constructor()
	{
		this.arr = [];
	}

	left(i) {
		return 2*i + 1;
	}

	right(i) {
		return 2*i + 2;
	}

	parent(i){
		return Math.floor((i - 1)/2)
	}
	
	getMin()
	{
		return this.arr[0]
	}
	
	insert(k)
	{
		let arr = this.arr;
		arr.push(k);
	
		// Fix the min heap property if it is violated
		let i = arr.length - 1;
		while (i > 0 && arr[this.parent(i)] > arr[i])
		{
			let p = this.parent(i);
			[arr[i], arr[p]] = [arr[p], arr[i]];
			i = p;
		}
	}

	// insertNew(node)
	// {
		
	// }

	size(){
		return this.arr.length;
	}
	
	// Method to remove minimum element (or root) from min heap
	extractMin()
	{
		let arr = this.arr;
		if (arr.length == 1) {
			return arr.pop();
		}
		
		// Store the minimum value, and remove it from heap
		let res = arr[0];
		arr[0] = arr[arr.length-1];
		arr.pop();
		this.MinHeapify(0); // perlocate down
		return res;
	}

	// A recursive method to heapify a subtree with the root at given index
	// This method assumes that the subtrees are already heapified
	MinHeapify(i)
	{
		let arr = this.arr;
		let n = arr.length;
		if (n === 1) {
			return;
		}
		let l = this.left(i);
		let r = this.right(i);
		let smallest = i;

		if (l < n && arr[l] < arr[i])
			smallest = l;
		if (r < n && arr[r] < arr[smallest])
			smallest = r;

		if (smallest !== i)
		{
			[arr[i], arr[smallest]] = [arr[smallest], arr[i]]
			this.MinHeapify(smallest);
		}
	}
}

// let h = new MinHeap();
// 	h.insert(3); 
// 	h.insert(2);
// 	h.deleteKey(1);
// 	h.insert(15);
// 	h.insert(5);
// 	h.insert(4);
// 	h.insert(45);
	
// 	console.log(h.extractMin() + " ");
// 	console.log(h.getMin() + " ");
	
// 	h.decreaseKey(2, 1); 
// 	console.log(h.extractMin());

/*
 - minimum cost to connect n ropes
 - to find medium in a running stream of integers
 - merge k sorted arrays
*/

function minCostRopes(arr){
	let minHeap = new MinHeap();
	for(let i=0;i<arr.length;i++){
		minHeap.insert(arr[i]);
	}
	let cost = 0;
	while(minHeap.size()>1){
		let first = minHeap.extractMin();
		let second = minHeap.extractMin();
		cost = cost+ first + second;
		minHeap.insert(first+second);
	}

	return cost;

}

console.log(minCostRopes([4, 3, 2, 6]));


function mergeKArrays(arr) {
    const output = [];
    const pq = new MinHeap();

    for (let i = 0; i < arr.length; i++)
        pq.insert([arr[i][0], i, 0]);

		// either you modify the existing insert function
		// modify before inserting


    while (!pq.isEmpty()) {
        const curr = pq.extractMin();
        const [value, row, col] = curr; // 
        output.push(value);

        if (col + 1 < arr[col].length)
            pq.insert([arr[row][col + 1], row, col + 1]);
    }

    return output;
}



class MedianFinder {
    constructor() {
        this.minHeap = []; // To store the greater half elements
        this.maxHeap = []; // To store the smaller half elements
    }

    addNum(num) {
        if (this.maxHeap.length === 0 || num < -this.maxHeap[0]) {
            this.maxHeap.push(-num);
            this.maxHeap.sort((a, b) => b - a); // Maintain max heap (negate values)
        } else {
            this.minHeap.push(num);
            this.minHeap.sort((a, b) => a - b); // Maintain min heap
        }

        // Balance the heaps
        if (this.maxHeap.length > this.minHeap.length + 1) {
            this.minHeap.push(-this.maxHeap.shift());
            this.minHeap.sort((a, b) => a - b);
        } else if (this.minHeap.length > this.maxHeap.length) {
            this.maxHeap.push(-this.minHeap.shift());
            this.maxHeap.sort((a, b) => b - a);
        }
    }

    findMedian() {
        const totalLength = this.minHeap.length + this.maxHeap.length;
        if (totalLength % 2 === 0) {
            return (this.minHeap[0] - this.maxHeap[0]) / 2;
        } else {
            return -this.maxHeap[0];
        }
    }
}

// Example usage
const arr = [5, 15, 10, 20, 3];
const medianFinder = new MedianFinder();

for (let i = 0; i < arr.length; i++) {
    medianFinder.addNum(arr[i]);
    console.log("Median at", i, "is:", medianFinder.findMedian());
}
