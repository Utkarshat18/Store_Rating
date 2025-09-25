
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import "./Register.css";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // Replace this with API call to backend
    alert(`Name: ${name}\nEmail: ${email}\nAddress: ${address}\nPassword: ${password}`);
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        <p className="register-message">
          Create an account to start rating stores 🛒⭐
        </p>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Address</label>
            <input
              type="text"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-register">Register</button>
        </form>

        <p className="register-message">
            Already have an account? Please <Link to="/login">Login</Link> here
        </p>
      </div>
    </div>
  );
}

export default Register;