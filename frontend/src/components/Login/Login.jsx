import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [logininfo,setlogininfo]=useState({
    email:"",
    password:""
  })

  const handleChange=(e)=>{
    const { name, value } = e.target;
    console.log(name, value);
    const copylogininfo={...logininfo};
    copylogininfo[name]=value;
    setlogininfo(copylogininfo);
  }

  const handleLogin = async(e) => {
    e.preventDefault();
    const {email,password}=logininfo;
    if(!email || !password){
        alert("Please fill all the fields");
        return;
    }
    try{
      const url="http://localhost:8000/auth/login";
      const response=await fetch(url,
        {method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(logininfo)
        }
      )
      const result=await response.json();
      localStorage.setItem("token",result.token);
      localStorage.setItem("role",result.role);
        const {success,message}=result;
        if(success){
          if(result.role==="admin"){
            navigate("/admin");
            return;
          }
            navigate("/user");
        }
        console.log(result);

    }catch(err){}
    
  };

  return (
     <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={logininfo.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={logininfo.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn-login">Login</button>
        </form>

        <p className="login-message">
          Don't have account! <Link to="/register">Register</Link> here
        </p>
      </div>
    </div>
  );
}

export default Login;