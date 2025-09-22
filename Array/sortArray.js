let arr = [23,54,17,32,6,7,2];
for(let i = 0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            let tem = arr[i];
            arr[i]=arr[j]
            arr[j]=tem;
        }
    }
     
}

console.log(arr)