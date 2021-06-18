/* 
    代码实现普里姆算法
    表示一个图可以使用点集合和边集合。

*/

let max = 10000;
let pointSet = [];
let distance = [
    [0, 4, 7, max, max],
    [4, 0, 8, 6, max],
    [7, 8, 0, 5, max],
    [max, 6, 5, 0, 7],
    [max, max, max, 7, 0]
];

function Node(value){
    this.value = value;
    this.neighbor = [];
}

let a = new Node('A');
let b = new Node('B');
let c = new Node('C');
let d = new Node('D');
let e = new Node('E');

pointSet.push(a);
pointSet.push(b);
pointSet.push(c);
pointSet.push(d);
pointSet.push(e);

function getIndex(start){
    for(let i = 0; i < pointSet.length; i++){
        if(start == pointSet[i].value){
            return i
        }
    }
    return -1;
}

//需要传入点的集合、边的集合、当前已经连接进入的集合
//此方法是根据当前已经有的节点来进行判断，获取到距离最短的点
function getMinDisNode(pointSet, distance, nowPointSet){
    let formNode = null;//线段的起点
    let minDisNode = null;//线段的终点
    let minDis = max;
    //根据当前已有的这些点为起点，以此判断连接到其他点的距离是多少
    for(let i = 0; i < nowPointSet.length; i ++){
        let nowPointIndex = getIndex(nowPointSet[i].value)//获取当前节点的序号
        for(let j = 0; j < distance[nowPointIndex].length; j++){
            let thisNode = pointSet[j]
            if(nowPointSet.indexOf(thisNode) < 0 && distance[nowPointIndex][j] < max){
                
                formNode = nowPointSet[i];
                minDisNode = thisNode;
                minDis = distance[nowPointIndex][j];
            }
        }
    }
    formNode.neighbor.push(minDisNode);
    minDisNode.neighbor.push(formNode);
    return minDisNode;
}

function prim (pointSet, distance ,start){
    let nowPointSet = [];
    nowPointSet.push(start);
    //获取最小代价的边
    while(true){
        let minDisNode = getMinDisNode(pointSet,distance,nowPointSet);
        nowPointSet.push(minDisNode);
        if(nowPointSet.length === pointSet.length){
            break;
        }
    }

}
prim(pointSet, distance, pointSet[2]);
console.log(pointSet);