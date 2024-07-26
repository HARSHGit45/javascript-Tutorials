// Book class
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI class
class UI {
  static displayBooks() {

   

    const books = store.getbooks();

    books.forEach((book) => UI.addBook(book));
  }

  

  static addBook(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.appendChild(row);
  }



  static deletebook(el)
  {
    if(el.classList.contains('delete'))
    {
      el.parentElement.parentElement.remove();
    }

  }



  static showAlert(message,clas)
  {

    const div = document.createElement('div');
    div.className=`alert alert-${clas} mt-3`;
    div.appendChild(document.createTextNode(message));
    const cont = document.querySelector('.container');
    const frm = document.querySelector('#book-form');
    cont.insertBefore(div,frm);
    // visible for 3s
    setTimeout(()=> document.querySelector('.alert').remove(),3000);

  }


  static clearfield()
  {
    document.getElementById('title').value="";
    document.getElementById('author').value="";
    document.getElementById('isbn').value="";
  }

  
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);




//add book
document.querySelector('#book-form').addEventListener('submit',(e)=>{
  e.preventDefault;
  const tl = document.getElementById('title').value;
  const aut = document.getElementById('author').value;
  const isb = document.getElementById('isbn').value;



  if(tl==="" || aut==="" || isbn==="")
  {
    UI.showAlert('Please Fill all the Fields','danger');
  }
  else
  {

  const book = new Book(tl,aut,isb);

  UI.addBook(book);
  store.addbook(book);


  UI.clearfield();

  UI.showAlert('The book was added Successfully!! ','success');


  }


})



// remove a book  
document.getElementById('book-list').addEventListener('click', (e)=>
{
  UI.deletebook(e.target)
  UI.showAlert('The book was Removed!! ','info');
  store.removebook(e.target.parentElement.previousElementSibling.textContent);
});


//storage

class store{
  static getbooks()
  {
    let books;

    if(localStorage.getItem('books')===null){
      books=[];

    }
    else{
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;

  }
  static addbook(book)
  {

    const books = store.getbooks();
    books.push(book);

    localStorage.setItem('books',JSON.stringify(books));

  }
  static removebook(isbn)
  {
    const books = store.getbooks();

    books.forEach((book,index) =>
    {
      if(book.isbn===isbn)
      {
        books.splice(index,1);
      }
    });

    localStorage.setItem('books',JSON.stringify(books));

  }

}