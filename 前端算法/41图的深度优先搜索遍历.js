/* 
    图的深度优先搜索遍历
*/

function Node(value){
    this.value = value;
    this.neighbor = [];
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');

a.neighbor.push(b);
a.neighbor.push(c);

b.neighbor.push(a);
b.neighbor.push(c);
b.neighbor.push(d);

c.neighbor.push(a);
c.neighbor.push(b);
c.neighbor.push(d);

d.neighbor.push(b);
d.neighbor.push(c);
d.neighbor.push(e);

e.neighbor.push(d);


/* 
    图是有可能形成环的
*/

function deepSearch(root,target,path){
    if(root == null) return false;
    if(path.indexOf(root) > -1) return false;
    if(root.value == target) return true;
    path.push(root);
    let result = false;
    for(let i = 0; i < root.neighbor.length; i++){
       result |= deepSearch(root.neighbor[i],target,path);
    }
    return result === 1 ? true : false;
}

console.log(deepSearch(b,'n',[]));
