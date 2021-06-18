function Node(value){
    this.value = value;
    this.right = null;
    this.left = null;
}
let a = new Node('a')
let b = new Node('b')
let c = new Node('c')
let d = new Node('d')
let e = new Node('e')
let f = new Node('f')
let g = new Node('g')
let h = new Node('h')
let j = new Node('j')

a.left = b;
a.right = c;

b.left =d;
b.right = e;

c.left = f;
c.right = g;

d.right = h;

e.right = j;

//获取到二叉树的深度
function getDeep(root){
    if(root == null ) return 0;
    let leftDeep = getDeep(root.left);
    let rightDeep = getDeep(root.right);
    return Math.max(leftDeep,rightDeep) + 1;
}

function isBalance(root){
    if(root == null) return true;
    let leftDeep = getDeep(root.left);
    let rightDeep = getDeep(root.right);
    if(Math.abs(leftDeep - rightDeep) > 1){
        return false
    }else{
        return isBalance(root.left) && isBalance(root.right)
    }
}

console.log(isBalance(b));