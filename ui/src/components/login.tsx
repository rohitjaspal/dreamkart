import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import '../App.css';
import axios from 'axios';
import { environment } from '../environment';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from 'primereact/card';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onsubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log({email, password});
    try {
      const result = await axios.post(`${environment.baseURL}/auth/login`, { email, password })
      if (result.status === 200) {
        localStorage.setItem('token', result.data.data.token);
        navigate('/products')
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="page-container">
    <div className="half-page">
    <div className="p-d-flex">
      <div className="grid" style={{ maxWidth: '400px' }}>
        <div className="col-12 p-3 ml-8 mt-8">
          <Card className='col-12'>
            <form onSubmit={onsubmit} className="p-fluid">
              <div className="p-field my-3">
                <span className="p-float-label">
                  <InputText
                    type='text'
                    id="email"
                    name="email"
                    value={email}
                    autoComplete='off'
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <label htmlFor="email">Email</label>
                </span>
              </div>
              <div className="p-field my-3">
                <span className="p-float-label">
                  <InputText
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    autoComplete='off'
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <label htmlFor="password">Password</label>
                </span>
              </div>
              <div className="p-field">
                <Button
                  type="submit"
                 
                  className="p-mt-2 justify-content-center"
                                  >Log In</Button>
              </div>
              <span className='p-field my-3'><Link to="">Forgot Password</Link></span>
              
                <p className='p-field mt-4'>Create New Account {''}<Link to="/signup">Register Now</Link></p>
              
            </form>
          </Card>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Login