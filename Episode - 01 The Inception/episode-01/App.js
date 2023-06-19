// const heading = React.createElement(
//     "h1", 
//     {id:"heading", xyz: "abc"},  //the 2nd argument is the attributes that we want to give to the h1 tag
//     "Hello World from React!"
//     ); //create an h1 element
// const root = ReactDOM.createRoot(document.getElementById("root"));//we have created a root for our react library
// root.render(heading);//to render our heading inside root
// console.log(heading); //this logs a React element( a JS object )

/**
 * <div id = "parent">
    * <div id = "child1">
    *   <h1>I am an h1 tag</h1>
    *   <h2>I am an h2 tag</h2>
    * </div>
    * <div id = "child2">
    *   <h1>I am an h1 tag</h1>
    *   <h2>I am an h2 tag</h2>
    * </div>
 * </div> 
 */
//The React equivalent of the above HTML is this: 
const parent = React.createElement("div", { id: "parent" }, //parent div
    [React.createElement("div", { id: "child1" }, //child 1 div having h1 and h2
        [React.createElement("h1", {}, "I am an h1 tag"), React.createElement("h2", {}, "I am an h2 tag")])
        ,
    React.createElement("div", { id: "child2" }, ///child 2 div having h1 and h2
        [React.createElement("h1", {}, "I am an h1 tag"), React.createElement("h2", {}, "I am an h2 tag")])
    ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);