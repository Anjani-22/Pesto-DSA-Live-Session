/*
Problems on Trees     
- Diameter
 - Vertical Order Traversal 
 - Top View  
 - Construct Binary Tree  from inorder and preorder

https://practice.geeksforgeeks.org/problems/print-a-binary-tree-in-vertical-order/1
 https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1
 https://leetcode.com/problems/diameter-of-binary-tree/
 https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

*/

// var heightOfTree = function(root){
//     if(!root){
//         return 0;
//     }
//     let LH = heightOfTree(root.left);
//     let RH = heightOfTree(root.right);

//     maxDia = Math.max(maxDia, LH+RH);
//     return Math.max(LH,RH)+1;
// }

// var diameterOfBinaryTree = function(root) {
//     //let maxDia = [0];
//     heightOfTree(root);
//     return maxDia;
// };


// preorderTraversal(root, verticalMap, horizontalDistance){
        
//     if(!root){
//         return;
//     }
    
//     if(!verticalMap.has(horizontalDistance)){
//         verticalMap.set(horizontalDistance, root.data);
//     }
    
//     this.preorderTraversal(root.left, verticalMap, horizontalDistance-1);
//     this.preorderTraversal(root.right, verticalMap, horizontalDistance+1);
//     return;
    
// }
// //Function to return a list of nodes visible from the top view 
// //from left to right in Binary Tree.
// topView(root)
// {
//     //your code here
    
//     let verticalMap = new Map();
//     this.preorderTraversal(root, verticalMap, 0);
//     let result = [];
//     let keys = Array.from(verticalMap.keys());
//     keys.sort((a,b)=>a-b);
//    for(let i=0;i<keys.length;i++){
//        result.push(verticalMap.get(keys[i]));
//    }
//     return result;
    
// }


// verticalOrder(root)
//     {
//         //your code here
        
//         let verticalMap = new Map();
//         this.preorderTraversal(root, verticalMap, 0);
        
//         let result = [];
//         let keys = Array.from(verticalMap.keys());
//         keys.sort((a,b)=>a-b);
//        for(let i=0;i<keys.length;i++){
//            let values = verticalMap.get(keys[i]);
//            result.push(...values);
//        }
//         return result;
//     }



//     function buildTreeUtil(preorder, inorder, ps, pe, is, ie, inorderMap){

//         if(ps>pe || is>ie){
//             return null;
//         }
//         let data = preorder[ps];
//         let root = new TreeNode(data);
//         let idx = inorderMap.get(data);
//         let leftCount= idx-is;
    
//         root.left = buildTreeUtil(preorder, inorder, ps+1, ps+leftCount, is, idx-1, inorderMap);
//         root.right = buildTreeUtil(preorder, inorder, ps+leftCount+1, pe, idx+1, ie, inorderMap);
//         return root;
//     }
    
    
//     var buildTree = function(preorder, inorder) {
        
//         // create a map of inorder array
    
//         let inorderMap = new Map();
    
//         for(let i=0;i<inorder.length;i++){
//             inorderMap.set(inorder[i], i);
//         }
    
//         return buildTreeUtil(preorder, inorder, 0, preorder.length-1, 0, preorder.length-1, inorderMap);
//     };