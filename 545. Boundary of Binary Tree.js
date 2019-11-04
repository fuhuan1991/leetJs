/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var boundaryOfBinaryTree = function (root) {
  if (!root) return [];
// left
let p = root;
let leftPath = [p];
while (p.left || p.right) {
    // console.log(p.val)
  if (p === root) {
    if (p.left) {
      p = p.left;
      leftPath.push(p);
    } else break;
  } else {
    if (p.left) {
      p = p.left;
      leftPath.push(p);
    } else {
      p = p.right;
      leftPath.push(p);
    }
  }
}

// right
let q = root;
let rightPath = [q];
while (q.right || q.left) {
  if (q === root) {
    if (q.right) {
      q = q.right;
      rightPath.push(q);
    } else break;
  } else {
    if (q.right) {
      q = q.right;
      rightPath.push(q);
    } else {
      q = q.left;
      rightPath.push(q);
    }
  }
}

// leaves
let leaveArr = [];
checkLeave(root, leaveArr);

// console.log(leftPath, rightPath,leaveArr)
show(leftPath);
show(rightPath);
show(leaveArr);

let r = [...leftPath];
  show(r)
if (r[r.length-1] === leaveArr[0]) leaveArr.shift();
r = r.concat(leaveArr);
show(r)
if (r[r.length-1] === rightPath[rightPath.length-1]) rightPath.pop();
if (r[0] === rightPath[0]) rightPath.shift();
r = r.concat(rightPath.reverse());
show(r)
r = r.map(node => node.val);
return r;
};

const checkLeave = (node, leaveArr) => {
if (!node) return;
if (!node.left && !node.right) {
  leaveArr.push(node);
} else {
  checkLeave(node.left, leaveArr);
  checkLeave(node.right, leaveArr);
}
}

const show = (arr) => {
  let s = '';
  for (let node of arr) {
    s = s + node.val + ' ';
  }
  console.log(s)
}