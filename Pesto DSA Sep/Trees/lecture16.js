/*
Trees and type of trees

terms

leaf node
root node
child node
parent node

types of trees

complete binary tree
skewed tree
perfect binary tree



Trees traversals
preorder
inorder
post order
level order

questions
Height of tree
Symmetric tree


practice questions

left view
right view
bottom view
right view

*/


// function preorder(root){

//     if(!root){
//         return;
//     }

//     console.log(root.value);
//     preorder(root.left);
//     preorder(root.right);
// }

// pre order
let maxHeight = 0;
function findHeight(root, height){

    maxHeight = Math.max(height, maxHeight);

    findHeight(root.left, height+1);
    findHeight(root.right, height+1);

    return;
}

height(root,1);

// post order
function findHeight(root){

    if(root.left == null && root.right == null){
        return 1;
    }

    let LH = findHeight(root.left);
    let RH = findHeight(root.right);

    return Math.max(LH,RH)+1;
}

// time: N
// space: N
function helper(root1, root2){

    if(root1 == null && root2==null){
        return true;
    }

    if(root1==null || root2 == null){
        return false;
    }

    if(root1.data!=root2.data){
        return false;
    }

   return helper(root1.left, root2.right);
}

function isSymmetric(root){

    if(helper(root, root)==false) {
        return false;
    }

    return true;
}