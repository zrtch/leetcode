/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 *
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (68.40%)
 * Likes:    803
 * Dislikes: 0
 * Total Accepted:    138.4K
 * Total Submissions: 201.6K
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * 根据一棵树的前序遍历与中序遍历构造二叉树。
 * 
 * 注意:
 * 你可以假设树中没有重复的元素。
 * 
 * 例如，给出
 * 
 * 前序遍历 preorder = [3,9,20,15,7]
 * 中序遍历 inorder = [9,3,15,20,7]
 * 
 * 返回如下的二叉树：
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var buildTree = function(preorder, inorder) {
    let root = build(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
    return root;
};
var build = function (preorder, preStart, preEnd, inorder, inStart, inEnd) {
    if (preStart > preEnd) {return null};

    // 找出root根节点
    const rootVal = preorder[preStart];

    // 找出根节点在inorder中的index
    const index = inorder.indexOf(rootVal);

    let root = new TreeNode(rootVal);

    // 计算出左侧树的大小
    const leftLength = index - inStart;
    root.left = build(preorder, preStart + 1, preStart + leftLength, inorder, inStart, index - 1 )
    root.right = build(preorder, preStart + leftLength + 1, preEnd,  inorder, index + 1, inEnd);
    return root;
}

// @lc code=end

