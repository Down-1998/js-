let arr = [];
for(let i = 0; i < 100; i++){
    arr[i] = Math.floor(Math.random() * 100);
}

function buildSearchtree(arr){
    if(arr == null || arr.length == 0) return null;
    let root = new Node(arr[0]);
    for(let i = 1; i < arr.length; i++){
        addNode(root,arr[i])
    }
    return root;
}

function addNode(root,num){
    if(root == null) return;
    if(root.value == num) return;
    if(root.value < num){//目标值比当前的值大
        if(root.right == null){
            root.right = new Node(num);
        }else{
            addNode(root.right,num);
        }
    }else{//目标值比当前的值小
        if(root.left == null){
            root.left = new Node(num);
        }else{
            addNode(root.left,num);
        }
    }
}

function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

let num = 0;
//查找指定的值是否在二叉树中
function searchByTree(root,target){
    if(root == null) return false;
    num ++;
    if(root.value === target) return true;
    if(root.value < target) return searchByTree(root.right,target);
    if(root.value > target) return searchByTree(root.left,target);

}
/* 
    希望将二叉搜索树变成一个平衡二叉树
*/
let root = buildSearchtree(arr);
console.log(searchByTree(root,22));
console.log(num);