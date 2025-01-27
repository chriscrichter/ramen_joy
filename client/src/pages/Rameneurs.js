import React, { useEffect, useState } from 'react';
import "../style/Friends.css";
import {useTodoContext} from "../utils/GlobalState";
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import FriendCard from "../components/FriendCard";
const Users = () => {
  const [state, dispatch] = useTodoContext();
  const [currentFriends, setCurrentFriends] = useState(
    {
      clicked: "notClicked"
  }); 
  const [users, setUsers] = useState(false);
  useEffect(()=>{
    axios("/api/user/users")
    .then(res=>{
      dispatch({
        type:"RENDERALLUSERS", 
        payload: res.data
      })
    })
  },[])
  useEffect(()=>{
    if(localStorage.getItem("id")){
      console.log('local storage heres')
      dispatch({
        type:"loggedIn"
      })
    }
  },[])
  const addFriend = (friendId, name) => async e => {
    console.log("adding the friend with id", friendId, name);
    const _id = localStorage.getItem('id')
    const friend = {
      _id, 
      friendId,
      name
    }
    const friends = await axios.post('/api/user/addFriend', friend);
    dispatch({
      type: "RENDERFRIENDS", 
      payload: friends
    })
    // console.log(state); 
    // renderUserFriends()
  }
  function renderUsers(){
    return (
    state.users.map((user) =>{
      const {name, email, _id} = user; 
      return <FriendCard addFriend={addFriend } email={email} name={ name } id={ _id }/>
     })
    )
  }
  function askToLogin(){
    return (
      <div>
        Log in 
      </div>
    )
  }
  return ( 
     <div className="friends">
      <div className="left">
        <h1>Ramen Friends</h1>
      </div>
      <div className="right">
        <p>
         Ramen Joy is an app for lovers of ramen. The app provides information on ramen, how to make ramen, where to find the best ramen in your area and who to eat it with.
        </p>
      </div>
      <div>
        {state.user.loggedIn ? renderUsers(): askToLogin()}
        {users ? renderUsers(): "no users to find"}
      </div>
    </div>
  );
};
export default Users;