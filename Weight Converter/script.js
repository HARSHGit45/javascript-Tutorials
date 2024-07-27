const inp = document.getElementById('inp');


const out = document.getElementById('output');

out.style.visibility='hidden';


const mn = document.getElementById('mn');



const o1 = document.getElementById('o1');
const o2 = document.getElementById('o2');
const o3 = document.getElementById('o3');

inp.addEventListener('input', function(e)
{
  out.style.visibility='visible';


  let i = e.target.value;
  
  
  if(mn.selectedIndex==0)
  {
  

    o1.innerHTML = `<h4>Gram:</h4> ${i*1000}`;
    o2.innerHTML = `<h4>Pounds:</h4> ${i*2.2046}`;
    o3.innerHTML = `<h4>Ounces:</h4> ${i*35.027396}`; 
    
    
  }
  else if(mn.selectedIndex==1)
  {
    o1.innerHTML = `<h4>KiloGram:</h4> ${i/1000}`;
    o2.innerHTML = `<h4>Pounds:</h4> ${i*0.00220462}`;
    o3.innerHTML = `<h4>Ounces:</h4> ${i*0.03527396}`;

  }
  else
  {
    o1.innerHTML = `<h4>KiloGram:</h4> ${i/2.2046}`;
    o2.innerHTML = `<h4>gram:</h4> ${i/0.00220462}`;
    o3.innerHTML = `<h4>Ounces:</h4> ${i*16}`;


  }
});
