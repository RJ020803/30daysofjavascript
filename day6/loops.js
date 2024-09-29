//for(initialization,condition,increment/decrement)

for(let i=0;i<=5;i++){
  console.log(i);
  
}

for(let i=0;i<=0;i--){
  console.log(i);
  
}

for(let i=0;i<=5;i++){
  console.log('${i}*${i}=${i*i}');
  
}

//using arr,for and push functions at a time
const countries=['finland','india','greenland','whiteland']
const newArr=[]
for(let i=0;i<countries.length;i++){
  newArr.push(countries[i].toUpperCase)
}


//adding all elements in the array
const numbers=[1,2,3,4,5]
let sum=0
for(let i=0;i<numbers.length;i++){
  sum=sum+numbers[i]
}

console.log(sum);

//creating a nwe array based on existing array
const numbers=[1,2,3,4,5,6]
const nweArr=[]
let sum=0
for(let i=0;i<numbers.length;i++){
newArr.push(numbers[i]**2)
}
console.log(newArr);

const countries =['finland','sweden','norway','iceland']
const newarr=[]
for(let i=0;i<countries.length;i++){
  newArr.push(countries[i].toUpperCase())
}
console.log(newArr);


//use of while loop
let i=0;
while(i<=5){
  console.log(i);
  i++
  
}


//use of do while loop
let i=0;
do{
  console.log(i);
  i++
  
}while(i<=5)

  //for of loop
  //syntax
  //for(const element of arr)
  const numbers=[1,2,3,4,5,6]

  for(const num of numbers ){
    console.log(num);
    
  }

  let sum=0;
  for(const num of numbers){
    sum=sum+num
  }
console.log(sum);


//break
for(let i=0;i<=5;i++){
  if(i==3){
    break
  }
  console.log(i);
}

//continue
for(let i=0;i<=5;i++){
  if(i==3){
    continue
  }
  console.log(i);
  
}




