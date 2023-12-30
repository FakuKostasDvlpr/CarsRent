import React, { useState } from 'react'
import imagenicono from "./Assets/BrandingIcon.png"
import {Link} from 'react-scroll'
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(true);
    const links = 
        [
    {
        id: 1,
        link: "Nosotros"
    },
    {
        id: 2,
        link: "Contacto"
    },
    {
        id: 3,
        link: "Productos"
    },
        ] 
  return (
    
<>
  <nav class="navbar bg-dark">
    <div class="container-fluid">
      <div className='container-brand'>
        <img src={imagenicono} id='imgIcono' />
        <h3 class="navbar-brand polarsystem" href="#">Polarsystem</h3>
      </div>
      <ul id='navbar-nav' class="navbar-nav justify-content-center flex-row gap-5">
          <a class="link-active">Home</a>
        {links.map((x) =>
                <li class="styleEffect">
                    <a class="items"><Link>{x.link}</Link></a>
                </li>
                
        )}
      </ul>
       <button id='buttonMenu' class="navbar-toggler text-bg-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <RiMenu3Fill color='white'/>
      </button> 
       <div class="offcanvas offcanvas-end itemMenuButton" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
       <div className='container-brand1 bg-dark '>
        <img src={imagenicono} id='imgIcono' />
        <a  class="navbar-brand" href="#"><span>Polarsystem</span></a>
      </div>
        <div class="offcanvas-body bg-dark menu-container-canvas">
          {/* MENU querie MOBILE */}
          <ul id='MenuSlideButton' class="navbar-nav justify-content-end">
            <li class="nav-item">
              <a id='nav-links' class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a id='nav-links' class="nav-link" href="#">Nosotros</a>
            </li>
            <li class="nav-item">
              <a id='nav-links' class="nav-link" href="#">Contacto</a>
            </li>
            <li class="nav-item">
              <a id='nav-links' class="nav-link" href="#">Productos</a>
            </li>
            <div class="contentClose">
            <AiOutlineClose size={22} type="button" class="buttonClose" data-bs-dismiss="offcanvas" aria-label="Close" /> 
          </div>
          </ul>
        </div>
      </div> 
    </div>
</nav>
</>
  )
}

export default NavBar;