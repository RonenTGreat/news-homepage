import "./header.styles.css"

import iconMenu from "../../assets/images/icon-menu.svg"

import iconMenuClose from "../../assets/images/icon-menu-close.svg"

import logo from "../../assets/images/logo.svg"



const Header = () => {

  function openNav() {
    document.querySelector(".sidenav").style.width = "70%";

    // Causes page not to scroll when nav is opened
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
  }

  function closeNav() {
    document.querySelector(".sidenav").style.width = "0";
    document.body.style.position = '';
    document.body.style.top = '';
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
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
        <div>
          <a href="0">Home</a>
          <a href="0">New</a>
          <a href="0">Popular</a>
          <a href="0">Trending</a>
          <a href="0">Categories</a>
        </div>
      </div>
    </header>
  );
}

export default Header;