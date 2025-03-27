import "./App.css";
import Main from "./Components/Main";

function App() {
  return (
    <>
      <div>
        <h1>Hello React</h1>
      </div>
      <p>Shehan Nadeesha</p>
      <Main>
        <h5>This is inside the component</h5>
        <h4>I am children</h4>
      </Main>
      <Main>
        <h2>I am children 2</h2>
      </Main>
    </>
  );
}

export default App;
