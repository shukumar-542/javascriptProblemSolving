var orange = 200;
var apple = 650;
var banana = 550;

if(orange > apple){
      if(orange > banana){
            console.log("orange is more expesive");
      }
      else{
            console.log("banana is more expensive");
      }
}
else{
      if(apple > banana){
            console.log("apple is more expensive");
      }
      else{
            console.log("banana is more expensive");
      }
}

var fruits = Math.max(apple, banana, orange);
console.log(fruits);