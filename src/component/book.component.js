import { useNavigate } from 'react-router-dom'
import { deleteBook } from '../service/book.service'
const Book = (props) => {
  const { id, title, category, author, quantity } = props
  const navigate = useNavigate()

  const onDeleteBook = async () => {
    const result = await deleteBook(id)
    console.log(result)
    if (result) {
      console.log(`Blog is deleted`)
      navigate('/dashboard')
    } else {
      alert('something went wrong')
    }
  }

  const onUpdateBook = async()=>{
    navigate('/update-book/')
  }

  return (
    <div className="card" style={{width: '25rem', display:'inline-block', margin:'20px'}}>
    <div className="card-body">
    <h5 className = "card-title"> {title}</h5>
    <p className="card-text">{category}</p>
    <p className="card-text">{author}</p>
    <p className="card-text">{quantity}</p>
    <button onClick={onDeleteBook} className="btn btn-danger">Delete</button>
    <button onClick={onUpdateBook} className="btn btn-success" style={{ marginLeft: '15px' }}>Edit</button>
    </div>
  </div>
  )
}

export default Book