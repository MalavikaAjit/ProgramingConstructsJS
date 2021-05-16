  
  
let min = 1000;
let max = 0;

for (let i = 0; i < 5;i++)
{
    var number = Math.floor(Math.random()*999)+100;
    console.log("number:" + number);
    if(number<min){
        min=number;
    }
    if(number>max){
        max=number;
    }
}
console.log("min number" +min);
console.log("max number" +max);