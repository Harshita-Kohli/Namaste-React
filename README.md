## Important Resources:
- [Monolith vs Microservices]https://www.atlassian.com/microservices/microservices-architecture/microservices-vs-monolith
- [Optional Chaining in JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Why to use await for response.json()?](https://developer.mozilla.org/en-US/docs/Web/API/Response/json)
    - The json() takes a response stream and reads it to completion. Then it returns a promise which resolves to a JS Object.
    - **Note that despite the method being named json(), the result is not JSON** but is instead the result of **taking JSON as input and parsing it to produce a JavaScript object**.

# Homework Questions
#### 1. What is a Microservice?
- A Microservice is an **independently existing service in Microservice architecture.**
- Each microservice is **independently deployable. and has its own business logic.**
- Each microservice has its **own single responsibility** and **exists independently** in Microservice Architecture.
- Updating, testing, deploying everything occurs within each microservice.

#### 2. What is Monolithic Architecture?
- It is the traditional architecture where all the **various functionality like UI, Backend, DB, APIs, SMS, Email Notifications is written in the same single big project.**
- To make a single small change in the app (eg: changing the color of a button in the UI), the **entire project needs to be built and compiled again**.
- All the code of various services is in the same single project and we need to be **deploy the whole BULKY project.**
- It can be thought of as a **unified large glacial unit with just one code base**.
- All the **business logics are coupled together in the same project.**

#### 3. Monolith vs Microservice?
1.     [Single Responsibility]
       Monolith: there is one large code base where all the services are coupled together, so no SRP concept.
       Microservice architecture: the code base is split among multiple services, each service having its own single responsibility
2.     [DEPLOYEMENT]
       Monolith: Need to re-Deploy the entire bulky code even on small change in the app. 
       Microservice: Each small microservice is independently deployable, so faster and more frequent release cycles.
4.     [Difficulty in Changing]
       Monolith: A single small change in the app requires the entire big project to be built and compiled again.
       Microservice: Since each microservice is independent, we need not not rebuild the entire project.
6.     [Flexibility]
       Monolith: The technology/tech stack has to be same throughout the whole project. Also use the same tech as used already in monolith
       Microservice: Each team can choose the techstack for each micorservice, so no restrictions.
7.     [Development speed]
       Monolith: A large monolithic app makes development more complex and slow.
       Microservice: Each service is independently developed, so easy and quick development.

#### 4. Why do we need a useEffect Hook?
- useEffect() hook is another **utility function provided by React out-of-the-box**.
- It takes 2 parameters: **callback function and dependency array(this is optional parameter)**.
- It is used when **we need to do something after the component has been rendered**. We put that code inside useEffect's callback function.
- Mostly, we make some **API call in it because that is a side-effect**. The API call can affect the UI of our app, so we don't want it to interfere with the rendering of the UI. 
- So,it is useful for **rendering the data on the web page in the case when we want the Skeleton Component to be rendered first quickly, then make API call and then re-render the component with the actual data**.

#### 5. What is Optional Chaining?
- It is a JS concept wherein we use the '?.' operator while reading some property from an object or calling a function.
- It is helpful when there is a possibility that a reference might be missing.
- If the object accessed/ function called evaluates to null/undefined, the expression shortcircuits and evaluates to undefined rather than throwing an error.
- Eg: `const a = obj.first?.second;`
  
  Here JS implicitly checks that `obj.first` is not null or undefined before attempting to access obj.first.second.
  If `obj.first` is null or undefined, then the entire expression is short-circuited and evaluated to undefined, thus `a = undefined`

#### 6. What is Shimmer UI? [Read More](https://medium.com/lattice-what-is/shimmer-ui-a-better-way-to-show-loading-states-aa1f4e563d17)
- Shimmer UI is a concept where we show **Dummy shimmery UI while loading the app**.
- This is not the actual UI but a **dummy UI having Cards and other elements as placeholders untill the actual UI loads**.
- This gives a better UX since it is like providing **some cues to the user as to what is going to load on the screen**.
- It is makes our **app-loading state visually good** since we don't shock the user suddenly with all the UI, rather we prepare them for what layout is coming on the screen.

#### 7. What is the difference between JS Expression and JS Statement?
- JS Expression is any **JS code that produces a value**. It **can't exist individually and is a part of a JS statement**.
- **An expression itself can have expressions in it**.
- Eg: The following are JS Expressions since they evaluate to some value
    - `1` → produces 1
    - `"hello"` → produces "hello"
    - `5 * 10` → produces 50
    - `( 5 + 1 ) * 2` → produces 12. This has a total of 5 expressions in it. [Read More](https://www.joshwcomeau.com/javascript/statements-vs-expressions/#expressions-1)
      
- **JS statements**, on the other hand, **are instructions for the computer**. **A JS program is a sequence of statements**.
- **_Statements provide slots to be filled with JS expressions_.**
- Eg:
    - `let a = 5 * b;`
    - `const hi = "hello";` //notice that the right side is the JS expression, the whole thing is JS statement
    - `console.log("Hi there" + name);` //notice the thing inside () is expression since it evaluates to a value, but the whole thing is a statement instructing to log the value.
- **Tip to remember easily: Statements are the rigid structure that holds our program together, while Expressions fill in the details in the structure.**

#### 8. What is the Conditional Rendering? Explain with a code example.
- Conditional Rendering is a technique in which we can render different Ui based on some condition.
- JSX allows us to perform conditional rendering by using JS expressions in {} within the JSX.
- In these JS expressions we can evaluate some condition and based on its value we can return different JSX from a component.
- Suppose we want to render Shimmer UI when data is null/undefined and when the data is loaded, we want to render the actual data with the JSX.
- Code Example:
- ```
  const Body = () => {
      const listOfRestaurants = useRestaurantInfo();
      return listOfRestaurants === null ? (<Shimmer/> //using ternary operator to do the conditional rendering
      ) : (
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.data.id}
              key={restaurant.data.id}
              className="link"><RestaurantCard
              resData={restaurant} />
          </Link>
        ))}
      </div> 
  }
  ```
#### 9. What is the CORS? [Akshay's Video](https://www.youtube.com/watch?v=tcLW5d0KAYE)
  - It stands for Cross-Origin Resource Sharing.
  - Browsers do not allow us to call an API present on ohter origin from our origin. This is a web standard that makes resource sharing safe.
  - So, when we attempt to access a resource present on another origin from our origin, the browser imposes a **CORS policy** and blocks us from doing so.
  - Another origin means: another Domain/Port/Protocol.
  - The origin A(browser) sends a pre-flight request to the origin B(server) before actually making the API call for fetching the resource.
  - So the server then sends back additional HTTP Headers to the browser using which browser knows whther or not resource sharing is safe.
  - After this verification, the actual API call is made from the browser.
  - Additional HTTP headers are: Access-Control-Allow-Origin, Accept-Control-Allow-Methods etc.

#### 10. What is async and await? [Read More](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
  - It is an alternative way to perform some asynchronous task. 
  - It is just some syntactical sugar that makes the asynchronous task look like synchronous.
  - async used in functiona declaration makes a function asynchronous. This function will now return a Promise.
  - Inside the async function we can have 0 or more await expressions.
  - Await expressions make the async functions behave as though they're synchronous. They suspend the execution until the returned promise is fulfilled or rejected.
  - The resolved value of the promise is treated like the return value of the await expression.

#### 11. What is the use of `const json = await data.json();` ? 
- This statement actually **converts the response Stream of data fetched from the API into a JS object.**
- The json() function returns a **promise which eventually resolves to a JS object.**
- **Note that despite the method being named json(), the result is not JSON** but is instead the result of **taking JSON as input and parsing it to produce a JavaScript object**.
- We use it to get a JS object of restaurants which can be used to set the state variable resInfo.
