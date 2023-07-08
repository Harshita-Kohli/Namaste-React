# HomeWork Questions
## Q1: What is JSX?
  - Is a Syntax Extension to JS.
  - Stands for JavaScript Syntax Extension( not JavaScript XML!!).
  - React developers came up with this syntax as the React.createElement() was very complicated in case of generating nested DOM structure.
  - It is just an HTML-like/ XML-like syntax but not the same as them.
  - It exists independent of React, but can be used in React to write readable and managable code.
  - It is eventually converted to React.createElement() syntax by Babel, a package that comes as a dependency of Parcel.
  - JSX is not HTML written in JS!!

## Q2: Super Powers of JSX?
  - Enables us to write easy, readable and manageable code
  - Behind the scenes, it gets TRANSPILED into React.createElement() by Babel and then it generates React Element
    - Thus JSX is actually another way of creating React elements rather than using the core React way to create elements. 
  - We can write any JS expression/logic in the JSX by using {}. So simply wrap the JS code in {} to execute it and render it dynamically.
  - JSX protects against **DOM XSS(Cross-Site Scripting)** attacks by doing AUTO-ESCAPING and sanitizing the data coming in {}.
  - [More about XSS] - https://owasp.org/www-community/attacks/xss/
 
## Q3: Role of 'type' attribute in <script> tags? What options can I use there?
  - It is used to tell the browser what type of script is it. 
  - Types of scripts are: 
    - Normal/ Classic script
    - Module Script
  - We can assign 3 values to 'type' attribute:
    - `type = ""` ie empty string / don't set the attribute only : In case of normal classic JS script
    - `type = "module" ` : In case of Module Script, This value causes the code to be treated as a JavaScript module.
  
## Q4: {TitleComponent()} vs `<TitleComponent/>` vs `<TitleComponent></TitleComponent>`?
  
  All three are methods to render the TitleComponent functional component in some other component or React element.
  - `{TitleComponent()}` : call the TitleComponent function since Fucntional components are at the end of the day JS functions
  - `<TitleComponent/>` : Using self-closing tags
  - `<TitleComponent></TitleComponent>` : Using opening and closing tags
    
## Q5: Can we have multiple root elements in React using multiple createRoot()?
  - Yes we can have. [Read More](https://react.dev/reference/react-dom/client/createRoot#usage)
  - In case our app is fully built using React, simply have a single root for the entire app.
  - But in case our app/page is justy partially built with React, then we can have multiple createRoot(), and then use multiple root.render() methods to display different content in each root

## Q6: Can we have nested fragments in React?
  - Yes we can have nested fragments

## Q7: What makes our web app code so readable in case of React? Is it just React itself?
  - It is not just React, it is because of JSX that our code becomes much more readable! Otherwise, the conventional way of createReactElement() was very cumbersome!

### Important Resources: 
  - [Read about XSS](https://www.stackhawk.com/blog/react-xss-guide-examples-and-prevention/)
  - [OWASP Article on XSS](https://owasp.org/www-community/attacks/xss/)
  - [Read about React Fragments](https://legacy.reactjs.org/docs/fragments.html)
  - [How JSX prevents injection attacks](https://legacy.reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks)

  
