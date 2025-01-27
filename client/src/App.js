import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Logout from "./pages/Logout"
import About from "./pages/About"
import Search from "./pages/Search";
import Users from "./pages/Users"; 
import Friends from "./pages/Friends"; 
import Recipes from "./pages/Recipes";
import Info from "./pages/Info"; 
import Register from "./pages/Register"; 
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Vids from "./components/Vids";
import { TodoProvider } from "./utils/GlobalState";
import Messages from "./pages/Messages"; 

const chunkArray = (arr, chunkCount) => {
  let chunks = [],
    i,
    j;
  for (i = 0, j = arr.length; i < j; i += chunkCount) {
    chunks.push(arr.slice(i, i + chunkCount));
  }
  return chunks;
};


function App() {
  return (
    <Router> 
      <div>
        <TodoProvider>
          <Nav />
          <Switch>
            <Route exact path={["/","/home"]}>
              <Home/>
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/logout">
              <Logout />
            </Route>
            <Route exact path="/search">
              <Search chunk={chunkArray}/>
            </Route>
            <Route exact path="/users">
              <Users chunk={chunkArray}/>
            </Route>
            <Route exact path = "/friends">
              <Friends chunk={chunkArray}/>
            </Route>
            <Route exact path="/recipes">
              <Recipes />
            </Route>
            <Route exact path="/vids">
              <Vids />
              </Route>
            <Route exact path="/info">
              <Info />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/messages">
              <Messages />
            </Route>
          </Switch>
        </TodoProvider>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}
export default App;
