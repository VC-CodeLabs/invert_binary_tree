/**
* Definition for a binary tree node.
* class TreeNode {
*     val: number
*     left: TreeNode | null
*     right: TreeNode | null
*     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
*         this.val = (val===undefined ? 0 : val)
*         this.left = (left===undefined ? null : left)
*         this.right = (right===undefined ? null : right)
*     }
* }
*/

// T Washington solution
function invertTree(root: TreeNode | null): TreeNode | null {
    if (root===null || root.val===undefined) {
        return null; //new TreeNode(root, null, null);
    }
    else if (root.left===undefined && root.right===undefined) {
        return new TreeNode(root.val, null, null);
    }
    else {
        return new TreeNode(root.val, invertTree(root.right), invertTree(root.left));
    }
};