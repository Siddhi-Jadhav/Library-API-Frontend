const Book = (props) => {
  const { title, category, author, quantity } = props

  return (
    <div className="card" style={{width: '25rem', display:'inline-block', margin:'20px'}}>
    <div className="card-body">
    <h5 className = "card-title"> {title}</h5>
    <p className="card-text">{category}</p>
    <p className="card-text">{author}</p>
    <p className="card-text">{quantity}</p>
    </div>
  </div>
  )
}

export default Book