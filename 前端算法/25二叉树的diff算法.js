/* 
    diff算法：新增了什么，修改了什么，深处了什么
*/

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
d2.right = e2
// b2.right = e2;

//新增了什么，修改了什么，删除了什么
let diffList = [];

function diffTree(root1, root2, diffList){
    if(root1 == root2) return diffList;
    if(root1 == null && root2 != null){
        //添加了节点
        diffList.push({
            type:'新增',
            origin:null,
            now:root2
        })
    }else if(root1 != null && root2 == null){
        //删除了节点
        diffList.push({
            type:'删除了节点',
            origin:root1,
            now:null
        })

    }else if(root1.value != root2.value){
        //相同节点的修改
        diffList.push({
            type:'修改',
            origin:root1,
            now:root2
        })
        diffTree(root1.left,root2.left,diffList);
        diffTree(root1.right,root2.right,diffList);
    }else{
        diffTree(root1.left,root2.left,diffList);
        diffTree(root1.right,root2.right,diffList);
    }
}
diffTree(a1,a2,diffList);
console.log(diffList);