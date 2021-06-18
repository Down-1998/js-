let arr = [9,1,4,11,5,2,6,8,4,7];
function sort(arr){
    if(arr == null || arr.length == 0) return []
    let left = [];//比leader大的放这里
    let right = [];//比leader小的放这里
    let leader = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > leader){
            left.push(arr[i])
        }else if(arr[i] < leader){
            right.push(arr[i])
        }
    }
    left = sort(left)
    right = sort(right)
    right.push(leader)
    return right.concat(left)
}

let result = sort(arr)
console.log(result);