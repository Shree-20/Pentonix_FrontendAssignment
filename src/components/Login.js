import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const apiUrl = 'http://afc7a104784594208b12c3474fa3c924-1060237241.us-east-2.elb.amazonaws.com:9002/login';
    
    try{
        const response = await axios.post(apiUrl,{
            email,
            password

    });
    const token = response.data.token;

    sessionStorage.setItem('jwtToken',token);

}catch (error){
    console.error('Login failed',error);
}
  };
 return (
  <div className="container"> 
  <h2>Login</h2>
  <form onSubmit={handleSubmit}>
    <label>Email:</label>
    <input type="email" value={email} onChange={handleEmailChange} />
    <label>Password:</label>
    <input type="password" value={password} onChange={handlePasswordChange} />
    <button type="submit">Login</button>
  </form>
</div>
  );
};

export default Login;
