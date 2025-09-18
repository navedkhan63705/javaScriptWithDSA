function toaster(config) {

    return function (notification) {
        let child = document.createElement("div");
        child.innerText = notification;
        child.className = `${config.positionX === "right" ? "toaster-right" : "toaster-left"} ${config.positionY === "top" ? "toaster-top" : "toaster-bottom"} ${config.theme === "dark" ? "toaster-dark" : "toaster-light"}`;
        document.querySelector("#parent").appendChild(child);
        setTimeout((() => {
            document.querySelector("#parent").removeChild(child);
        }), config.duration);
    }
}
let loader = toaster(
    {
        positionX: "right",
        positionY: "top",
        theme: "dark",
        duration: 3000
    }
)
loader("this is a notification");



loader("this is a notification");




































//let n = 1432;
//  let sum = 0;
//  while(n>0){
//      let rem = n%10;
//      sum += rem ;
//      n = Math.floor(n/10);
//  }
//  console.log(sum);

/// reverse number
//  let rev = 0;
//  while(n>0){
//      let rem = n%10;
//      rev = rev*10+rem;
//      n = Math.floor(n/10);
//  }
//  console.log(rev);

//find strong number => sum of factorials of each digit == original number
// let n = 1432;
// let temp = n;
// let sum = 0;
// while (n > 0) {
//     let rem = n % 10;
//     let fact = 1;
//     for (let i = 1; i <= rem; i++) {
//         fact *= i;
//     }
//     sum += fact;
//     n = Math.floor(n / 10);
// }
// if (sum === temp) {
//     console.log("this is a strong number");
// } else {
//     console.log("this is not a strong number");
// }



// do {
//     var et = String(prompt('write exit for close the code'));
// }
// while (et !== "exit");











