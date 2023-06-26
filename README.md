# h2(Planning of our Food Ordering App)
 Low-Level Design: Components in the App
 - App
    - Header
      - Logo
      - Nav Items
   - Body
      - Search
      - Card Container
      - Restaurant Card
         - Image
         - Name of Restaurant, Cuisine, Star Rating, Delivery Time
   - Footer
      - Copyright
      - Address
      - Contact 
      - Other Links

# h2(Intro of Episode - 05)
//Two Types of Exports: 
# h3 Default Export: 
- If you want to export something by default from a file
- You can just have a **single** default export from one file
- Syntax
      `export default Component;
       import Component from "path";`

# h3 Named Export:
- If you want to **export multiple things** from one file, we use Named Exports
- Syntax:
      `export const Component;
        import {Component} from "path";`