import React, {useState} from 'react';
import axios from "axios"; 
import {Route, Redirect, PublicHomePage} from "react"; 
import Friends from "./Friends"
import {useTodoContext} from "../utils/GlobalState";
import Logo from "../images/ramen.png";
import "../style/RegLog.css";
import "../style/Message.css";

const Login = () => {
  const [emailInput, setEmailInput] = useState();
  const [password, setPassword] = useState(); 
  const [loggedIn, setLoggedIn] = useState(); 
  
  const [state, dispatch] = useTodoContext();

  function handleInput(e){
    if(e.target.name === "login"){
      const email = e.target.value; 
      setEmailInput(email);  
    }else {
      const passwordInput = e.target.value; 
      setPassword(passwordInput); 
    }
  }

  async function handleLogin(e){
    e.preventDefault()
    console.log(e)
    const userLogin= {
      email: emailInput, 
      password: password
    }
    // console.log(userLogin); 
    const loginResponse = await axios.post("/api/user/login", userLogin); 
    console.log(loginResponse); 

    console.log(loginResponse.data.msg)

    
    if(loginResponse.data.msg === "You are logged in."){
      setLoggedIn(true)
      localStorage.setItem("id", loginResponse.data.user._id);
      console.log('loggen')
      dispatch({
        type:"loggedIn", 
        id: loginResponse.data.user._id,
        email: loginResponse.data.user.email,
        loggedIn: true
      })
    } 
  }
  function loginForm(){
    console.log('loginform')
    return (
     <div className="container form-container">
     <div className="row form-row">
       <div className="col register-form">
       <form className="register-form" onSubmit={handleLogin}>
         <input
           onChange={handleInput}
           name="login"
           type="text"
           placeholder="email"
           className="form-input"
           />
         <input
           onChange={handleInput}
           name="password"
           type="text"
           placeholder="password"
           className="form-input"
           />
         <button className="form-btn">log in</button>
       </form>
       <div className="logo">
          <img src={Logo}/>
        </div>
       </div>
     </div>
   </div>
    )
  }

  function renderLoggedIn(){
    {console.log(loggedIn)};
    return(
      <div className="msg">
        You are now logged in ! 
    </div>
    )
  }

  console.log(state); 
  return ( 
    <div>
      {console.log(loggedIn)}
      {   
        loggedIn ? renderLoggedIn(): loginForm()
      }
    </div>
   );
}
 
export default Login;