// import { useState } from "react";
// import "./App.css";
// import Main from "./Components/Main";
// import { myData } from "./Data/myData";

// // methanadi component ekak athule thawath component ekak use karala thiyanwa
// // const NewBlock = () => {
// //   return (
// //     <Fragment>
// //       {myData?.map((el, index) => {
// //         return (
// //           <Main
// //             // key={index}
// //             key={el.id}
// //             name={el.name}
// //             position={el.position}
// //             city={el.city}
// //           />
// //         );
// //       })}
// //     </Fragment>
// //   );
// // };

// function App() {
//   // let myVar = "Shehan Nadeesha";
//   // const [myVar, setMyVar] = useState("Shehan Nadeesha");
//   const [myVar, setMyVar] = useState({
//     id: "001",
//     name: "MD Shehan",
//     city: "Gampaha",
//   });
//   // me useState ekedi onama value ekak default value eka vidihata denna puluwn / hebai default value eka dena type ekenma change ekak sidda wenna one

//   const [myDataState, setMyDataState] = useState(myData);

//   const [inputVal, setInputVal] = useState(0);
//   // console.log(myDataState);
//   // console.log(inputVal);

//   const inputChangeHandle = (event, data) => {
//     event.preventDefault();
//     console.log(data);
//     setInputVal(event.target.value);
//   };

//   const clickHandle = () => {
//     // myVar = "MDS NADEESHA";
//     // setMyVar("MDS NADEESHA");
//     setMyVar({ ...myVar, name: "MDS NADEESHA", city: "Colombo" }); // mekedi kiyanne myVar wala thiyana values tika methanta spread karanna (spread operator- ...) kiyala thama me dala thiyenne ||
//     // console.log(myVar);
//     //
//     // // meka function eken eliyata demmoth console lock karanne render wena mohotha, meka mehema thiyeddi console lock karanne render wena mohothak neme, render wenne me click eka kriyathmaka wela function kriyathmaka unama thama render wenne ethakota render eka wenne passe , a mohothedi thiyenne kalin value ekamai

//     setMyDataState([
//       ...myDataState,
//       {
//         id: "005",
//         name: "MPPD Wijesundara",
//         city: "Nittambuwa",
//         position: "WEB developer",
//         image:
//           "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/08/7559004/1.jpg?3905",
//       },
//     ]);

//     setTimeout(() => {
//       // setInputVal(inputVal + 1);// den mehema previous value eka state ekenma gattama enne aththama previous value eka neme/ a kiyanne methana component eka refresh wenna kalin mn click eka 2parak click karoth , state eka wenas wela ne aththatama ethana pennanne pre value ekata kalin value eka (mokada state eka change wenne comonent eka full render unama nisa----------> mekata solution eka thama previous value eka state eken ganne nethuwa set function ekenma illa ganna eka ,,,mokada component eka refresh unath nethath set funtion eke previous value eka thiyanawa---------setInputVal((pre)=> pre+1) )
//       setInputVal((pre) => pre + 1);
//       console.log("I am clicked");
//     }, 3000);
//   };
//
//   // methana ? eken kiyanne Data ekak thibunoth map kotasa run karawanna nettan a kotasa run karawanne ne , eka skip karanawa , ethakota map eken , mokuth return karanne ne
//   const MainBlock = myDataState?.map((el, index) => {
//     // mekedi myData kiyana eka useState ekata load karala thiyana nisa myData wenuwata myDataState kiyana eka use karanna puluwn
//     return (
//       <Main
//         // key={index}
//         key={el.id + index}
//         name={el.name}
//         position={el.position}
//         city={el.city}
//         image={el.image}
//       />
//     );
//   });
//   return (
//     <div>
//       <div>
//         {/* <h1>{myVar.name}</h1> */}
//         <h1>{inputVal}</h1>
//       </div>
//       {/* <p>Shehan Nadeesha</p> */}
//       {/* <Main name="Ravindu" city="kiribathgoda" position="Accountant">
//         <h5>This is inside the component</h5>
//         <h4>I am children</h4>
//       </Main>

//       <Main name="Nadeesha" city="dompe" position="front-end developer" />
//       <Main name="Nethmini" city="kirindiwela" position="back-end developer" /> */}
//       {/*methanadi map eken ena element eke (el) methanadi onnam object destructuring use karanna puluwn el wenuwata {name,position,city} ethakota (el.name) wenuwata apita use karanna puluwn {name} kiyala*/}
//       {/* {myData.map((el, index) => {
//         return (
//           <Main
//             // key={index}
//             key={el.id}
//             name={el.name}
//             position={el.position}
//             city={el.city}
//           />
//         );
//       })} */}
//       <div className="mainBlock_container">{MainBlock}</div>
//       {/* <NewBlock /> */}

//       <br />
//       <br />
//       <button
//         style={{
//           fontSize: "20px",
//           border: "1px solid red",
//           padding: "7px 12px",
//         }}
//         onClick={clickHandle}
//       >
//         click Me
//       </button>
//       <br />
//       <br />

//       <input
//         style={{
//           border: "1px solid red",
//           fontSize: "14px",
//           padding: "7px",
//         }}
//         type="text"
//         placeholder="Type what you want"
//         // onChange={(e) => {
//         //   e.preventDefault();
//         //   setInputVal(e.target.value);
//         // }}
//         onChange={(e) => {
//           inputChangeHandle(e, inputVal);
//         }}
//       />
//     </div>
//   );
// }

// export default App;

// methanin uda useState eka dakwa theory thiyanawa, app ekata cmt kala;
//--------------------------------------------------------
// import React, { useEffect, useState } from "react";
// import "./App.css";
// import Unit from "./Components/Unit";
// import Header from "./Components/Header";
// // apita me app eka athule function hadana hari useState hadana hari wena mokuth weda karan nettam {},return mokuth nethuwa direct return karanna puluwn () witharak dala--------namuth app ekedi func, useState one wana nisa app eke direct return awasthawa practical ne ,,, namuth wena component ekata direct return awasthawa use karanna puluwn
// const App = () => {
//   const [imageUrl, setImageUrl] = useState("");
//   const [name, setName] = useState("");
//   const [city, setCity] = useState("");
//   const [position, setPosition] = useState("");
//   const [myData, setMyData] = useState([]);
//   // console.log(myData);

//   useEffect(() => {
//     console.log("use effect calling..");
//   }, [name]);

//   // console.log(imageUrl);
//   return (
//     <div>
//       <Header />
//       <div className="main_container_1">
//         <div className="main_left_1">
//           <input
//             type="text"
//             placeholder="Image Url"
//             value={imageUrl} //methanadi imageUrl state eka me  input eke value eka widihat dila thiyanawa
//             onChange={(e, data) => {
//               e.preventDefault();
//               setImageUrl(e.target.value);
//             }}
//           />

//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => {
//               e.preventDefault();
//               setName(e.target.value);
//             }}
//           />
//           {/* methanadi wenne me input eke change ekak sidda weddi, changing value eka gihin setName ekat wetenawa,, itapasse eka setName haraha name state ekata wetenawa...ethakota name state eke value eka thama pennanne */}
//           <input
//             type="text"
//             placeholder="City"
//             value={city}
//             onChange={(e) => {
//               e.preventDefault();
//               setCity(e.target.value);
//             }}
//           />
//           <input
//             type="text"
//             placeholder="Position"
//             value={position}
//             onChange={(e) => {
//               e.preventDefault();
//               setPosition(e.target.value);
//             }}
//           />
//           <button
//             onClick={() => {
//               // console.log({
//               //   imageUrl,
//               //   name,
//               //   city,
//               //   position,
//               // });

//               setMyData((pre) => {
//                 return [...pre, { image: imageUrl, name, city, position }];
//               });
//               // methana button eka click karama setMydata walin previous data aragena a pre data walin,a pre data methana return karanne array ekak widihata(mokada myData kiyana eka array ekak wenna one , ethakotane map karanna puluwn)-----ekedi api spread kara kalin thibba value, itapasse aluth value walin replace kara

//               //----------------
//               // methana image eke 2k use karala thiyenne,,mokada object eke property eka widihata image kiyala thiyenna one hebai value eka widihata imageUrl eka thiyenna one----mokada 2 value eka wenasne

//               setImageUrl((pre) => {
//                 if (pre.length > 0) {
//                   return "";
//                 } else {
//                   return pre;
//                 }
//               });

//               setName((pre) => (pre.length > 0 ? "" : pre));
//               setCity((pre) => (pre.length > 0 ? "" : pre));
//               setPosition((pre) => (pre.length > 0 ? "" : pre));
//             }}
//           >
//             Submit
//           </button>
//           {/*meke thiyana details save karaganna useState 4k one---useState wala thama me input save kara ganne*/}
//         </div>
//         <div className="main_right_1">
//           {myData?.map((el, index) => {
//             return (
//               <Unit
//                 key={index + el}
//                 image={el.image}
//                 name={el.name}
//                 city={el.city}
//                 position={el.position}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

//---------------------------------------------------------
// useEffect paractical example

// import { useEffect, useState } from "react";
// import "./App.css";
// const App = () => {
//   const [apiId, setApiId] = useState("1");
//   const [data, setData] = useState({});
//   // console.log(apiId);
//   // console.log(data);

//   useEffect(() => {
//     console.log("useEffect running..");

//     const apiCall = async () => {
//       console.log("api call running...");

//       const res = await fetch(
//         `https://jsonplaceholder.typicode.com/posts/${apiId}`
//       );
//       const data = await res.json();
//       if (data) {
//         setData(data);
//       }
//     };
//     if (apiId.length > 0 && Number(apiId) > 0 && Number(apiId) <= 100) {
//       console.log("useEffect if condition..");

//       apiCall();
//     }

//     return () => {
//       console.log("cleanup");

//       apiCall();
//     };
//   }, [apiId]);

//   return (
//     <div>
//       <input
//         type="text"
//         value={apiId}
//         onChange={(e) => {
//           setApiId(e.target.value);
//         }}
//         placeholder="enter id"
//       />

//       {data && (
//         <div>
//           <h2>{data.title}</h2>
//           <p>{data.body}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

//-----------------React Router--------------------------

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ContactDetails from "./Components/ContactDetails";
import User from "./Components/User";
import Project from "./Components/Project";
import Test from "./Components/Test";

import styled from "styled-components";

const App = () => {
  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact/details" element={<ContactDetails />} />
          <Route path="/test" element={<Test />} />
          <Route path="/contact/:id" element={<User />} />
          {/* methanadi static pages wenuwata dynamic pages use karala thiyanawa */}
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  width: 100vw;
`;
