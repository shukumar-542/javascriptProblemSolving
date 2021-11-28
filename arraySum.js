// var number = [22,23,12];

// sum = 0;
// for( i=0; i< number.length;i++ ){
//       var temp = number[i];
//       sum = sum + temp;
// }
//  console.log(sum);

/// Declered function 
 function getSum(number){
      var sum= 0;
      for (i=0; i<number.length; i++){
            var temp = number[i];
            sum  = sum + temp;
      }
      return sum;
 }

 var number =[12,2,16,15,22];
 var total = getSum(number);
 console.log(total);