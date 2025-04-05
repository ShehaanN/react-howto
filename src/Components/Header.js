import { useState } from "react";
import closeMenu from "../image/close-md-svgrepo-com.svg";
import menu from "../image/menu-svgrepo-com.svg";

const Header = () => {
  const [menuClick, setMenuClick] = useState(false);

  return (
    <header className="header_container">
      <h1>
        MDS <span>DEV</span>
      </h1>
      <nav>
        <img
          src={menu}
          alt="menu"
          onClick={() => {
            setMenuClick((pre) => (!pre ? true : pre));
          }}
        />
        <ul
          style={{
            right: `${menuClick ? "-20px" : "-250px"}`,
            display: `${menuClick ? "flex" : "none"}`,
          }}
        >
          <div className="header_menuClose">
            <img
              src={closeMenu}
              alt="close menu"
              onClick={() => {
                setMenuClick(false);
              }}
            />
          </div>
          <div className="header_menu">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Project</li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
