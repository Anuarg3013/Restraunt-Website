import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";


const Signin=()=>{
    const navigate= useNavigate();
    const[user,setUser]= useState({ email:"",username:"",
    password:""});

    const handleInput=(e)=>{
      console.log(user);
      let name=e.target.name;// accessing the name of label where the event is occuring.
      let value=e.target.value;
      setUser({...user,[name]:value});
      
    }
    
    const PostData = async (e) => {
        e.preventDefault();
        try {
          const res = await fetch("http://localhost:4000/signin", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
             body: JSON.stringify(user),
        });
        console.log(res);
        if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await res.json();
          console.log(data);
        if(res.ok){
            setUser({ email:"",username:"",password:""});
            navigate("/login");
            window.alert("SignedUp successfully");

        }
        } catch (error) {
          console.error('Error:', error);
        }
      };

    return(
    <div className='login_body'>
     <div className="login_b">
      <div className="login_head">
        SignUp Here
      </div>
      <div className="login_form">
       <form className="form" method="POST">
        <div className="login_usern">
           <label for="usernam" className="label">Username</label>
           <input type="text" id="usernam" placeholder="Username" name="username" className="input" value={user.username} onChange={handleInput} />
        </div>
        <div className="login_user">
           <label for="username" className="label">Email</label>
           <input type="text" id="username" placeholder="Email address" name="email" className="input" value={user.email} onChange={handleInput}/>
        </div>
        <div className="login_pass">
           <label for="password" className="label">Password</label>
           <input type="text" id="password" placeholder="Password" name="password" className="input" value={user.password} onChange={handleInput}/>
        </div>
        <div>
          <button className="login_but" onClick={PostData}>SIGNUP</button>
        </div>
       </form>
       <div className="dont">
        <p>Already have an account? <a href="#"><Link to={"/login"}>Login Now</Link></a></p>
       </div>
      </div>
     </div>
    </div>
    )
}

export default Signin;