
import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Register.css";

const Register = () => {
    const navigate = useNavigate();
    const [registerinfo,setregisterinfo] = useState({
        name:"",
        role:"user",
        email:"",
        address:"",
        password:""
    });

  const handleChange= (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copyregisterinfo={...registerinfo};
    copyregisterinfo[name]=value;
    setregisterinfo(copyregisterinfo);
  };

  const handleRegister = async(e) => {
    e.preventDefault();
    const { name,role, email, address, password } = registerinfo;
    if(!name || !role || !email || !address || !password){
        alert("Please fill all the fields");
        return;
    }
    try{
        const url="http://localhost:8000/auth/signup";
        const response=await fetch(url,{method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(registerinfo)
        });

        const result=await response.json();
        const {success,message}=result;
        if(success){
            navigate("/login");
        }
        console.log(result);
    }catch(err){

    }
  }

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
              name="name"
              value={registerinfo.name}
              placeholder="Enter your full name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Role</label>
            <select name="role" value={registerinfo.role} onChange={handleChange} required>
          <option value="user">user</option>
          </select>
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={registerinfo.email}
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={registerinfo.address}
              placeholder="Enter your address"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={registerinfo.password}
              placeholder="Enter a password"
              onChange={handleChange}
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