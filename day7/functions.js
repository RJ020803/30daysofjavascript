//function declaration 
//function functionName(){
//code
//}
//functionName()

//function without a parameter and teturn 
function square(){
  let num=2
  let sq=num*num 
  console.log(sq);
}
square()

//function without parameter
function addTwoNumbers(){
  let numOne=10
  let numTwo=20
  let sum=numOne+numTwo
  console.log(sum);
}

addTwoNumbers()


function printFullName(){
  let firstName='Rimi'
  let lastName='jha'
  let space=' '
  let fullname=firstName+space+lastName
  console.log(fullName);
}
printFullName()

//function with a parameter
//function with one parameter
function functionName(parm1){
  //code 
}
functionName(parm1)

function areaOfCircle(r){
  let area=Math.PI*r*r
  return area
}
console.log(areaofcirle(10));

//one simple code 
function square(number){
  return number*number
}
console.log(square(10));

//function with 2 parametrs
function functionName(parm1,parm2){
  //code
}
functionName(parm1,parm2)
function sumTwonumbers(numOne,numTwo){
  let sum=numone+numTwo
  return sum
}
//see this example 
console.log(sumTwoNumbers(10,20));
function printFullName(firstName,lastName){
  return '${firstNmae} ${lastName}'
}
console.log(printFullName('rimi','jha'));

//function with many parameters
//syntax
function functionName(parm1,parm2,parm3,...){
  //code 
}
functionName(parm1,parm2,parm3,...)


//see the code part
function sumArrayValues(arr){
  let sum=0;
  for(let i=0;i<arr.length;i++){
    sum=sum+arr[i];
  }
  return sum;
}
const numbers=[1,2,3,4,5]
console.log(sumArrayValues(numbers));

const areaOfCircle=(radius)=>{
  let area=Math.PI*radius*radius;
  return area;
}
console.log(areaOfCircle(10));

//function with unlimited number of parameters
//unlimited number of parameters in regular function 

function sumAllNums(){
  console.log(arguments);}

  sumAllNums(1,2,3,4,5)

  function sumAllNums(){
    let sum=0
    for(let i=0;i<arguments.length;i++){
      sum+=arguments[i]
    }
    return sum 
  }

  console.log(sumAllNums(1,2,3,4));
  console.log(sumAllNums(10,20,30));


  //unlimited number of parameters in arrow function
  const sumAllNums=(...args)=>{
    console.log(args)
  }
  sumAllNums(1,2,3,4)

  
  

