import React, { useState } from 'react';
import axios from 'axios';

function Profile() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { email };
    axios
      .post('http://localhost:5000/api/users/profile', payload, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit your profile</h2>

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

      <button type="submit">Update</button>
    </form>
  );
}

export default Profile;
