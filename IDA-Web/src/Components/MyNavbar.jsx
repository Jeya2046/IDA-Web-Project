import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import './MyNavbar.css'

const MyNavbar = () => {

  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    const navLinks = document.querySelectorAll('.menu-link li');
    navLinks.forEach((link, index) => {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
    });
  }, [isOpen]);

  function toggleMenu() {
    setIsOpen(!isOpen);
    const menu = document.querySelector(".top-icon");
    const icon = document.querySelector(".menu-link");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  return (
    <>
      <div id="Head-nav" className="NavContainer">
        <div className="logo">
          <Link to={"/"}>ID<span>A</span></Link>
        </div>
        <div className="list">
          <ul>
            <li> <Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/services"}>Services</Link></li>
            <li><Link to={"/clients"}>Clients</Link></li>
            <li><Link to={"/careers"}>Careers</Link></li>
            <li><Link to={"/contactus"}>ContactUS</Link></li>
          </ul>
        </div>
        <div className="login">
          <button className='log-btn'>LogIn</button>
          <button className='sig-btn'>SigUp</button>
        </div>
        <nav id="toggle-nav">
          {/* <div className="logo">IDA</div> */}
          <div className="topmenu">
            <div className="top-icon" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="menu-link">
            <ul>
              <li> <Link to={"/"}>Home</Link></li>
              <li><Link to={"/about"}>About</Link></li>
              <li><Link to={"/services"}>Services</Link></li>
              <li><Link to={"/clients"}>Clients</Link></li>
              <li><Link to={"/careers"}>Careers</Link></li>
              <li><Link to={"/contactus"}>ContactUS</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

export default MyNavbar