import React from 'react';
import './App.css';

function NavBar() {
  return (
    <nav className="bg-slate-50" expand="lg">
        
            <div className="logo" href="#home">I Code Things</div>

                <div >
                    <li className="about_me_li" > <a href="#aboutMe"/>About Me</li>
                </div>
                <div className="right_side_nav">
                    <li className="projects_li"> <a href="#projects"/>Projects</li>
                    <li className="contact_me_li"> <a href="#contactMe"/>Contact Me</li>
                </div>
            
        
    </nav>

  
  );
}

export default NavBar;