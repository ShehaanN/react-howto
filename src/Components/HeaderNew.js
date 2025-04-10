import { useState } from "react";
import closeMenu from "../image/close-md-svgrepo-com.svg";
import menu from "../image/menu-svgrepo-com.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderNew = () => {
  const [menuClick, setMenuClick] = useState(false);
  return (
    <HeaderContainer>
      <HeaderLeft>
        <h1>
          Dola<span>DEV</span>
        </h1>
      </HeaderLeft>
      <HeaderRight menuClick={menuClick}>
        <img
          onClick={() => {
            setMenuClick((pre) => (!pre ? true : pre));
          }}
          src={menu}
          alt="menu"
        />
        <ul>
          <img
            onClick={() => {
              setMenuClick((pre) => (pre ? false : pre));
            }}
            src={closeMenu}
            alt="close"
          />
          <div>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link to={"/project"}>Project</Link>
            </li>
          </div>
        </ul>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default HeaderNew;

const HeaderContainer = styled.header`
  width: 100vw;
  position: sticky;
  padding: 17px;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #d2fce6;
`;

const HeaderLeft = styled.div``;

const HeaderRight = styled.nav`
  position: relative;

  ul {
    position: absolute;
    z-index: 110;
    top: -22px;
    right: ${({ menuClick }) => (menuClick ? "-22px" : "-250px")};
    background-color: #2dfc8e;
    padding: 17px;
    transition: all 400ms ease-in;

    div {
      padding: 50px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 17px;
    }
  }

  img {
    width: 27px;
    object-fit: contain;
    cursor: pointer;
  }
`;
