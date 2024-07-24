var  f = document.getElementById('addForm');

var itemlst = document.getElementById('items');

var flt = document.getElementById('filter');

flt.addEventListener('keyup',filteritems);


f.addEventListener('submit',additem);

itemlst.addEventListener('click',removeitem);

function additem(e)
{
  e.preventDefault();

// to get text from the input and add it to list

  var ij = document.getElementById('item').value;

  


  var li =document.createElement('li');

  li.className='list-group-item';

  li.appendChild(document.createTextNode(ij));

 
  var del = document.createElement('button');
  del.className = 'btn btn-danger btn-sm float-right delete';
  del.appendChild(document.createTextNode('X'));



  //to add cross
 li.appendChild(del);
 
 
 
 
  itemlst.appendChild(li);

}


//remove items
function removeitem(e)
{
  if(e.target.classList.contains('delete'))
  {
    if(confirm('Are you Sure'))
    {
      var li = e.target.parentElement;
      itemlst.removeChild(li);
    }
  }
}


//searchiing items

function filteritems(e)
{

  var text = e.target.value.toLowerCase();
  console.log(text);

  var im=itemlst.getElementsByTagName('li');
  console.log(im);

  Array.from(im).forEach(function(i)
{
  var nm = i.firstChild.textContent;

  if(nm.toLowerCase().indexOf(text)==0)
  {
    i.style.display='block';
  }
  else{
    i.style.display='none';
  }
  

});

}