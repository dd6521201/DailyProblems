/* 
给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉树:  root = [3,5,1,6,2,0,8,null,null,7,4]

                             3
                          /     \
                         5       1
                        /  \    /  \
                       6    2   0   8
                           /  \
                          7    4
示例 1:

输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出: 3
解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
示例 2:

输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
输出: 5
解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。
 

说明:

所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉树中。
网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// [2, null, 1]  ===> 2
var lowestCommonAncestor = function(root, p, q) {
  let ans = null
  let traverse = (curNode, p, q) => {
    // end
    if (curNode === null) return false
    let left = traverse(curNode.left, p ,q) ? 1 : 0
    let right = traverse(curNode.right, p, q) ? 1 : 0
    let flag = (curNode === p || curNode === q) ? 1 : 0

    if (flag + left + right >= 2) {
      ans = curNode
    }

    return (flag + left + right > 0)
  }
  traverse(root, q, p)
  return ans
};