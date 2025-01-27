import React, { useEffect, useState } from 'react';
import {useTodoContext} from "../utils/GlobalState";
import axios from 'axios';
import Card from "../components/Card";
import "../style/Card.css";
import "../style/Message.css";

const Friends = (props) => {
  const [state, dispatch] = useTodoContext();
  const [currentFriends, setCurrentFriends] = useState(
    {
      clicked: "notClicked"
  }); 
  const [users, setUsers] = useState(false);
  useEffect(()=>{
    const id = localStorage.getItem("id")
    // console.log(id)
    axios.get(`api/user/friends/${id}`)
    .then(res =>{
      console.log(res.data);
      dispatch({
        type:"RENDERFRIENDS", 
        payload: res.data[0].friends
      })
    })
  },[])
  useEffect(()=>{
    if(localStorage.getItem("id")){
      // console.log('local storage heres')
      dispatch({
        type:"loggedIn"
      })
    }
    console.log(state); 
  },[])
  async function addFriend(friendId, name){
    const _id = localStorage.getItem('id')
    const friend = {
      _id, 
      friendId,
    }
    const friends = await axios.post('/api/user/addFriend', friend);
    dispatch({
      type: "RENDERFRIENDS", 
      payload: friends
    })
    console.log(state); 
  }
  
  function renderFriends() {
    const splitArray = props.chunk(state.friends, 3);
    return splitArray.map((row, key) => {
      return (
        <div className="row rest-row" key={key}>
          {row.map((friend, i) => {
            return (
              <div className="col-xs-12 col-lg-3" key={i}>
                <Card key={i} friend={friend} type="friend"/>
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
  return ( 
     <div className="friends">
      <div>
        {state.user.loggedIn? renderFriends(): askToLogin()}
      </div>
    </div>
  );
};
export default Friends;