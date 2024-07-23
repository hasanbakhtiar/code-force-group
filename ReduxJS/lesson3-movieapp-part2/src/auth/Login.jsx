import React, { useRef } from 'react'
import { Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const demouser = {
  email:'a@a',
  pass:"1"
}

const Login = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();
  const loginSubmited = e =>{
    e.preventDefault();
    if (demouser.email === emailRef.current.value && demouser.pass === passRef.current.value) {
      navigate('/dashboard');
    }else{
      alert('wrong')
    }
  }
  return (
    <div className='d-flex align-items-center justify-content-center flex-column'>
      <h1 className='text-center my-5'>Login</h1>
      <Col md={5}>
        <form onSubmit={loginSubmited}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input ref={emailRef} required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input ref={passRef} required type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </Col>
    </div>

  )
}

export default Login