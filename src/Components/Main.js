// const name = "Shehan Nadeesha";
// const position = "front-end developer";
// const myObj = {
//   name: `${name}`,
//   age: 23,
//   position: `${position}`,
//   address: {
//     address1: "colombo",
//     address2: "gampaha",
//   },
// };
// methanadi props tika enne objects widihata a nisa apita eka destructure karaganna puluwn {children} widihata itapasse apita eka children kiyala access karanna puluwn
export default function Main({ children, name, city, image, position }) {
  //   console.log(props);

  //   const {address: { address1, address2 } } = myObj;
  return (
    <div className="main_container">
      {/* This is main component */}
      {/* <ul>
        <li>JS</li>
        <li>JAVA</li>
        <li>python</li>
        <li>C++</li>
      </ul> */}
      {/* <ol> */}
      {/* <li>{name}</li> */}
      {/* <li>{myObj.position}</li> */}
      {/* <li>{address1}</li> */}
      {/* <li>{address2}</li> */}
      {/* <li>{myObj.age}</li> */}
      {/* <li>{name}</li>
        <li>{city}</li>
        <li>{position}</li> */}
      {/* </ol> */}
      {/* {children} */}
      {/* me widihata component ekath ekka ena childrenwa access karanna puluwn */}

      <img
        src={
          image
            ? `${image}`
            : `https://www.bearessentials.ie/wp-content/uploads/2023/09/I-Love-You-Teddy.jpg`
        }
        alt="cardImage"
      />

      <div className="mainBlock_details">
        <h3>{!name ? `no-name` : `${name}`}</h3>
        <p>
          <span>{city}</span>
          <span>{position}</span>
        </p>
      </div>
    </div>
  );
}
