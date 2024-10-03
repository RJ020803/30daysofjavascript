//higher order function 
//it takes other function as parameter or return a function as a value
//callback
//it is function which can be passed as a parameter to other function 
//arrow function 
const callback=(n)=>{
  return n**2
}
function cube(callback,n){
  return callback(n)*n
}
console.log(callback,3);


function salary(num){
  return num*7
}
setTimeout(salary,300)

const mysalaries =[50,40,60,20,300,400]

mysalaries.filter(n=>n>50).filter(tax).map()

//a callback function,the name of the function could be any name 
const callback=(n)=>{
  return n**2
}
//function that takes other function as callback
function cube(callback,n){
  return callback(n)*n
}
console.log(cube(callback,3));

//returning function 
//higher order function return function as a value

const higherOrder=n=>{
  const dosomething=m=>{
    const dowhatever=t=>{
      return 2*n+3*m+t
    }
    return dowhatever
  }
  return dosomething
}
console.log(higherorder(2)(3)(89));


//foreach method uses callback 
const numbers=[1,2,3,4,5,6,7]
const sumArray=arr=>{
  let sum=0
  const callback=function(element){
    sum+=element
  }
  arr.forEach(callback)
  return sum
}
console.log(sumArray(numbers));


//settingtime
//setInterval
//setTimeout
//setInterval 
function callback(){
  //code here 
}
setInterval(callback,duration)


function sayHello(){
  console.log('hello');
  }
  setInterval(sayHello,1000)


  //setTimeout
  //it helps to execute some action at some time in future ..it takes a global method that take a global function and a duration as a parameter 
  function callback(){
    //code here 
  }
  setTimeout(sayHello,40000)

  //functional programming in javascript 
  //insted of regular loops,it includes lots of built in methods 
  //built in methods includes forEach,map,filter,reduce,find,every,some,and sort
  
  //foreach 
  arr.forEach(function (element,index,arr){
    console.log(index,element,arr);
  })
  //the same code can be written using arrow function 
  arr.forEach((element,index,arr)=>{
    console.log(index,element,arr);
  })

  //can be written 
  arr.forEach((element,index,arr)=>console.log(index,element,arr));


  //lets set an example for this 
  let sum=0;
  const numbers=[1,2,3,4,5,6,7];
  numbers.forEach(num=>console.log(num))
  console.log(sum)


  
  
  