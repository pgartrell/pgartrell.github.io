import React from 'react';
import './App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"

function NavBar() {
  return (
    <nav className="flex bg-slate-50" expand="lg">
          
            <div className="logo" href="#home">I Code Things</div>
             
                <div>
                    <li className="about_me_li" > <a href="#aboutMe"/>About Me</li>
                </div>
                <div className="right_side_nav">
                    <li className="projects_li"> <a href="#projects"/>Projects</li>
                    <li className="contact_me_li"> <a href="#contactMe"/>Contact Me</li>
                </div>
              
                <input type="checkbox" id="checkbox_toggle" />
                <label class="hamburger hidden select-none" for="checkbox_toggle"><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></label>
         
    </nav>

  
  );
}

export default NavBar;