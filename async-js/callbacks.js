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



function createpost(posts,callback){
setTimeout(()=>
{
  post.push(posts);
  callback();

},3000);
}






createpost({title: ' harshal Mali' , body : 'this is harshal'}, getpost);