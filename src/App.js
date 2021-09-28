import "./App.css";
import Login from "./Login";
import "./login.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./dashboard";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;//first cahnge etc
