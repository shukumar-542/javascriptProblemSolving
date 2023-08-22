// function fibbo(number){
//     // console.log(number);
   
//     if(number < 2){
//         return number;
//     }
//     else{
//         return fibbo(number - 1 ) + fibbo(number - 2)
//     }
// }
// const result = fibbo(5);
// console.log(result);

// program to display fibonacci sequence using recursion
function fibonacci(num) {
    let x = 0 ; y = 1;
    let fn = x + y
    // console.log(x);
    for(let i=0; i<= num; i++){
        console.log(fn);
        fn = x + y
        x = y
        y = fn
        
    }
}

const result = fibonacci(5);
// console.log(result);