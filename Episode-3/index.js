import React from "react";
import ReactDOM from "react-dom/client";
// React.createElement => object => HTMLElement(render)

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namastae React"
// );
// console.log(heading)
//jSX - is not HTML in JS
//JSX -HTML Like syntax or XML like syntax
//JSX (Transpiled before it reaches the js engine)-PARCEL-Babel
//JSX => React.createElement => ReactElement-js object =>HTMLElement(render)
//const jsxHeading = <h1 id="heading">Namastae React using JSX</h1>;
const heading = (
  <h1 className="head" tabIndex="5">
    Namastae React using JSX
  </h1>
);
console.log(heading);
// React component
// class based component-old
//functional component-new

// root.render(heading);
// let name = 'vasnath';
// name = 25;

// let name: string = 'vasnath';
// name = 68;
const elem = <span>React Element</span>;

// component composition
const data = 1000;

const Title = (
  <h1 className="head" tabIndex="5">
    {elem}
    Namastae React using JSX
  </h1>
);
const HeadingComponent = () => (
  <div id="container">
    {data}
    {Title()}
    <Title />
    <Title></Title>
    <h2>{console.log("vhvhgvhgv")}</h2>
    {/* <Title/> */}
    {title}
    <h1 className="heading">Namastae React Functional Component</h1>
  </div>
);
console.log(Title);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
