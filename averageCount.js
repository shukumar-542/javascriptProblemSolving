 function RentKm(number){
 var count= 0;

 if(number <=10){
       count = number *50;
 }
 else if(number <= 20){
       var first10 = 10*50;
       var remaining = number -10;
       var second10 = remaining * 100;
       count = first10 + second10;
 }
 else {
       var first10 = 10*50;
       var sceond10 = 10*100;
       var remaining = number -20;
       var thirdPart = remaining * 300;
       count = first10 + sceond10 + thirdPart;
 }
 return count;
}
var rent = RentKm(40);
console.log(rent);