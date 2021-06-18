/* 
    广度优先搜索

*/
function Node (value){
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

function f1(rootList,target){
    if(rootList == null || rootList.length == 0) return false;
    let childList = [];//当前层所有节点的子节点都在这个childList数组中
    for(let i = 0; i < rootList.length; i ++){
        if(rootList[i] != null && rootList[i].value == target){
            return true;
        }else{
            childList.push(rootList[i].left);
            childList.push(rootList[i].right);
        }
    }
    return f1(childList,target);
}
console.log(f1([a],'G'));