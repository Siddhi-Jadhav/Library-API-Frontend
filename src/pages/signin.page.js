import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signin } from '../service/user.service'
const SignInPage = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const onSignin = async () => {
    if (email.length === 0) {
      alert('Email field is empty')
    } else if (password.length === 0) {
      alert('Password field is empty')
    } else {
      const result = await signin(email, password)
      if (result) {
        console.log(result);
        navigate('/dashboard')
      } else {
        alert('invalid email or password')
      }
    }
  }
    return (
        <div>
          <h1 className="header">Signin</h1>
          <div className="form">
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                type="email"
                className="form-control"
              />{' '}
            </div>
    
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                type="password"
                className="form-control"
              />
            </div>
    
            <div className="mb-3">
              <div>
                No account ? Register <Link to="/signup">here</Link>
              </div>
              <button onClick={onSignin} className="btn btn-success">
                Sign In
              </button>
            </div>
          </div>
        </div>
      )
    }
export default SignInPage