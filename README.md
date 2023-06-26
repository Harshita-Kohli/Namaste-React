## (Planning of our Food Ordering App)
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

## (Intro of Episode - 05)
### Two Types of Exports: 
### Default Export: 
- If you want to export something by default from a file
- You can just have a **single** default export from one file
- Syntax
      `export default Component;
       import Component from "path";`

### Named Export:
- If you want to **export multiple things** from one file, we use Named Exports
- Syntax:
      `export const Component;
        import {Component} from "path";`
