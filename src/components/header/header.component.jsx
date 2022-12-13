import "./header.styles.css"

import logo from "../../assets/images/logo.svg"

const Header = () => {
  return (
    <header className="header">
      <a href="logo"><img src={logo} className="logo" alt="logo" /></a>

      <div>
        <ul className="nav_list">
          <li className="nav_item"><a className="nav_link" href="home">Home</a></li>
          <li className="nav_item"><a className="nav_link" href="new">New</a></li>
          <li className="nav_item"><a className="nav_link" href="popular">Popular</a></li>
          <li className="nav_item"><a className="nav_link" href="trending">Trending</a></li>
          <li className="nav_item"><a className="nav_link" href="categories">Categories</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;