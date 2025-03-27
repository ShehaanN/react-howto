import React from "react";

export default function Main(props) {
  const name = "Shehan Nadeesha";
  const position = "front-end developer";
  const myObj = {
    name: `${name}`,
    age: 23,
    position: `${position}`,
    address: {
      address1: "colombo",
      address2: "gampaha",
    },
  };

  //   const { name, position } = myObj;
  return (
    <div>
      This is main component
      <ul>
        <li>JavaScript</li>
        <li>Java</li>
        <li>Python</li>
        <li>C++</li>
      </ul>
      <ol>
        <li>{name}</li>
        <li>{myObj.position}</li>
        <li>{myObj.address.address1}</li>
        <li>{myObj.age}</li>
      </ol>
      {props.children}
      {/* me widihata component ekath ekka ena childrenwa access karanna puluwn */}
    </div>
  );
}
