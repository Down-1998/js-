function Node(value){
    this.value = value;
    this.next = null;
    return{
        value,
        next
    }
}
let node1 = Node(1)
let node2 = Node(2)
let node3 = Node(3)
let node4 = Node(4)
let node5 = Node(5)

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
//递归算法
function reverse (root){
    //当前是倒数第二个
    if(root.next.next == null){
        root.next.next = root;
        return root.next
    }else{
        let result = reverse(root.next)
        console.log(result);
        root.next.next = root;
        root.next = null;
        return result
    }
}
let result = reverse(node1)
console.log(result);

//遍历链表
function bindNode(result){
    if(result == null) return
    console.log(result.value);
    bindNode(result.next)
}
bindNode(result)