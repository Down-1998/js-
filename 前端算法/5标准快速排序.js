function quickSort(arr,low,high){
    var key=arr[low];
    var start=low;
    var end=high;
    while(end>start){
        while(end>start&&arr[end]>=key) end--;
        if(arr[end]<=key){
            var temp = arr[end];
            arr[end]=arr[start];
            arr[start] = temp;
        }
        while(end>start&&arr[start]<=key) start++;
        if(arr[start]>=key){
            var temp = arr[start];
            arr[start]=arr[end];
            arr[end]=temp;
        }
    }
    if(start>low) quickSort(arr,low,start-1);
    if(end<high) quickSort(arr,end+1,high);
}
var arr=[12,20,5,16,15,1,30,45,23,9];
var start = 0;
var end = arr.length-1;

quickSort(arr,start,end); 
console.log(arr); //[1,5,9,12,,15,16,20,23,30,45]