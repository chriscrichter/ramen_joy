import React, { useEffect, useState } from 'react';
import {useTodoContext} from "../utils/GlobalState";
import axios from 'axios';
import Card  from '../components/Card';
import "../style/Card.css";
import "../style/Message.css";

const Users = (props) => {
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
  const addFriend = async (friendId) => {
    console.log("adding the friend with id", friendId);
    const _id = localStorage.getItem('id')
    const friend = {
      _id, 
      friendId
    }
    const friends = await axios.post('/api/user/addFriend', friend);
    dispatch({
      type: "RENDERFRIENDS", 
      payload: friends.data
    })
  }

function renderUsers() {
  const splitArray = props.chunk(state.users, 3);
  return splitArray.map((row, key) => {
    return (
      <div className="row rest-row" key={key}>
        {row.map((user, i) => {
          return (
            <div className="col-xs-12 col-lg-3" key={i}>
              <Card key={i} user={user} addFriend={addFriend}type="user"/>
            </div>
          );
        })}
      </div>
    );
  })
}

  function askToLogin(){
    return (
      <div className="msg">
        Please log in to see others ramen lovers and make friends!
      </div>
    )
  }
  console.log("this is the state,lets look at it together", state)
  return ( 
     <div>
      <div>
        {state.user.loggedIn ? renderUsers(): askToLogin()}
        {users ? renderUsers(): ""}
      </div>
    </div>
  );
};
export default Users;