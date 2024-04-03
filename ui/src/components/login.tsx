import React, { useState } from 'react';
//import { useForm, Controller }  from 'react-hook-form';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';
import { environment } from '../environment';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const navigate = useNavigate();


const onsubmit = async(event:React.FormEvent) => {
  console.log("Hiii")
  event.preventDefault()
  console.log(email , password);
  try{
    const result = await axios.post(`${environment.baseURL}/auth/login`, { email, password})
    if(result.status === 200) {
      localStorage.setItem('token', result.data.data.token);
      navigate('/products')
    }
  }
  catch(err){
    console.log(err)
  }
}

  return (
    <div>
      <form onSubmit={onsubmit}>
        <InputText type='text' value={email} onChange={(e) => setEmail(e.target.value)} className='p-inputtext-sm' placeholder='Username'>Username :</InputText>
        <InputText type='password' value={password} onChange={(e) => setPassword(e.target.value)}className='p-inputtext-sm' placeholder='Password'>Password :</InputText>
        <Button type="submit">Submit</Button>
    </form> 
    </div>
  )
}

export default Login