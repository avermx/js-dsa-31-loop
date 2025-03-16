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


// function dym(Month,Year){
//     if(Month === 1 || Year === 2024){
//         console.log('31 DAYS'); 
//     }
//     else if(Month === 2 || Year === 2024){
//         if(Year%4==0 && Year%100 !=0){
//             console.log('29 DAYS');
//         }
//         else if(Year%400 ==0){
//             console.log('29 DAYS');
            
//         }
//         else{
//             console.log('28 DAYS');
//         }
        
//     }
//     else if(Month === 3 || Year === 2024){
//         console.log("31 DAYS");
        
//     }
//     else if(Month === 4 || Year === 2024){
//         console.log("30 DAYS");
        
//     }
//     else if(Month === 5 || Year === 2024){
//         console.log("31 DAYS");
        
//     }
//     else if(Month === 6 || Year === 2024){
//         console.log("30 DAYS");
//     }
//     else if(Month === 7 || Year === 2024){
//         console.log("31 DAYS");
//     }
//     else if(Month === 8 || Year === 2024){
//         console.log("31 DAYS");
//     }
//     else if(Month === 9 || Year === 2024){
//         console.log("30 DAYS");
//     }
//     else if(Month === 10 || Year === 2024){
//         console.log("31 DAYS");
//     }
//     else if(Month === 11 || Year === 2024){
//         console.log("30 DAYS");
//     }
//     else if(Month === 12 || Year === 2024){
//         console.log("31 DAYS");
//     }
    
    
    
// }

// console.log(dym(4,2024));
//  Q15
// function dym(month,year){
// switch(month) {
//     case 1:
//       console.log('31 DAYS'); 
//       break;
//     case 2:
      
//                 if(year%4==0 && year%100 !=0){
//                     console.log('29 DAYS');
//                 }
//                 else if(year%400==0){
//                     console.log('29 DAYS');
                    
//                 }
//                 else{
//                     console.log('28 DAYS');
//                 }
//       break;
//     case 3:
//       console.log("31 DAYS");
//       break;
//     case 4:
//       console.log("30 DAYS");
//       break;
//     case 5:
//       console.log("31 DAYS");
//       break;
//     case 6:
//       console.log("30 DAYS");
//       break;
//     case 7:
//       console.log("31 DAYS");
//       break;
     
//     case 8:
//       console.log("31 DAYS");
//       break;
//     case 9:
//       console.log("30 DAYS");
//       break;
//     case 10:
//       console.log("31 DAYS");
//       break;
//     case 11:
//       console.log("30 DAYS");
//       break;
//     case 12:
//       console.log("31 DAYS");
//       break;
     
//   }
// }

// console.log(dym(2,2028));
 


function sumofdigit(num){
    let sum = 0;
    
    while(num>0){
        if(num%2==0){
            sum  = sum + num%10
            num = Math.floor(num/10)
        }
        else{
            num = Math.floor(num/10)
        }
      
      
        
    }
    
    return sum;
}

console.log(sumofdigit(2384));
  
