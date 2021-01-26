import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { email, password };
    axios
      .post('http://localhost:5000/api/auth/login', payload, {
        withCredentials: true,
      })
      .then(() => {
        history.push('/profile');
      })
      .catch((err) => {
        setError(err.response.data.error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      {error && (
        <div id="error-message" className="Login-error">
          {error}
        </div>
      )}

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
