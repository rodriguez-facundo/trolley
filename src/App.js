import React, { Component} from "react";
import { hot } from 'react-hot-loader' //remove in production
import Button from '@material-ui/core/Button';
import Logo from "./components/logo"
import "./App.css";

class App extends Component{
  render(){
    return(<div>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <br/>
        <Logo/>
      </div>
    );
  }
}

export default hot(module)(App);
