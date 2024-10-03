//window global object 
a='javascript'
b=10
function letslearnscope(){
  console.log(a,b);
  if(true){
    console.log(a,b);
  } 
}
console.log(a,b);

//global scope 
let a='javascript'
let b=10
function letslearnscope(){
  console.log(a,b);
  if(true){
    let a='python'
    let b=100
    console.log(a,b);
    
  }
  console.log(a,b);
  
  
}
letslearnscope()
console.log(a,b);


//local scope includes two scopes i.e block scope and function scope 
let a='javascript'
let b=10
//function scope 
function letslearnscope(){
  console.log(a,b);
  let value=false 
  //block scope
  if(true){
    let a='python'
    let b=20
    let c=30
    let d=40
    value=!value
    console.log(a,b,c,value);
    
  }
  console.log(a,b,value);
}
console.log(a,b,value);
}
letslearnscope()
console.log(a,b);

//object is a key value pair
//creating an empty object
const person={}

const rectangle={
  length:10,
  width:20
}
console.log(rectangle);
const person={
  firstname:'asabeneh',
  lastname:'rimi',
  age:11,
  country:'india',
  city:'banglore'
}
console.log(person);
}







