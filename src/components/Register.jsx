import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  // const [email, setEmail] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      console.log({
        ...prevFormData,
        [name]: value,
      });
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 1. vérifier que les champs sont remplis => laisse faire le browser
    // 2. vérifier que password et passwordConfirm sont identiques
    const { password, passwordConfirm } = formData;
    if (password !== passwordConfirm) {
      alert('password and password confirm differ');
      return;
    }
    // 3. poster mes données de formulaire vers le back
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/register`, formData)
      .then((res) => res.data)
      .then((data) => console.log('new user', data))
      .catch((err) => setError(err));
  };

  return (
    <form className="Register" onSubmit={handleSubmit}>
      {error && (
        <div className="Register-error">{error.response.data.error}</div>
      )}
      <label htmlFor="email">
        Email
        <input
          id="email"
          name="email"
          type="email"
          placeholder="johndoe@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="passwordConfirm">
        Confirm password
        <input
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          value={formData.passwordConfirm}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
