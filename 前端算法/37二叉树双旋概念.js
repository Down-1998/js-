/* 
    二叉树的双旋在
    变化分支，不可以是唯一的最深的分支
    如果变化分支是唯一的最深分支，我们要先进行反向的旋转

    当要对某个节点进行左单旋的时候，
    如果变化分支是唯一的最深分支，那么我们要对新根进行右单旋，然后再进行左单旋，这样的旋转，叫做右左双旋

    当要对某个节点进行右单旋的时候
    如果变化分支是唯一的最深分支，那么我们要对新根进行左单旋，然后再进行右单旋
*/

//二叉树双旋的代码实现

function Node(value){
    this.value = value;
    this.right = null;
    this.left = null;
}
let node8 = new Node('8')
let node7 = new Node('7')
let node6 = new Node('6')
let node5 = new Node('5')
let node2 = new Node('2')

node8.left = node7;
node7.left = node6;
node6.left = node5;
node5.left = node2;



function getDeep(root){
    if(root == null) return 0;
    let leftDeep = getDeep(root.left);
    let rightDeep = getDeep(root.right);
    return Math.max(leftDeep, rightDeep) + 1;
}

//判断是否是平衡二叉树
function isBalance(root){
    if(root == null) return true;
    let leftDeep = getDeep(root.left);
    let rightDeep = getDeep(root.right);
    if(Math.abs(leftDeep - rightDeep) > 1){
        return false;
    }else{
        let leftResult = isBalance(root.left);
        let rightResult = isBalance(root.right);
        return leftResult && rightResult;
    }
}

//返回平衡之后的新根
function change(root){
    if(isBalance(root)) return root;
    if(root.left !== null) root.left = change(root.left);
    if(root.right !== null) root.right = change(root.right);

    let leftDeep = getDeep(root.left);
    let rightDeep = getDeep(root.right);
    if(Math.abs(leftDeep - rightDeep) < 2){
        return true;
    }else if(leftDeep > rightDeep){//右旋
        let changeTreeDeep = getDeep(root.left.right);
        let noChangeTreeDeep = getDeep(root.left.left);
        if(changeTreeDeep > noChangeTreeDeep){
            root.left = leftRotate(root.left);
        }
        return rightRotate(root);
    }else{//左旋
        let changeTreeDeep = getDeep(root.right.left);
        let noChangeTreeDeep = getDeep(root.right.right);
        if(changeTreeDeep > noChangeTreeDeep){
            root.right = rightRotate(root.right);
        }
        return leftRotate(root);
    }

}

// 左旋
function leftRotate(root){
    let newRoot = root.right;//新根
    let changeTree = root.right.left;//变化的节点
    newRoot.left = root;
    root.right = changeTree;
    return newRoot;
}

//右旋
function rightRotate(root){
    let newRoot = root.left;
    let changeTree = root.left.right;
    newRoot.right = root;
    root.left = changeTree; 
    return newRoot;
}
let result = change(node8);
console.log(result);