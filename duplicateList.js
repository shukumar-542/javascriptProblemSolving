// var number = [1,33,4,5,2,2,3,4,55,33,44,55];

// var empty = [];

// for(i=0 ; i<number.length; i++){
//       var element = number[i];
//       var index = empty.indexOf(element);
//       if(index == -1){
//             empty.push(element);
//       }
// }
// console.log(empty);


var nameVal = ["a","b","c","d","a","b"];

var uniqueName = [];

for(i=0 ; i< nameVal.length;i++){
      var element = nameVal[i];
      var test = uniqueName.indexOf(element);
      if(test == -1){
            uniqueName.push(element);
      }
}
console.log(uniqueName);




