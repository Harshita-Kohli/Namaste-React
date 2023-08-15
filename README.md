## HomeWork Questions:

#### 1. Explore all the ways of writing CSS
  1. Vanilla CSS:
     - We can use plain CSS to give styles to our app.
     - We create an index.css file and add all the CSS rules there.
  2. SASS / SCSS :
     - SASS stands for Syntactically Awesome StyleSheets.
     - It is a stylesheet language that is **complied to CSS**.
     - Allows us to make use of **Nested rules, variables, functions**
     - SASS supports 2 syntaxes : SASS and SCSS
     - **SCSS: The SCSS syntax uses the file extension .scss.** It is a superset of CSS. It uses curly braces and semi colon syntax.
     - **SASS(The Indented Syntax): Uses file extension .sass.** It uses indentation instead of curly braces, and line-end instead of semicolon.
       
    | SCSS                        | SASS                      	|
    |----------------------------	|---------------------------	|
    | .button {                  	|                           	|
    | padding: 3px 10px;         	| .button                   	|
    | font-size: 12px;           	| padding: 3px 10px         	|
    | border-radius: 3px;        	| font-size: 12px           	|
    | border: 1px solid #e1e4e8; 	| border-radius: 3px        	|
    | }                          	| border: 1px solid #e1e4e8 	|

  3. Styled Components:
    - It allows us to write styles just as we write React components.
    - It removes the mapping between components and styles.
    - This means that when you're defining your styles, you're actually creating a normal React component, that has your styles attached to it.
    - Utilises tagged template literals to style your components.
     
  5. Using External CSS Libraries like Material UI, Tailwind CSS, BootStrap, Ant Design, Chakra UI etc. Such libraries give pre-styled components.
     - They export such components that are already beautiful. We can simply import and use them.
     - Tailwind CSS is the most modern method being used extensively in the industry to style web apps. 

#### 2. How do you configure tailwind?
  - **Step1:** Create the project
  - **Step2: Install tailwind css via npm** an initialise it to generate teh tailwind.config.js file
      ```
           > npm install -D tailwindcss postcss
           > npx tailwindcss init
      ```
  - **Step3: Create a .postcssrc file** at the root level of our app. This creates the config file for postcss. This **tells parcel to use postcss to read and understand tailwindcss.**
  - **Step4: Give the configuration in postcssrc file.**
      #### .postcssrc:
      ```
      {
      "plugins": {
        "tailwindcss":{}
        }
      }
      ```
  - **Step5: Give configuration for tailind css**. So need **to fill the content attribute in tailwind.config.js**
      ```
      module.exports = {
        content: ["./src/**/*.{html,js}",]
        theme: {
                extend:{},
               },
        plugins: [],
      }
      ```
  - **Step6: Add Tailwind directives in index.css file:**
      ```
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
      ```
#### 3. In tailwind.config.js, what do all the keys "content","theme","extend,"plugins" mean?
  - **"content"**: It is the section of the config file where **we configure the paths to HTML, JS components and any other source files that contain tailwind classnames.** We specify the regex that tells where all tailwind can be used in our project.
  - **"theme"**: It is the section where you define your **project’s color palette, type scale, fonts, breakpoints, border radius values, and more.**
  - **"extend"**: It allows to extend the default spacing scale. If you’d like to preserve the default values for a theme option but also add new values, add your **extensions under the extend key in the theme section of your configuration file.**
  - **"plugins"**: Plugins let you register new styles by injecting them into the user’s stylesheet using JavaScript instead of CSS.

#### 4. Why do we have a .postcssrc file?
  - .postcssrc file is a configuration file for postcss.
  - This we need to create at the root level of our project.
  - It tells parcel that it should make use of postcss to read and understand tailwind css.

#### 5. What are the pros and cons of using tailwind css?

**PROS:**
  
  1. We have all our styles in the js files itself. No need to move to and fro between js and css files again and again. So the development becomes quite quick.
  2. It is very **lightweight**. Only the classes that we use are included in the bundle of css. **Minimum CSS is loaded. Unused CSS is never shipped.**
  3. We can **build any complex UI** with Tailwind.
  4. We can build **absolutely responsive UIs** without writing media queries.
  5. Easily apply **hover and focus** states by using `hover:` at the beginning of the classname.
  6. **Preventing Redundancy**: When using Tailwind CSS, if we have two exact same green buttons, we can use the same classes for both of them. Behind the scenes, the CSS code for that class will be imported just once by Tailwind. **So our code will have just one such class not different redundant classes as in Vanilla CSS.**
    
 **CONS:**
 
  1. When we add a lot of CSS classes to our html/js code, the code becomes less-readable,lengthy and clumsy.
  2. Tailwind comes with a lot of **initial learning curve**.
