import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderNew from "./HeaderNew";

const Contact = () => {
  const [mainData, setMainData] = useState([]);
  const [themeChange, setThemeChange] = useState(false);

  console.log(mainData);

  useEffect(() => {
    console.log("use effect running....");

    const dataFetching = async () => {
      console.log("fun call....");

      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      if (data) {
        // console.log(data);
        setMainData(data);
      }
    };

    dataFetching();
  }, []);

  return (
    <ContactContainer>
      <HeaderNew />
      Contact Page
      <button
        onClick={() => {
          setThemeChange((pre) => (pre ? false : true));
        }}
      >
        Change Theme
      </button>
      <ContactBlock>
        {mainData?.map(({ id, title }) => {
          return (
            <Link to={`/contact/${id}`} key={id}>
              <ContactBlockUnit changeTheme={themeChange}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMwwHMZHueGLGjB9ugjCLgOLnTwr4zxtBkNQ&s"
                  alt="contactimage"
                />
                <h3>{title}</h3>
              </ContactBlockUnit>
            </Link>
          );
        })}
      </ContactBlock>
    </ContactContainer>
  );
};

export default Contact;

// methana styled component use karaddi const styled component eke name eka itapasse eka = karanawa styled.div (api use karanna balaporottu wala html tag eke name eka)

const ContactContainer = styled.main`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactBlock = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 25px;
`;

const ContactBlockUnit = styled.div`
  background-color: ${(props) => (props.changeTheme ? "black" : "#f7b0b0")};
  padding: 20px;
  border: 2px solid
    ${({ changeTheme }) => {
      if (changeTheme) {
        return "black";
      } else {
        return "#f7b0b0";
      }
    }};
  border-radius: 7px;
  transition: all 400ms ease-in;

  &:hover {
    background-color: inherit;
  }

  img {
    width: 100%;
    object-fit: contain;
  }

  h3 {
    font-size: 15px;
  }
`;
