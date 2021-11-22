/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let prev = -Infinity;
    let loop = (node) => {
        if (node == null) return true;
        if (!loop(node.left)) { return false };
        if (node.val <= prev) {
            return false;
        }
        prev = node.val;
        return loop(node.right)
    }
    return loop(root);
};
// @lc code=end

