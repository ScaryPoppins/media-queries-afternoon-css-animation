import React from 'react';
import './App.css';
import './reset.css';

class App extends React.Component {

constructor(){
  super()
    this.state = {
      menuStatus: 'dropdown-menu-close'
    }
}
handleClick = () => {
  if(this.state.menuStatus === 'dropdown-menu-open'){
    this.setState({menuStatus: 'dropdown-menu-close'})
  }
  else {
    this.setState({menuStatus: 'dropdown-menu-open'})
  }
}

 render(){
  return (
      <nav>
        <ul>
          <div>
          <li>Start Bootstrap</li>
           </div>
          <li className= 'menu-text'>Home</li>
          <li className= 'menu-text'>About</li>
          <li className= 'menu-text'>Services</li>
          <li className= 'menu-text'>Contact</li>
          <img 
          onClick = {this.handleClick}
          src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png"></img>
          <div className={this.state.menuStatus}></div>
        
        </ul>


      </nav>
  );
}}

export default App;
