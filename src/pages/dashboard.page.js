import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Book from '../component/book.component'
import { getBooks } from '../service/book.service'
import { Menu, MenuItem, MenuButton, MenuList } from '@reach/menu-button'
import "@reach/menu-button/styles.css"

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

  const profile = async () => {
    navigate('/profile');
  }

return (
  
<div>
  <div>
    <Menu>
      <MenuButton style={{ alignItems:"center" }} className="menu">
        Dashboard
      </MenuButton>
      <MenuList>
        <MenuItem onSelect ={() => alert('Redirecting to your Profile')} onClick={profile}>My Profile</MenuItem>
        <MenuItem onSelect={() => alert('Redirecting to create book page')} onClick={createBook}>Create Book</MenuItem>
        <MenuItem onSelect={() => alert('You will be logged out')} onClick={logout}>Logout</MenuItem>
      </MenuList> 
    </Menu>
    <h1 className="header"> Books </h1>
  </div>
    {books.map((book) => {
      const {bookId, title, category} = book
      return <Book bookId={bookId} title={title} category={category} />
    })}
  </div>
  )
}

export default DashboardPage