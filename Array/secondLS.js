let arr=[123+1,45,32,5,0,67];
let largest = -Infinity;
let slargest = -Infinity;
let small = Infinity;
let ssmall = Infinity;

// for largest number
for(let n of arr){
    if(n>largest){
        slargest=largest;
        largest=n;
    }else if (n > slargest && n !== largest) {
        slargest = n;     // New number is just the second largest
    }
}
 for(let e of arr){
     if(e<small){
        ssmall= small;
        small= e;
    }
 }
 console.log(slargest);
 console.log(ssmall);