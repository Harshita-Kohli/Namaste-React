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
   - SUPERPOWER: If the state gets changed/updated, it triggers the Reconciliation and leads to the re-render of the entire component
