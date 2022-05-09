import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Book from '../component/book.component'
import { getBooks } from '../service/book.service'

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

return (
  
<div>
  <div>
    <button style={{float:"left"}} className="btn btn-success" onClick={createBook}>Create new book</button>
    <button style={{float:"right"}} className="btn btn-warning" onClick={logout}>logout</button>
  </div>
  <div>
    <br></br>
    <h1 className='header'>Booklist</h1>
  </div>
    {books.map((book) => {
      const {bookId, title, category, author, quantity} = book
      return <Book bookId={bookId} title={title} category={category} author={author} quantity={quantity} />
    })}
  </div>
  )
}

export default DashboardPage