import React, {useState} from "react";
import "../style/RegLog.css";
import axios from "axios"; 
import Logo from "../images/ramen.png";
import Axios from "axios";
import {useTodoContext} from "../utils/GlobalState";
import "../style/Message.css";

const logoSize = {
  width: "calc(15% + 2vw)"
};

const Contact = () => {
  const [usernameInput, setUsername] = useState();
  const [emailInput, setEmail] = useState();
  const [passwordInput, setPassword] = useState();
  const [inputURL, setInputURL] = useState();
  const [registered, setRegistered] = useState(false);

  const [state, dispatch] = useTodoContext();

  function handleInput(e){
    if(e.target.name === "username"){
      const usernameInput = e.target.value; 
      setUsername(usernameInput);  
    } else if (e.target.name === "email") {
      const emailInput = e.target.value; 
      setEmail(emailInput); 
    } else if (e.target.name === "password") {
      const passwordInput = e.target.value; 
      setPassword(passwordInput); 
    } else {
    const inputURL = e.target.value; 
    setInputURL(inputURL); 
  }
  }

  async function handleRegister(e) {
    e.preventDefault()
    const userRegister = {
      name: usernameInput,
      email: emailInput, 
      password: passwordInput,
      image: inputURL
    }
    const registerResponse = await axios.post("/api/user/register", userRegister)
    console.log(registerResponse)
    dispatch({
      type:"RENDERALLUSERS", 
      id: registerResponse.data.newUser._id,
      username: registerResponse.data.newUser.name,
      image: registerResponse.data.newUser.image,
    })
    setRegistered(true)
  }

  function registerForm () {
    return (
      <div className="container form-container">
        <div className="row form-row">
          <div className="col register-form">
          <form className="register-form" onSubmit={handleRegister}>
            <input
              onChange={handleInput}
              name="username"
              type="text"
              placeholder="username"
              className="form-input"
              />
            <input 
              onChange={handleInput}
              name="email"
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
              <input
              onChange={handleInput}
              name="image"
              type="text"
              placeholder="profile photo URL"
              className="form-input"
              />
            <button className="form-btn" type="submit">Submit</button>
          </form>
          <div className="logo">
            <img src={Logo} style={logoSize}/>
          </div>
          </div>
        </div>
      </div>
    );
  }
  
  function renderRegistered(){
    {console.log(registered)};
    return(
      <div className="msg">you are now registered !</div>
    )
  }

  console.log(state); 
  return ( 
    <div>
      {console.log(registered)}
      {   
        registered ? renderRegistered(): registerForm()
      }
    </div>
   );
};

export default Contact;
