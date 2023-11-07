// bst

/*
what is bst

all the elements with less value than root would be on left side
all the elements with higher value than root would be on right side

search for an element in a bst??

- compare root with x, 
 if x is greater search in right subtree
 if x is smaller search in left subtree
- if x is equal to root return true

it is not height balanced

             7
            /
          6
        /
      5
    /
  4

time: N and space: N
properties of bst

- what will happen if you apply inorder traversal in a BST??
- you would get sorted array

isValidBST
convert sorted array into a height balanced BST



*/



/*

is this is valid BST?

              7
            /  \
          3      11
        /  \
      1    100

It is not a valid BST..

first appraoch

- to the inorder traversal and check if the array is sorted or not...
  - compare the consecutive elements if arr[i+1]<arr[i], the array is not sorted

second approach

- maintaining max and min and comparing each node value with max and min, 
- each node value should lie between max and min

*/

// time: N, space: N
// function isValidBSTUtil(root, minVal, maxVal){

//     if(!root){
//         return true;
//     }

//     if(root.left == null && root.right == null){
//         return true;
//     }

//     if(root.data<minVal || root.data>maxVal){
//         return false;
//     }
//     // going left update max
//     // going right update min
//     return isValidBSTUtil(root.left,minVal, root.data-1)  && isValidBSTUtil(root.right, root.data+1, maxVal);
// }

// function isValidBST(root){

//     let minVal = Number.NEGATIVE_INFINITY;
//     let maxVal = Number.POSITIVE_INFINITY;

//     return isValidBSTUtil(root, minVal, maxVal);
// }


// LCA in a BST

// lowest common ancesstor
/*
             7
            /  \
          3      11
        /  \
      1     4

    LCA(1,4) => 3
    LCA(4, 11) => 7
    LCA(1,11) => 7
    LCA(3,7) => 7, ancesstors for 3 is 3 and 7 and ancesstor for 7 is 7.

    approach 1:

    capture all the ancesstors for the first node and second node
    [7,3,1] and [7,3,100]
    keep matching until you find a mismatch

    approach 2:

    seach for both the nodes in the bst, 
    if both are nodes are in left go left
    if both are nodes are in right go right
    if the first node is in left and second is in right return node value

*/
// time: N, space: N
function findLCA(root, x1, x2){

    if(!root){
        return null;
    }

    if(root.data <x1 && root.data<x2){
       return findLCA(root.left, x1, x2);
    }

    else if(root.data >x1 && root.data>x2){
      return  findLCA(root.right, x1, x2);
    }

    else{
        return root;
    }
}