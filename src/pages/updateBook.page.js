import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { updateBook } from '../service/book.service'

const UpdateBookPage = (props) => {
  const {id} =props
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [author, setAuthor] = useState('')
  const [quantity, setQuantity]= useState(0)

  const navigate = useNavigate()

  const onUpdateBook = async () => {
    if (title.length === 0) {
      alert('set title')
    } else if (category.length === 0) {
      alert('set category')
    } else if (author.length === 0) {
        alert('set category')
    } else if (quantity.length === 0) {
        alert('set quantity')
    } else {
      const result = await updateBook(id, title, category, author, quantity)
      if (result) {
        navigate('/dashboard')
      } else {
        alert('Something went wrong')
      }
    }
  }

  return (
    <div>
      <h1 className="header">Update Book</h1>
      <div className="form">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            onChange={(e) => {
              setTitle(e.target.value)
            }}
            type="text"
            className="form-control"
          />{' '}
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            onChange={(e) => {
              setCategory(e.target.value)
            }}
            rows={5}
            type="text"
            className="form-control"
          />{' '}
        </div>

        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            onChange={(e) => {
              setAuthor(e.target.value)
            }}
            type="text"
            className="form-control"
          />{' '}
        </div>

        <div className="mb-3">
          <label className="form-label">Quantity</label>
          <input
            onChange={(e) => {
              setQuantity(e.target.value)
            }}
            type="number"
            className="form-control"
          />
        </div>
        

        <div className="mb-3">
          <button onClick={onUpdateBook} className="btn btn-success">Save</button>
          <Link
            to="/dashboard"
            style={{ marginLeft: '10px' }}
            className="btn btn-danger">Cancel
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpdateBookPage