import React, { FormEvent, useState } from 'react';
import { useForm, Controller }  from 'react-hook-form';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';
import { environment } from '../environment';

const Login = () => {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');


const onsubmit = async(event:React.FormEvent) => {
  console.log(email , password);
  console.log(event);
    const result = await axios.post(environment.baseURL + '/auth/login' , {})
      console.log(result);
    
}

  return (
    <div>
      <form onSubmit={() => onsubmit}>
        <InputText type='text' value={email} onChange={(e) => setEmail(e.target.value)} className='p-inputtext-sm' placeholder='Username'>Username :</InputText>
        <InputText type='password' value={password} onChange={(e) => setPassword(e.target.value)}className='p-inputtext-sm' placeholder='Password'>Password :</InputText>
        <Button type="submit">Submit</Button>
    </form> 
    </div>
  )
}

export default Login