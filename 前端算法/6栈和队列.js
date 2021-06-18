/* 

    栈：先进后出
    队列：先进先出

    通过数组实现栈和队列
*/

//栈
let arr = []
function push(value){
    arr.push(value)
}

function pop(){
    arr.pop()
}
push(1)
push(2)
push(3)
console.log(arr);
pop()
console.log(arr);

//队列
function shift(){
    arr.shift()
}
shift()
console.log(arr);