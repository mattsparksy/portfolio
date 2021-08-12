import Header from "./components/splash"
import './components/splash.css';
import React, { Component } from 'react'; 
import About from "./components/about";
import Main from "./components/mainBody"



class App extends Component {
  render() { 
    return ( 
      <div className-="App">
        <Header /> 
        <About /> 
        <Main />
      </div>
     );
  }
}
 
export default App;