import { Fragment } from "react";
import "./App.css";
import Main from "./Components/Main";
import { myData } from "./Data/myData";

// methanadi component ekak athule thawath component ekak use karala thiyanwa
const NewBlock = () => {
  return (
    <Fragment>
      {myData?.map((el, index) => {
        return (
          <Main
            // key={index}
            key={el.id}
            name={el.name}
            position={el.position}
            city={el.city}
          />
        );
      })}
    </Fragment>
  );
};

function App() {
  // methana ? eken kiyanne Data ekak thibunoth map kotasa run karawanna nettan a kotasa run karawanne ne , eka skip karanawa , ethakota map eken , mokuth return karanne ne
  // const MainBlock = myData?.map((el, index) => {
  //   return (
  //     <Main
  //       // key={index}
  //       key={el.id}
  //       name={el.name}
  //       position={el.position}
  //       city={el.city}
  //     />
  //   );
  // });
  return (
    <>
      <div>
        <h1>Hello React</h1>
      </div>
      <p>Shehan Nadeesha</p>
      {/* <Main name="Ravindu" city="kiribathgoda" position="Accountant">
        <h5>This is inside the component</h5>
        <h4>I am children</h4>
      </Main>

      <Main name="Nadeesha" city="dompe" position="front-end developer" />
      <Main name="Nethmini" city="kirindiwela" position="back-end developer" /> */}

      {/*methanadi map eken ena element eke (el) methanadi onnam object destructuring use karanna puluwn el wenuwata {name,position,city} ethakota (el.name) wenuwata apita use karanna puluwn {name} kiyala*/}

      {/* {myData.map((el, index) => {
        return (
          <Main
            // key={index}
            key={el.id}
            name={el.name}
            position={el.position}
            city={el.city}
          />
        );
      })} */}

      {/* {MainBlock} */}
      <NewBlock />
    </>
  );
}

export default App;
