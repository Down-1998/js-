//冒泡排序
/* 
    思想：从第一项开始比较，遇到比自己的小的就交换，遇到比自己大的就跳出本次循环进行到下一个循环
*/
/* 
    [8,1,3,5,2,6,4,7]
    [1,3,5,2,6,4,7,8]  第一轮比较完的结果
    [1,3,2,5,6,4,7,8]
    [1,3,2,5,4,6,7,8]

*/
let arr = [8,1,3,5,2,6,4,7]
function bubbling (arr){
    let temp = null
    if(arr.length == 0 || arr == null) return
    for(let j = 0; j < arr.length; j ++){
        for(let i = 0; i < arr.length - 1; i ++){
            if(arr[i] > arr[i + 1]){
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }else{
                continue
            }
        }
    }
    
    return arr
}

let result = bubbling(arr)
console.log(result);