import React from "react";
import ReactDOM from "react-dom/client";

//React Element
// const heading = React.createElement("h1", {}, "Namaste React!"); //a React element created using core react

const jsxHeading = <h1 className="heading">Namaste React</h1>;// react element created using JSx syntax

//----------------------------------------------
//React Functional Component: a JS function returning some piece of JSX
//Using Normal Arrow function syntax:
const TitleComponent = () =>{
    return <h1 className="heading">Namaste React Title!</h1>;
}
//We are doing Component Composition when we are using a component inside another component
//Using Shorthand Arrow function notation:
const HeadingComponent = () => ( 
        <div>
            <TitleComponent/>
            <h1 className="heading2">Namaste React from Heading Component!</h1>
        </div>
    )
//--------------------------------------------    
//Trying to inject a malicious script in the JSX
const title = `console.log("Danger!!")<script></script>`;

const HeadingComponent2 = () => {
    return <div>
                {title} 
                {/**All the following three are the ways to use a component inside another component*/}
                {TitleComponent()}
                <TitleComponent/>
                <TitleComponent></TitleComponent>
                
                <h1 className="heading2">Namaste React from Heading Component!</h1>
            </div>
} 
    
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2/>);
//there will be no difference between these 2 headings since both at the end 
//of day are React elements:
// console.log(heading);
// console.log(jsxHeading);




