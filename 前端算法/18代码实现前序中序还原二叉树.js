let prev = ['A','C','F','G','B','D','E'];
let middle = ['F','C','G','A','D','B','E'];

function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

function f1(prev,middle){
    if(prev == null || middle == null || prev.length == 0 || middle.length == 0 || middle.length !== prev.length) return null;
    let root = new Node(prev[0]);
    let index = middle.indexOf(root.value);//找到根结点在中序遍历中的位置
    let prevLeft = prev.slice(1,1 + index);//左闭右开区间,前序左子树
    let prevRight = prev.slice(1 + index,prev.length);//前序右子树
    let midLeft = middle.slice(0,index);//中序左子树
    let midRight = middle.slice(index + 1,middle.length);//中序右子树
    root.left = f1(prevLeft,midLeft);
    root.right = f1(prevRight,midRight);
    return root;
}
let root = f1(prev,middle);
console.log(root.left);
console.log(root.right);