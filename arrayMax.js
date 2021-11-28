var maxNumber  = [22,55,11,63,64];
var temp = maxNumber[0];

for(i=0; i<= maxNumber.length; i++){
      var element = maxNumber[i]
      if(temp< element){
            temp = element;
      }
}
console.log(temp);


