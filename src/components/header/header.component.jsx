import "./header.styles.css"

import iconMenu from "../../assets/images/icon-menu.svg"

import iconMenuClose from "../../assets/images/icon-menu-close.svg"

import logo from "../../assets/images/logo.svg"



const Header = () => {

  function openNav() {
    document.querySelector(".sidenav").style.width = "400px";
    document.querySelector(".btn_nav").style.display = "none";
  }

  function closeNav() {
    document.querySelector(".sidenav").style.width = "0";
    document.querySelector(".btn_nav").style.display = "block";
  }

  return (
    <header className="header">
      <a href="logo"><img src={logo} className="logo" alt="logo" /></a>

      <nav className="nav_css">
        <ul className="nav_list">
          <li className="nav_item"><a className="nav_link" href="home">Home</a></li>
          <li className="nav_item"><a className="nav_link" href="new">New</a></li>
          <li className="nav_item"><a className="nav_link" href="popular">Popular</a></li>
          <li className="nav_item"><a className="nav_link" href="trending">Trending</a></li>
          <li className="nav_item"><a className="nav_link" href="categories">Categories</a></li>
        </ul>
      </nav>



      {/* Hamburger Menu */}
      <button className="btn_nav" onClick={openNav}>
        <img src={iconMenu} alt="menu bar" />
      </button>

      {/* Mobill Menu */}

      <div className="sidenav">
        <button className="closebtn" onClick={closeNav}>
          <img src={iconMenuClose} alt="" />
        </button>
        <a href="0">Home</a>
        <a href="0">New</a>
        <a href="0">Popular</a>
        <a href="0">Trending</a>
        <a href="0">Categories</a>
      </div>
    </header>
  );
}

export default Header;