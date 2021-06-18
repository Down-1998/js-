/* 
    如果变化分支的高度比旋转节点的另一侧高度差超过2，那么单旋之后依旧单旋
*/


function Node(value){
    this.value = value;
    this.right = null;
    this.left = null;
}
let node9 = new Node('9')
let node8 = new Node('8')
let node7 = new Node('7')
let node6 = new Node('6')
let node5 = new Node('5')
let node4 = new Node('4')

node9.left = node6;
node6.left = node5;
node6.right = node7;
node7.right = node8;
node5.left = node4;


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
        return root;
    }else if(leftDeep > rightDeep){//右旋
        let changeTreeDeep = getDeep(root.left.right);
        let noChangeTreeDeep = getDeep(root.left.left);
        if(changeTreeDeep > noChangeTreeDeep){
            root.left = leftRotate(root.left);
        }
        let newRoot = rightRotate(root);
        newRoot.right = change(newRoot.right);
        newRoot = change(newRoot);
        return newRoot;
    }else{//左旋
        let changeTreeDeep = getDeep(root.right.left);
        let noChangeTreeDeep = getDeep(root.right.right);
        if(changeTreeDeep > noChangeTreeDeep){
            root.right = rightRotate(root.right);
        }
        let newRoot = leftRotate(root);
        newRoot.left = change(newRoot.left);
        newRoot = change(newRoot);
        return newRoot;
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
let result = change(node9);
console.log(result);