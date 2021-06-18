/* 
    选择排序
    思路：内层循环，选出一个最大的放到后面
*/
let arr = [8,1,3,5,2,6,4,7] 
function selection (arr){
    
    for(let i = 0; i < arr.length; i ++){
        let maxIndex = 0;
        let temp = null;
        for(let j = 0; j < arr.length - i; j++){
            if(arr[maxIndex] < arr[j]){
                maxIndex = j
            }
        }
        temp = arr[maxIndex];
        arr[maxIndex] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr
}

let result = selection(arr);
console.log(result);