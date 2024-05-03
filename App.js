import React from "react";
import ReactDOM from "react-dom/client";

//  JSX (Transpiled before it reaches the JS) - Parcel - Babel

//  JSX => Babel transpiled it to React.createElement => ReactElement-JS Object => HTMLElement(render)

// React Element 
const Title = () => (
<h1 className="head">
Namaste React using JSX 🚀
</h1>
);

const HeadingComponent = () => (
  <div id="container">
    <Title/>
    <h1>Namaste React Functional Component</h1>
  </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
