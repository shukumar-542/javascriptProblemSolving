const factorial = (number)=>{
    let factorialSum = 1;
    for(var i =1 ; i<=number ; i++){
       factorialSum *= i
    }
   return factorialSum

}
const result = factorial(5);
console.log(result);



