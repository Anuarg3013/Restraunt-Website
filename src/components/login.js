import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logedIn } from "./utils/logedin";


const Login = () => {

  const dispatch=useDispatch();

  function loggedIn(){
    console.log("add")
    dispatch(logedIn())
  }
  
    const navigate=useNavigate();
    const[user,setUser]= useState({username:"",password:""});

    const handleSubmit=(e)=>{
      console.log(user);
      let name=e.target.name;// accessing the name of label where the event is occuring..
      let value=e.target.value;
      setUser({...user,[name]:value});
    }

    const PostData = async (e) => {
      e.preventDefault();
      try {
        const res = await fetch("http://localhost:4000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
           body: JSON.stringify(user),
       });
      console.log(res);
      if (!res.ok) {
          window.alert("Invalid email or password");
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
      if(res.ok){
          setUser({ email:"",password:""});
          navigate("/");
          window.alert("Login successful");
          loggedIn();

      }
      } catch (error) {
        console.error('Error:', error);
      }
    };

  return (
    <div className='login_body'>
     <div className="login_b">
      <div className="login_head">
        Login Here
      </div>
      <div className="login_form">
       <form className="form" method="POST">
        <div className="login_user">
           <label for="username" className="label">Email</label>
           <input type="text" id="username" placeholder="Email address" className="input" name="username" value={user.username} onChange={handleSubmit}/>
        </div>
        <div className="login_pass">
           <label for="password" className="label">Password</label>
           <input type="text" id="password" placeholder="Password" className="input" name="password" value={user.password} onChange={handleSubmit}/>
        </div>
        <div>
          <button className="login_but" onClick={PostData}>LOGIN</button>
        </div>
       </form>
       <div className="dont">
        <p>Not Registered?<a href="#"><Link to={"/signin"}>Create an account</Link></a></p>
       </div>
      </div>
     </div>
    </div>
  );
};

export default Login;