import React from "react";
import ReactDOM from "react-dom";
import SnsItems from "./component/SnsItems";

function App() {
  return (
    <>
      <h1>Hello World~</h1>
      <section>
        <div className="wrapper">
          <SnsItems />
        </div>
      </section>
    </>
  );
}

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);

// class App extends React.Component {
//     render(){
//         return(
//             <h1>Hello World~</h1>
//         )
//     }
// }

// const rootNode = document.getElementById('root')
// ReactDOM.render(<App />, rootNode)
