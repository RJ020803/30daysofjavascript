//using array constructor
const arr=Array()
console.log(arr);

//
using square brackets([])

const arr=[]
console.log(arr);

//how to create an array with values 
const numbers=[0,3.14,9.81,37,98.6,100]//this is called array of numbers 
const fruits=['banana','orange','mango','lemon']
const vegetables=['tomato','potato','cabbage','onion','carrot','capsicum']
const animalproducts=['milk','butter','youghurt']
const webTechs=['html','css','js','react','node','mongoDB']
const countries=['finland','sweden','denmark','norway','iceland']

console.log('Numbers',numbers );
console.log('numbers of numbers ',numbers.length);

console.log('vegetables',vegetables );
console.log('vegetables of vegetables ',vegetables.length);

console.log('Numbers',numbers );
console.log('numbers of numbers ',animalproduct.length);

console.log('Numbers',numbers );
console.log('numbers of numbers ',webproducts.length);

console.log('Numbers',numbers );
console.log('numbers of numbers ',countries.length);


//array using split
let js='javascript'
const charInjavascript=js.split('')

console.log(charInjavascript);

let js = 'JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies) 
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')

console.log(words)

//array have items of different data types
const arr=[
  'rimi',
  566,
  true,
  {country:'finland',city:'ara'},
  {skills:mandhak ko sudharna }
]


//accesing array items using index

const mandhak=['tadpole','gorela','cat']
let firstmandhak=mandhak[0]

console.log(firstmandhak);

const numbers = [0, 3.14, 9.81, 37, 98.6, 100]  // set of numbers

console.log(numbers.length)  81, 37, 98.6, 100]
console.log(numbers[0])      
console.log(numbers[5])      

let lastIndex = numbers.length - 1;
console.log(numbers[lastIndex]) 

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] 

console.log(webTechs)        // all the array items
console.log(webTechs.length) 
console.log(webTechs[0])     
console.log(webTechs[6])     

let lastIndex = webTechs.length - 1
console.log(webTechs[lastIndex])

///modify an array element
//we can modify out the componenets of the array..i.e an array element is mutable 

const numbers=[1,2,3,4,5]
numbers[0]=10
numbers[1]=20

console.log(numbers);

const countries=[
  'india',
  'indonesia',
  'canada',
  'japan'
]
countries[0]='afganistan'
let lastIndex=countries.length-1
countries[lastIndex]='korea'

console.log(countries);

//methods to manipualate array
//array,length,concat,indexOf,slice,splice,join,toString,includes,lastindexOf,isArray,fill,push,pop,shift,unshift

const arr=Array()
console.log(arr);//it creates an empty array

const eightEmptyValues=Array(8)
const eightEmptyValues=Array(8)
console.log(eightEmptyValues);


//creating static values with fill

const arr=Array()
console.log(arr);

const eightXValures=Array(8).fill('X')
console.log(eightXvalues);

const eightXValures=Array(8).fill('9')
console.log(eightXvalues);

const firstList=[1,2,3,4]
const secondList=[5,6,7,8]
const thirdList=firstList.concat(secondList)//this is called concatenation function

console.log(thirdList);


const fruits=['banana','orange','mango','lemon']
const vegetables=['tomato','potato','cabbage']
const fruitsAndVegetables=fruits.concat(vegetables)

console.log(fruitsAndVegetables );


//getting array length
const numbers =[1,23,3,45,4,4]
console.log(numbers.length);

//getting index in an array

const numbers = [1, 2, 3, 4, 5]

console.log(numbers.indexOf(5)) // -> 4
console.log(numbers.indexOf(0)) // -> -1
console.log(numbers.indexOf(1)) // -> 0
console.log(numbers.indexOf(6)) // -> -1

//check an element if it exist in an array

//check items in a list
const fruits=['banana','orange','grapes']
let index=fruits.indexOf(grapes)


if(index==-1){
  console.log('this fruit doesnot esxists in this array');
}else{
  console.log('this fruit exist in the array');  
}

index==-1?console.log('this fruit doesnot exist in the array'):console.log('this fruit doesnot exist');

let indexOfAvocado=fruits.indexOf('avocado');
if(indexOfAvocado==-1){
  console.log('this fruit doesnot exist in an array');
}else{
  console.log('this fruit exists in an array');
}


//getting last index of an array
const numbers=[1,2,3,4,5]
console.log(numbers.lastIndexOf(5));
console.log(numbers.lastIndexOf(0));
console.log(numbers.lastIndexOf(3));


//to check if an items exist in an array or not ..it returns true or false values 

const numbers=[1,2,3,4,5,6,7,8]
console.log(numbers.includes(5));
console.log(numbers.includes(0));
console.log(numbers.includes(1));

const webTechs=['HTML','CSS','TAILWIND','JAVASCRIPT','REACT','NODE','MONGODB']
console.log(webTechs.includes('Node'));


//to check if the data type is an array
const numbers=[1,2,3,4,5,6,7]
console.log(Array.isArray(numbers));

const number=100
console.log(Array.isArray(number));

//converting array into string 
// tostring
const numbers=[1,2,3,4,5,6]
console.log(numbers.toString));

const names=['rimi','mandhak','kutta','billi']
console.log(names.toString());

//join array elements
const numbers=[1,2,3,4,5,6]
console.log(numbers.join());

const names=['rimi','jha']
console.log(names.join());
console.log(names.join(''));
console.log(names.join(' '));
console.log(names.join(', '));
console.log(names.join(' # '));

//slice an array elements
const numbers=[1,2,3,4,5,6]
console.log(numbers.slice());
console.log(numbers.slice(0));
console.log(numbers.slice(0,numbers.length));
console.log(numbers.slice(1,4));//doesnot include the ending position 

//splice :it takes three parameters=starting position,numbers of times to be removed and number of items to be added

const numbers=[1,2,3,4,5]
numbers.splice()
console.log(numbers);

const numbers=[1,2,3,4,5,6]
numbers.splice(0,1)
console.log(numbers);

//push 
const arr=['item1','item2','item3']
arr.push('new item')
console.log(arr);

const numbers=[1,2,3,4,5,6,7]
numbers.push(9)
console.log(numbers);

numbers.pop()
console.log(numbers);


//shift:it removes an element from the beginning and pop removes the element from the end 
const numbers=[1,2,3,4,5,6,7]
numbers.shift()
console.log(numbers);

//unshift:add an element from the beginning and push add an element from the end
const numbers =[1,2,3,4]
numbers.unshift(0)
console.log(numbers);

//reverse:it reverses the order of an array
const numbers=[1,2,3,4,5,6]
numbers.reverse()
console.log(numbers);

//sorting elements in an array
const webTechs=['html','css','tailwind','javascript','mongodb','nextjs','reactjs']
webTechs.sort()
console.log(webTechs);

//we can even reverse it
webTechs.reverse()
console.log(webTechs);

//array of arrays
//array can store different data types including an array itself
const firstNums=[1,2,3]
const secondNums=[1,4,9]

const arrayOfArray=[[1,2,3,4],[1,2,3]]
console.log(arrayOfArray[0]);

const frontEnd=['html','css','javascript','react']
const backEnd=['node','express','mongodb']
const fullstack=[frontEnd,backEnd]
console.log(fullstack);
console.log(fullstack.length);
console.log(fullstack[0]);
console.log(fullstack[1]);















 





























