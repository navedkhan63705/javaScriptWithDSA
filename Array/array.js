//let rotation by one
// let arr = [2,1,4,9,6,3];
// let copy = arr[0];
// for(let i =0;i<arr.length-1;i++){
   
//   arr[i]=arr[i+1];
  
// }
// arr[arr.length-1] = copy;
// console.log(arr);

//right rotation by one
// let arrr = [2,1,4,9,6,3];
// let copy = arrr[arrr.length-1];
// for(let i =arrr.length-1;i>=0;i--){
   
//   arrr[i]=arrr[i-1];
  
// }
// arrr[0]=copy;
// console.log(arrr);

// let arrr = [2,1,4,9,6,3];
// let k = prompt("enter k value");
// k = k%arrr.length;
// reverse(0,k-1);
// reverse(k,arrr.length-1);
// reverse(0,arrr.length-1);
// console.log(arrr);
// function reverse(i,j){
//     while(i<j){
//         let temp = arrr[i];
//         arrr[i]=arrr[j];
//         arrr[j]=temp;
//         i++;
//         j--;
//     }
// }

// let temp = new Array(arrr.length);
// let k = prompt("enter k value");
// k=k%arrr.length;
// for(let i =0;i<arrr.length;i++){
//     let newindex= (i+k)%arrr.length;
//     temp[newindex]=arrr[i];
//     //   arrr[(i+k)%arrr.length]=arrr[i];
// }
// console.log(temp);
// for(let j=0;j<=k;j++){
//     let copy = arrr[arrr.length-1];
// for(let i =arrr.length-1;i>=0;i--){
   
//   arrr[i]=arrr[i-1];
  
// }
// arrr[0]=copy;
// }


// let copy = arrr[arrr.length-1];
// for(let i =arrr.length-1;i>=0;i--){
   
//   arrr[i]=arrr[i-1];
  
// }
// arrr[0]=copy;
// console.log(arrr);


let arr = [2,4,5,6];
let arr1= [3,4,8,7];
arr.sort((a, b) => a - b);
arr1.sort((a, b) => a - b);

let newarr = new Array(arr.length+arr1.length);
let i=0;
let j=0;
let k=0;
while(i<arr.length && j<arr1.length)
{
   if (arr[i] < arr1[j]) {
    newarr[k] = arr[i];
    i++;
} else {
    newarr[k] = arr1[j];
    j++;
}
    k++;
}

while(i<arr.length){
    newarr[k]=arr[i];
    i++;
    k++;
}
while(j<arr1.length){
    newarr[k]=arr1[j];
    j++;
    k++;
}
console.log(newarr);
