
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import NavBar from "./pages/NavBar";


function App() {
  
 
  return (
    <div className="App"  style={{ 
      backgroundImage: `url("https://via.placeholder.com/500")` 
    }}>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home} />
       
        <Route exact path="/addUser" component={AddUser} />
        <Route exact path="/editUser/:id" component={EditUser} />
      </Switch> 

 
  
    </div>
  );
}

export default App;
