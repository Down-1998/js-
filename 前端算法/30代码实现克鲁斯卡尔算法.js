/* 
    克鲁斯卡尔算法（加边法）
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

function canLink(resultList, tempBehind, tempEnd){
    let beginIn = null;
    let endIn = null;
    for(let i = 0; i < resultList.length; i++){
        if(resultList[i].indexOf(tempBehind) > -1){
            beginIn = resultList[i];
        }
        if(resultList[i].indexOf(tempEnd) > -1){
            endIn = resultList[i];
        }
    }
    //两个点都是新的点（都不在任何部落里）----可以连接的产生新的部落的
    //begin在A的部落，end没有在任何部落
    //end在A部落，begin没有在任何部落
    //begin在A部落，end在B部落 ---将AB两个部落合并

    //begin和end在同一个部落，不能连接

    if(beginIn != null && endIn != null && beginIn == endIn){
        return false;
    }
    return true;
}

function link(resultList, tempBehind, tempEnd){
    let beginIn = null;
    let endIn = null;
    for(let i = 0; i < resultList.length; i++){
        if(resultList[i].indexOf(tempBehind) > -1){
            beginIn = resultList[i];
        }
        if(resultList[i].indexOf(tempEnd) > -1){
            endIn = resultList[i];
        }
    }
    //两个点都是新的点（都不在任何部落里）----可以连接的产生新的部落的
    if(beginIn == null && endIn == null){
        let newArr = [];
        newArr.push(tempBehind);
        newArr.push(tempEnd);
        resultList.push(newArr);
    }
    //begin在A的部落，end没有在任何部落
    if(beginIn != null && endIn == null){
        beginIn.push(tempEnd);
    }
    //end在A部落，begin没有在任何部落
    if(endIn != null && beginIn == null){
        endIn.push(tempBehind);
    }
    //begin在A部落，end在B部落 ---将AB两个部落合并
    if(beginIn != null && endIn != null && beginIn !== endIn){
        let allIn = beginIn.concat(endIn);
        let needRemoveIndex = resultList.indexOf(endIn);
        resultList.splice(needRemoveIndex,1);//splice会修改原数组
        needRemoveIndex = resultList.indexOf(beginIn);
        resultList.splice(needRemoveIndex,1);//splice会修改原数组
        resultList.push(allIn)
    }
    tempEnd.neighbor.push(tempBehind);
    tempBehind.neighbor.push(tempEnd);
}   

//克鲁斯卡尔算法
function kruskal(pointSet,distance){
    let resultList = [];//这是二维数组，此数组代表有多少个部落
    while(true){
        let minDis = max;
        let begin = null;
        let end = null;
        for(let i = 0; i < distance.length; i++){
            for(let j = 0; j < distance[i].length; j++ ){
                let tempBehind = pointSet[i];
                let tempEnd = pointSet[j];
                if(i != j && distance[i][j] < minDis && canLink(resultList, tempBehind, tempEnd)){//为了去掉对角线上自己到自己的距离
                    minDis = distance[i][j];
                    begin = tempBehind;
                    end = tempEnd;
                }
            }
        }
        link(resultList,begin,end);
        if(resultList.length == 1 && resultList[0].length === pointSet.length){
            break;
        }
    }
    
}

kruskal(pointSet,distance);
console.log(pointSet);
