import React from 'react';
import './Header.css';


class Header extends React.Component {
    
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
        <div className= 'over700-start-bootstrap'>
          Start Bootstrap
        </div>

        <div className= 'over700-text'>
          <ul>SERVICES</ul>
          <ul>PORTFOLIO</ul>
          <ul>ABOUT</ul>
          <ul>TEAM</ul>
          <ul>CONTACT</ul>
        </div>
        <button 
            onClick = {this.handleClick}
            className = 'menu-button'>
            <span>MENU</span>
            <img id='hamburger-menu'

                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/220px-Hamburger_icon.svg.png"></img>
        </button>
        <div className={this.state.menuStatus} >
                <ul id='under700-text'>SERVICES</ul>
                <ul id='under700-text'>PORTFOLIO</ul>
                <ul id='under700-text'>ABOUT</ul>
                <ul id='under700-text'>TEAM</ul>
                <ul id='under700-text'>CONTACT</ul>
        </div>
      </nav>
  );
}}

export default Header;
