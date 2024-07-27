const post=[

  { title : 'post one' , body: 'this is post 1'},
  { title : 'post two' , body: 'this is post 2'}
];

function getpost()
{
  setTimeout(()=>
{

  let output = '';
  post.forEach((ps,index)=>
  {
    output = output + `<li>${ps.title}</li>`;
  });

  document.body.innerHTML = output;

},1000);
}



function createpost(posts){

  return new Promise((resolve, reject) =>{

    setTimeout(()=>
      {
        post.push(posts);

        const error= false;

        if(!error){
          resolve();
        }
        else{
          reject('SOmething went wrong');
        }
      
      },3000);

  });



}


//createpost({title : 'harshal ' , body : 'mali'}).then(getpost);


const promise1 = Promise.resolve('Hello World ');
const promise2 = 10;
const promise3 = new Promise((resolve,reject)=>setTimeout(resolve,2000,'Goodbye'));


Promise.all([promise1,promise2,promise3]).then((values)=>console.log(values));