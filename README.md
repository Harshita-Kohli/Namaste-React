## React Hooks

## Notes:
- **Simple Normal JS Functions given as utility functions to us by React**
- Written by Facebook Developers inside the **'react' we imported from npm**
- Have some logic in them that brings **superpowers** in our app
- Mostly used hooks are: 
   - **useState()** - used 80% of the times
   - **useEffect()** - used 20% of the times
- Other hooks are also used but have a little less usage as compared to the above 2
-----------------------------------------------------------------------------------
## HomeWork Questions

### Q1. Difference between Named Export , Default Export, * as Export? [Read More](https://react.dev/learn/importing-and-exporting-components)
   - Named Export means we need to import the thing with the same name as it has in the exporting file.
   - Syntax: 
       ```
        export const LOGO_URL = "https://...........";
        import {LOGO_URL} from "path";
       ```
   - Default export means the thing that is getting exported by-default from the file. No need to use the same name in the importing file.
   - Syntax: 
       ```
        export default LOGO_URL = "https://...........";
        import LOGO_URL from "path";
       ```
   - **A file can have no more than one default export, but it can have as many named exports as you like.**
   - `import * from "path"` means we want to import everything that is being exported from the exporting file!
     
### Q2. Significance of config.js file?
   - 
### Q3. What are React Hooks? [Read More](https://legacy.reactjs.org/docs/hooks-overview.html)
   - React Hooks are nothing but JS functions that are utility functions given by React developers.
   - They give use some superpowers in our functional components.
   - They are written in react that we import from npm
   - Without them, we would have to write long JS code to achieve those superpowers
   - Most used Hooks: useState(), useEffect()
     
### Q4. Why do we need a useState() hook? 
   - useState() hook gives us a powerful state variable
   - State variable means a variable which maintains the state of the component
   - SUPERPOWER: If the state gets changed/updated, it triggers the Reconciliation and leads to the re-render of the entire component.

#### Q5. Why can't I directly mutate the data imported in my js file from another js file? [Read More](https://stackoverflow.com/questions/65845168/mutating-an-array-present-in-one-js-file-from-another-js-file-in-react-native)
   - This is because the imported data is immutable. It is read-only! So we can read it, but can't mutate it.
   - If we want to perform some mutation on it in our js file, we must create a local variable and assign that imported data to this variable.
   - Now we can perform any mutation on that variable's data (provided it is 'let' and not 'const').
   - The best way, however will be to create State variable and then update it with the imported data.

     eg:
   - When we import something into our file, it is immutable. We can't directly mutate the original resList data from the Body.js component. 
   - To do the filtering, we need to make a local variable eg: 'list' and assign it the resList data.
   - Now we can run filter on the resList array of objects and store the filtered data into the 'list' array. Console.log(list) to see the filtered array.
   - So to conclude, imported data is immutable. We need to declare a local variable that uses that data. Now that local variable is mutable.
      - ![image](https://github.com/Harshita-Kohli/Namaste-React/assets/54809528/b10cc2a6-94f4-455e-b2c1-4793123c6467)
      - ![image](https://github.com/Harshita-Kohli/Namaste-React/assets/54809528/5685073b-dc09-4a90-ae97-b62ff1d98cb6)
   - Directly Mutating:
      - ![image](https://github.com/Harshita-Kohli/Namaste-React/assets/54809528/9f6dd4ff-bed9-44ac-9585-280e6c7be8bb)
      - ![image](https://github.com/Harshita-Kohli/Namaste-React/assets/54809528/956794e9-08a9-4da1-8cca-1e1187b71e15)

