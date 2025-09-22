// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler
// const pf = new Promise((resolve,reject)=>{
//     const sum = Math.random();
//     console.log(sum);
//     if(sum>0.5){
//         resolve("resoleve function");
//     }else{
//         reject("reject function");
//     }
// })
// pf.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })
//  // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Try programiz.pro");

// function abc(ms){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//           resolve(`Waited ${ms} millisecond`);
//         },ms);
//     });
// }

// abc(2000)
// .then(message =>console.log(message))
// .catch(err=>console.log(err))
// .finally(console.log('Done waiting...'));

// function delay(ms){
//     return  new Promise(resolve=> setTimeout(()=>resolve("hello"),ms));
// }

// async function name(ms){
//     console.log("knksnd");
//     await delay(ms).then(message=>console.log(message));
     
//     return "jkadnsknfo";
// }
// name(2000)
// .then(message=>console.log(message))

function abc(ms,csd){
     
    setTimeout(()=>{
        csd();
    },ms);
    console.log("wait")
}
abc(3000,function(){
    console.log("hii");
})

