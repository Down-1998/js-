let middle = ['F','C','G','A','D','B','E'];//中序
let behind = ['F','G','C','D','E','B','A'];//后序

function Node (value){
    this.value = value;
    this.left = null;
    this.right = null;
}

function f1(middle,behind){
    if(middle == null || behind == null || middle.length == 0 || behind.length == 0 || middle.length !== behind.length) return null;
    let root = new Node(behind[behind.length - 1]);//根结点
    let index = middle.indexOf(root.value);
    let midLeft = middle.slice(0,index);//中序左子树
    let midRight = middle.slice(index + 1)//中序右子树
    let behindLeft = behind.slice(0,index);//后序遍历的左子树
    let behindRight = behind.slice(index,behind.length - 1);//后序右子树
    root.left = f1(midLeft,behindLeft);
    root.right = f1(midRight,behindRight);
    return root;
}

let root = f1(middle,behind);
console.log(root);