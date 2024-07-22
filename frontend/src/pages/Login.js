import React, { useState } from 'react';
import axios from 'axios';
const Login = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const handleSubmit = (e) => {
   e.preventDefault();
   axios.post('http://localhost:3000/api/users/login', { email, password })
     .then(response => {
       localStorage.setItem('token', response.data.token);
       // Redirect to home page or dashboard
     })
     .catch(error => console.error('Error logging in:', error));
 };
 return (
<form onSubmit={handleSubmit}>
<h1>Login</h1>
<div>
<label>Email:</label>
<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
</div>
<div>
<label>Password:</label>
<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
</div>
<button type="submit">Login</button>
</form>
 );
};
export default Login;