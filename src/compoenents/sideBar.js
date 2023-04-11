import React from 'react'
import './sideBar.css'
import { Link,useLocation,withRouter } from "react-router-dom";
 function SideBar(props) {
    const location = useLocation();

    return (
        <div className="sidebararea">
            <div className="sideBar-profile">
                <img draggable={false} src={'./profile.jpg'} />
            </div>
            <div className="sideBar-links-area">
             <ul>
                 <li onClick={()=>{props.history.push('/');props.handleCloseSideBar()}} className={location.pathname==='/'?"active":""}><Link exact to="/">Home</Link></li>
                 <li onClick={()=>{props.history.push('/about');props.handleCloseSideBar()}} className={location.pathname==='/about'?"active":""}><Link exact to="/about">About</Link></li>
                 <li onClick={()=>{props.history.push('/resume');props.handleCloseSideBar()}} className={location.pathname==='/resume'?"active":""}><Link exact to="/resume">Resume</Link></li>
                 <li onClick={()=>{props.history.push('/contact');props.handleCloseSideBar()}} className={location.pathname==='/contact'?"active":""}><Link exact to="/contact">Contact</Link></li>
                 <li onClick={()=>{props.history.push('/gallery');props.handleCloseSideBar()}} className={location.pathname==='/gallery'?"active":""}><Link exact to="/gallery">Gallery</Link></li>
             </ul>
            </div>
            <div className="sideBar-bottom">
            &copy;  {new Date().getFullYear()} 👨‍💻 Software Engineer 
            </div>
        </div>
    )
}
export default withRouter(SideBar)