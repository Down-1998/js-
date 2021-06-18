/* 
    克鲁斯卡尔：加边法
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


function canLink(resultList, tempBegin, tempEnd){
    let beginIn = null;
    let endIn = null;
    for(let i = 0; i < resultList.length; i++){
        if(resultList[i].indexOf(tempBegin) > -1){
            beginIn = resultList[i];
        } 
        if(resultList[i].indexOf(tempEnd) > -1){
            endIn = resultList[i];
        }
    }
    if(beginIn != null && endIn != null && beginIn == endIn){
        return false;
    }
    return true;
}

function link(resultList,begin,end){
    let beginIn = null;
    let endIn = null;
    for(let i = 0; i < resultList.length; i++){
        if(resultList[i].indexOf(begin) > -1){
            beginIn = resultList[i];
        }
         if(resultList[i].indexOf(end) > -1){
            endIn = resultList[i];
        }
    }
    //A是一一个部落，B没有部落
    if(beginIn != null && endIn == null){
        beginIn.push(end);
    }
    //A没有部落，B有部落
    if(beginIn == null && endIn !== null){
        endIn.push(begin);
    }
    //A无部落B也没有部落
    if(beginIn == null && endIn == null){
        let newArr = [];
        newArr.push(begin);
        newArr.push(end);
        resultList.push(newArr);
    }

    //A有部落B也有部落
    if(beginIn != null && endIn != null && beginIn != endIn){
        var allIn = beginIn.concat(endIn);
        let removeIndex = resultList.indexOf(endIn);
        resultList.splice(removeIndex,1);
        let needRemoveIndex = resultList.indexOf(beginIn);
        resultList.splice(needRemoveIndex,1)
        resultList.push(allIn)
    }
    begin.neighbor.push(end);
    end.neighbor.push(begin);
}


function kruskal(pointSet, distance){
    let resultList = [];//代表有多少个部落
    while(true){
        let begin = null;
        let end = null;
        let minDistance = max;
        for(let i = 0; i < distance.length; i++){
            for(let j = 0; j < distance[i].length; j++){
                let tempBegin = pointSet[i];
                let tempEnd = pointSet[j];
                if( i != j && distance[i][j] < minDistance && canLink(resultList, tempBegin, tempEnd)){
                    minDistance = distance[i][j]
                    begin = tempBegin;
                    end = tempEnd
                }
            }
        }
        link(resultList,begin,end);
        if(resultList.length == 1 && resultList[0].length == pointSet.length){
            break;
        }
    }
    
}

kruskal(pointSet, distance)
console.log(pointSet);



