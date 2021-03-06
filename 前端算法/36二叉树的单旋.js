/* 
    二叉树的单旋（左单旋、右单旋）

    某一节点不平衡：如果左边浅，右边深，进行左单旋

    旋转节点：不平衡的节点为旋转节点
    新根：旋转之后成为根结点的
    变化分支：父节点发生变化的那个分支
    不变节点：父节点不发生变化的节点


    左单旋：
    旋转节点：当前不平衡的节点
    新根：旋转节点的右子树的根结点
    变化分支：旋转节点右子树的左子树
    不变分支：旋转节点右子树的右子树

    右单旋：
    旋转节点：当前不平衡的节点
    新根：旋转节点左子树的根结点
    变化根：旋转节点的左子树的右子树
    不变分支：旋转节点的左子树的左子树



    进行左旋
    1、找到新根
    2、找到变化分支
    3、当前旋转节点的右孩子为变化分支
    4、新根的左孩子为旋转节点
    5、返回新的根节点
*/

function Node(value){
    this.value = value;
    this.right = null;
    this.left = null;
}
let node2 = new Node('2')
let node5 = new Node('5')
let node3 = new Node('3')
let node6 = new Node('6')

node2.right = node5;
node5.left = node3;
node5.right = node6;

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
        return isBalance(root.left) && isBalance(root.right);
    }
}

//返回平衡之后的根结点
function singleSpiral(root){
    if(isBalance(root)) return root;
    if(root.left !== null){
        root.left = singleSpiral(root.left)
    }else if(root.right !== null){
       root.right = singleSpiral(root.right)
    }

    let leftDeep = getDeep(root.left);
    let rightDeep = getDeep(root.right);

    if(Math.abs(leftDeep - rightDeep) < 2){
        return true;
    }else if(leftDeep > rightDeep){//不平衡左边深，右旋
        return rightRotate(root)
    }else{
        //不平衡右边深，左旋
       return leftRotate(root)
    }

}

//左旋
function leftRotate(root){
    let newRoot = root.right;//新根
    let changeTree = root.right.left;//变化节点
    root.right = changeTree;
    newRoot.left = root;
    return newRoot;
}

//右旋
function rightRotate(root){
    let newRoot = root.left;//新根
    let changeTree = root.left.right;//变化节点
    root.left = changeTree;
    newRoot.right = root;
    return newRoot
}
console.log(isBalance(node2));

let newRoot = singleSpiral(node2);
console.log(isBalance(newRoot));
console.log(newRoot);

