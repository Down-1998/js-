/* 
    二叉树的比较
*/

//判断两个二叉树是否相同
function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

let a1 = new Node('A');
let b1 = new Node('B');
let c1 = new Node('C');
let d1 = new Node('D');
let e1 = new Node('E');
let f1 = new Node('F');
let g1 = new Node('G');

a1.left = c1;
a1.right = b1;

c1.left = f1;
c1.right = g1;

b1.left = d1;
b1.right = e1;

let a2 = new Node('A');
let b2 = new Node('B');
let c2 = new Node('C');
let d2 = new Node('D');
let e2 = new Node('E');
let f2 = new Node('F');
let g2 = new Node('G');

a2.left = c2;
a2.right = b2;

c2.left = f2;
c2.right = g2;

b2.left = d2;
b2.right = e2;

function compareTree(root1,root2){
    if(root1 === root2) return true;//同一棵树
    if(root1 == null && root2 != null || root2 == null && root1 != null) return false;
    if(root1.value != root2.value) return false;//相同位置的值不相等
    let left = compareTree(root1.left,root2.left);
    let right = compareTree(root1.right,root2.right);
    return left && right;//必须左右子树都相等才是整棵树相等
}
console.log(compareTree(a1,a2));