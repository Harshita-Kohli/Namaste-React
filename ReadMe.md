# Homework Questions
#### 1. What is npm?
  - npm is a package manager that manages all the packages. It can be thought of as a **huge registry or repository of packages.**
  - It **does NOT stand** for Node Package Manager.

#### 2. What is Parcel/Webpack? Why do we need it?
  - Parcel, Webpack, Vite are some of the Bundlers used to bundle the code before building dev and prod build.
  - A bundler minifies, compresses, bundles up the code before shipping the code to production.
  - Parcel is a Beast that has many more superpowers as well!! It is really easy-to-configure.
  - We need a bundler because if we send the entire code as it is, in the form of those multiple js, html, css files, this is really not optimum coz the browser needs to make lots of network calls to fetch all these numberous files. So instead, bundling up the code generates a limited no. of files to be fetched. This makes our app faster and more lightweight.

#### 3. What is '.parcel-cache'?
  - One of the superpowers of Parcel is to do caching. So it Caches the code and places it in the '.parcel-cache' folder.
  - This provides faster builds to us. Everytime we re-build the app, it takes lesser time than previous build since the code is already cached and only the changes need to be reflected in that code. There is no need to re-build the entire app from scratch

#### 4. What is 'npx'?
  - npx is a package executer. It is used to execute packages. If the package is not present locally, then it installs prior to the execution.

#### 5. Difference between dependencies and devDependencies?
  - There are 2 types of dependencies: normal dependencies and dev dependencies
  - Normal Dependencies : The ones which our project require in all the phases of the project ie. (used in development and production also). Such dependencies are put into the "dependencies" key of the package.json.
  - Dev Dependencies: They are the ones which our project requires just in the development phase. Such dependencies are put into the "devDependencies" key of the package.json.
  - In our React project, we install parcel as a devDependency since npm knows parcel is required at development phase to bundle the code, not at production, because bundling should be done before production.

#### 6. What is Tree Shaking?
  - In production builds, Parcel tries to analyze all the imports and exports of each module. It sees which module is not reachable and no more required. Then it removes everything that is unused. This is Tree Shaking or Dead-code Elimination.
  - Tree Shaking is done for both static imports(ie. import <module> from "path") and dynamic imports(ie. import()).

#### 7. Hot Module Replacement(HMR)
  - **Parcel performs HMR**. It **automatically reloads/refreshes the webpage** whenever we make any changes to our code.
  - It **rebuilds the app** whenever we make any changes in any file.
  - It **automatically updates the modules** in the browser at runtime without needing a whole page refresh.

#### 8. Five Superpowers of Parcel: 
  - Hot Module Replacement
  - Creating the local server to host the app
  - Caching the App code
  - Tree Shaking
  - Minification: **Reducing the file size by removal of extra whitespaces in the code, renaming variables to shorter variable names**.  
  - Compression: **Applying Compression algorithms like Gzip or Brotli on the minified code**
  - Differential Bundling: Provides support for older browsers
  - Better Diagnostics: Provides a **better presentation of errors and warnings in the dev environment** leading to easy diagnostics.
