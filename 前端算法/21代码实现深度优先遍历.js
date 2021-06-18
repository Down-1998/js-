/* 
    代码实现深度优先和广度优先
*/

function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}
let a = new Node('A');
let b = new Node('B');
let c = new Node('C');
let d = new Node('D');
let e = new Node('E');
let f = new Node('F');
let g = new Node('G');
a.left = c;
a.right = b;

c.left = f;
c.right = g;

b.left = d;
b.right = e;

/* 
    深度优先搜索遍历:和前序遍历的顺序是一样的
*/
function deepSearch(root,target){
    if(root == null) return false;
    if(root.value == target) return true;
    let left = deepSearch(root.left,target);
    let right = deepSearch(root.right,target);
    return left || right;
}
console.log(deepSearch(a,'e'));