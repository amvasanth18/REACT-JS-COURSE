const parent = React.createElement("div",{ id: "parent" },[
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h1", {}, "I am an h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h1", {}, "I am an h2 tag"),
    ]),
]);
console.log(parent);
// ReactElement(object)=> HTML(Browser understands)

// const heading= React.createElement(
//     "h1",
//     { id: "heading"},
//     "Hello world from react!"
// )
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
