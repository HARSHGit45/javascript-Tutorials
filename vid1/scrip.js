const name='harshal';
const age = 19;
const iscool = true;
const rating = 4.5;



//basic printing strings


const str=`hello my name is ${name}  my age is : ${age}`;

console.log(str.toUpperCase());



//array

const number = [1,2,3,4];

console.log(number);



const fruit  = new Array('Apple','banana');



console.log(fruit);






//objects 

const person = {
  name : 'harshal',
  age : 19,
  address : 'pune'

  
};

person.email='harshalm633@gmail.com'


console.log(person);

//array-object


const todos = [
  {
    id : 1,
    text : 'wakeup',
    iscomp : true
  },
  {
    id : 2,
    text : 'study',
    iscomp : false
  }
];

//array to json

const todojson = JSON.stringify(todos);

console.log(todojson);

console.log(todos);


//for loop

for(let i=0;i<todos.length;i++)
{
  console.log(todos[i].text);
}

for(let to of todos)
{
  console.log(to.iscomp);
}

//map,filter

const todotext=todos.map(function(todo)
{
  return todo.text;
})

console.log(todotext);


const todocomp = todos.filter(function(todo){
  if(todo.iscomp==true){
    return todo;
  }
}).map(function(todo){
  return todo.text;
})

console.log(todocomp);




//if-else;

const x=170;


if(x===10)
{
  console.log("the number is 10");
}
else if(x>10)
{
  console.log("the number is greater than 10");
}
else{
  console.log("the number is less than 10");
}




// or, and


const z=9;
const y=12;

if(z>5 && y>10)
{
  console.log('x is greater than 5 and y is greater than 10');

}


//ternary operator


const color = z>10 ?'red':'blue';


console.log(color);


//switch case


switch(color){
  case 'red': console.log("The color is red");
  break;


  case 'blue': console.log("The color is blue");
  break;

  default : console.log("no color");
  break;

}


// function


function addnums(nums1,nums2)
{
  const sum= nums1+nums2;

  return sum;
}


const res=addnums(1,2);


console.log("The result is : "+ res);



// function ->



const result = num1=> num1+5;


console.log(result(6));

//



function persont(name,age,dob)
{
  this.name=name;
  this.age=age;
  this.dob=dob;




}


const person1=new persont('harshal',19,'28-12-2004');

console.log(person1.age);

console.log(person1.getbirthyear());