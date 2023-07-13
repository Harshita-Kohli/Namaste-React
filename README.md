# Namaste-React
- In this repository, I will be maintaining the notes, resources and assignments of **Namaste React Web Series by Akshay Saini**.
- Navigate to the episode number "0x" by going to the branch "0x" of this repository.
- Eg. Episode 02 is on branch 02 of the repository.
- *Exception*: Episode 01 is on the main branch!!

# HomeWork Questions
#### 1. What is Emmet? [Read More](https://emmet.io/)
   - It is a plugin used to auto-generate boiler-plate code. For example, we can use '!' to generate HTMl boilerplate code
   - We can use abbreviations/short expressions to generate HTML and CSS.
   - It is a toolkit that makes writing HTML, CSS code really easy!
     
#### 2. Difference between Library and Framework?
   ##### Library:
   - Library is one that can be applied to any part of our existing app.
   - It does not INVERT THE CONTROL since the control is in the hands of the programmer who can use it where and when required
   - React is a library since it can be applied to any portion of our app like navbar or header etc.

   ##### Framework:
   - Framework is a whole full-fledged program that is used to build a whole app.
   - It INVERTS THE CONTROL since it provides the developer some places to plug in their code. It calls that code only as needed.
   - React is not a framework but a library.

#### 3. What is CDN and Why Do we use it?
#### 4. Why is React called React?
   - Because it is "Reacts" to any state or property changes, and works with data of any form (as deeply structured as the graph itself) so the name is fitting.
#### 5. What is the cross-origin in script tag? [Read More](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin)
   - It is an attribute that we add to the script tag to tell the browser that no credentials are needed for accessing this script. So we allow cross-origin sharing with this attribute.
   
#### 6. What is the difference between React and ReactDOM?
   - React is the library that provides the core React code. This is the fundamental code needed to run React anywhere
   - ReactDOM is that React library for performing DOM operations. It is specific to the browser. It is bridge between React and Browsers. Enables runnning React in browser.
   - We know React does not just run in Browsers, but also on Mobile, Android, etc. So we have different libraries for executing React on different platforms.
   - So we need 2 separate packages in our app.

#### 7. What is the difference between react.development.js and react.production.js files via CDN ?
   - The React library provides two versions of its JavaScript files: **react.development.js** and **react.production.js**. The react.development.js is used in development stage/environment while the other is for production environment.
   - The react.development.js file is **larger** in size compared to react.production.js.The development version contains additional code, comments, and debugging information that aids in development and troubleshooting.
   - The development version (react.development.js) provides more detailed error messages and warnings compared to the production version. So it helps in better diagnostics
   - The production version is **optimized for performance** and has undergone various optimizations, including **minification and removal of unnecessary code**, resulting in a smaller file size.

#### 8. What is the difference between async and defer attribute?[Akshay's Video](https://www.youtube.com/watch?v=IrHmpdORLu8)
   - Both are attributes given to script tags.
   - `<script src = ""/>`: Without any attribute in the script tag, the HTML parsing goes on
   - `<script async src = ""/>` : In this case, the HTML parsing goes on. When script tag is encountered, it is **fetched from the network asynchronously parallel to HTML parsing**. Then HTML parsing is paused and the script is executed. **Once the script execution is complete, then HTML parsing resumes**.
   - `<script defer src = ""/>` : In this case, **the HTML parsing goes on and the scripts are fetched in parallel**. Then once the **HTML parsing is complete, then the scripts are executed**. It does not matter when the scripts are available in the browser.
   - ![image](https://github.com/Harshita-Kohli/Namaste-React/assets/54809528/97b1f413-1134-48de-9a54-3d7cda4f6af3)

