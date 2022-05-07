import { useNavigate } from 'react-router-dom'
import { deleteBook } from '../service/book.service'
import { Menu, MenuItem, MenuButton, MenuList } from '@reach/menu-button'
import "@reach/menu-button/styles.css"
const Book = (props) => {
  const { bookId, title, category, author, quantity } = props
  const navigate = useNavigate()

  const onDeleteBook = async () => {
  }

  const onUpdateBook = async()=>{
    navigate('/update-book/')
  }

  return (
    <div className='book-table'>
    <table>
      <tr>
        <td>
          {bookId}
        </td>
        <td>
          {title}
        </td>
        <td>
          {category}
        </td>
        <td>
          {author}
        </td>
        <td>
          {quantity}
        </td>
        <td>
          <Menu>
            <MenuButton style={{ alignItems:"center" }}>
              Operations
            </MenuButton>
            <MenuList>
              <MenuItem onSelect ={() => alert('Redirecting to your Profile')} onClick={onDeleteBook}>Delete book</MenuItem>
              <MenuItem onSelect={() => alert('Redirecting to create book page')} onClick={onUpdateBook}>Edit</MenuItem>
            </MenuList> 
          </Menu>
        </td>
      </tr>
    </table>
    </div>
    
    // <div className="card" style={{width: '14rem',height: '15rem' , display:'inline-block', margin:'20px'}}>
    //   <div className="card-body">
    //   <h5 className = "card-title"> {title}</h5>
    //   <p className="card-text">{category}</p>
    //   <p className="card-text">{author}</p>
    //   <p className="card-text">{quantity}</p>
    //   <button onClick={onDeleteBook} className="btn btn-danger">Delete</button>
    //   <button onClick={onUpdateBook} className="btn btn-success" style={{ marginLeft: '15px' }}>Edit</button>
    //   </div>
    // </div>
  )
}

export default Book