// function factorial(num){
//       var fact = 1;
//       for(i=1 ;i<=num;i++){
//             fact = fact *i;
//       }
//       return fact;

// }
// var result = factorial(5);
// console.log(result);


////Recursion function//

function factorialRecursion(num){

      if(num == 0){
            return 1;
      }
      else if(num == 1){
            return 1;
      }
    
      else{
            return num * factorialRecursion(num -1);
            }

}
var result = factorialRecursion(5);
console.log(result);