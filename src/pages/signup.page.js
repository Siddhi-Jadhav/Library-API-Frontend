import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signup } from '../service/user.service'

const SignupPage = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate()

  const onSignup = async () => {
    if (username.length === 0) {
      alert('please enter username')
    } else if (email.length === 0) {
        alert('please enter email')
    } else if (password.length === 0) {
          alert('please enter password')
    } else {
      const result = await signup(username, email, password)
      if (result) {
        // go to signin
        navigate('/')
      }
    }
  }

  return (
    <div>
      <h1 className="header">Signup</h1>
      <div className="form">
      <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            onChange={(e) => {
              setUsername(e.target.value)
            }}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="email"
            className="form-control"
          />
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
            Already have an account ? Signin <Link to="/">here</Link>
          </div>
          <button onClick={onSignup} className="btn btn-success">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignupPage