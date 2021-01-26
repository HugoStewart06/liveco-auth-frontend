import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { email, password };
    axios
      .post('http://localhost:5000/api/auth/login', payload, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <label htmlFor="email">
        Email
        <input
          id="email"
          type="email"
          name="email"
          placeholder="johndoe@worldcompany.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label htmlFor="password">
        Password
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
