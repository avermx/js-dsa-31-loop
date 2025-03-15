// Q1.
// function A(isbn){
//     let sum = 0;
//     console.log(sum);
    
//     for(let i = 0; i<isbn.length; i++){
//         sum = sum + Number(isbn[i])*(i + 1);
//     }
//     console.log(sum);
    
//     if(sum%11 ===0){
//         return "Valid ISBN";
//     }
//     else{
//         return "Invalid ISBN";
//     }
// }

// console.log(A("020131452"));
 

// Q2
// function HCFGCD(a,b){
// if ( b===0 ){
//     return a;
// }
// while(b){
//     let rem = a%b
//     a = b 
//     b = rem 
// } 
// return a ;
// }


// console.log(HCFGCD(18,32));


// Q3
// let n = [18];

// const c = [...n]
// let sum = 0;

// while(n>0){
//     let rem = n%10;
//     sum = sum + rem
//     n = Math.floor(n/10)
    
// }

// let divide = c%sum
// console.log(divide);

// console.log(sum);


// Q4

// function perfectsqr(num){
//     if(num<=0){
//         return "Not Perfect Sqr";
//     }
//     let result = Math.sqrt(num);
//     let endresult = Number.isInteger(result) 
//     if(endresult === true){
//         return "Not Perfect Sqr";
//     }
//     else{
//         return "Perfect Sqr";
//     }
    
    
// }

// console.log(perfectsqr(5));
//  Q5
// function Abundant(n){
//     let sum = 0;

//     for(let i = 1 ; i<=n/2; i++){
//         if(n%i === 0){
//             sum = sum + i
//         }
//     }

//     if(n<sum){
//         return "Abundant";
//     }
//     else{
//         return "Not Abundant";
//     }
// }

// console.log(Abundant(18));
 
// Q6
// function Fibonacci(n){
//     let a = 0;
//     let b = 1; 
//     let sum = 0;
    
//     for(let i = 3; i<=n; i++){
//         sum = a + b;
//         a = b;
//         b = sum;
      
//         console.log(sum);
        
//     }
//     console.log(sum);
// }

// Fibonacci(8)


for (let index = 1; index <=5; index++) {
    console.log("*");
    
    
}