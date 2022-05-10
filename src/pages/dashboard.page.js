import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getBooks } from '../service/book.service'
//import { Menu, MenuItem, MenuButton, MenuList } from '@reach/menu-button'
import "@reach/menu-button/styles.css"
import { deleteBook } from '../service/book.service'
import { issuedBook } from '../service/book.service'

const DashboardPage = (props) => {
  const[books, setBooks] =  useState([])

  useEffect(() => {
    loadBooks()
  }, [])

  const loadBooks = async() => {
    const result = await getBooks()
    if (result) {
      setBooks(result)
    }
  }

  const navigate = useNavigate()
  const logout = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('email')
    navigate('/')
  }

  const createBook = async () => {
      navigate('/create-book');
  }

  const onDeleteBook = async (bookId) => {
    const result = await deleteBook(bookId)
    if(result)
    {
      window.location.reload();
      alert('Book is deleted');
    }
    else {
      alert('You are not an admin');
    }
  }

  const onUpdateBook = async(bookId)=>{
    console.log(bookId)
    navigate('/update-book/', bookId)
  }

  const onIssuedBook = async(bookId)=> {
    const result = await issuedBook(bookId)
    if(result) {
      alert('book is issued to user')
    }
    else {
      alert('something went wrong')
    }
  }

return (
  
<div>
  <div>
    <button style={{float:"left"}} className="btn btn-success" onClick={createBook}>Create new book</button>
    <button style={{float:"right"}} className="btn btn-warning" onClick={logout}>logout</button>
  </div>
  <div>
    <br></br>
    <h2 className='header'>List of Books</h2>
  </div>
  <div className='book-table'>
  <table style={{border:'2px solid'}}>
    <thead>
      <tr style={{border:'1px solid'}}>
      <th>Id</th>
      <th>Title</th>
      <th>Category</th>
      <th>Author</th>
      <th>Quantity</th>
      <th>Operations</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book) => {
      const {bookId, title, category, author, quantity} = book
      return (
      <tr>
      <td>{bookId}</td>
      <td>{title}</td> 
      <td>{category}</td> 
      <td>{author}</td>
      <td>{quantity}</td>
      <td>
        <input type='button' className='button' value='Edit' onClick={()=>onUpdateBook(bookId)}/>
        <input type='button' className='button' value='Delete' onClick={()=>onDeleteBook(bookId)}/>
        <input type='button' className='button' value='Issue' onClick={()=>onIssuedBook(bookId)}/>
          {/* <Menu>
            <MenuButton style={{ alignItems:"center" }}>
              Operations
            </MenuButton>
            <MenuList>
              <MenuItem onSelect ={() => alert('book will be deleted')} onClick={onDeleteBook}>Delete book</MenuItem>
              <MenuItem onSelect={() => alert('Redirecting to update book page')} onClick={onUpdateBook}>Edit</MenuItem>
            </MenuList> 
          </Menu> */}
        </td>
      </tr> 
      )
    })}
    </tbody>
  </table>
  </div>
  </div>
  )
}

export default DashboardPage