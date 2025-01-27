import React, { createContext, useReducer, useContext } from "react";
const TodoContext = createContext();
const { Provider } = TodoContext;
function reducer(state, action) {
  switch (action.type) {
  case "loggedIn":
    // console.log(action)
    return  {
      ...state, 
      user: {
        id: action.id,
        email: action.email,
        loggedIn: true
      }
    }
  case "loggedOut":
    return {
      ...state, 
      user:{
        id: action.id,
        email: action.email,
        loggedIn: false
      }
    }
  case "ADDFRIENDS": 
    return {
      ...state, 
      friends:[...state.friends, action.payload]
    }
  case "RENDERFRIENDS":
    return {
      ...state, 
      friends:  action.payload
    }
    case "RENDERALLUSERS":
      return {
        ...state,
        users: action.payload
      }
    case "MESSAGE": 
      return {
        ...state, 
        user: {
          messages: action.payload
      }
    }
  default:
    return state;
  }
}
function TodoProvider({ value = [], ...props }) {
  const [state, dispatch] = useReducer(reducer, {
    user: {
      id: "",
      email: "",
      loggedIn: false,
      image:"",
        messages: [{
        recieverId:"",
        sendingId: "", 
        messages: ""
      }]
    },
    friends: [],
    users: [
      {
        name:"",
        email:"",
        id:"",
        image:""
      }
    ]
  }
);
  return <Provider value={[state, dispatch]} {...props} />;
}
function useTodoContext() {
  return useContext(TodoContext);
}
export { TodoProvider, useTodoContext };