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
- Each microservice has its **own single responsibitlity** and **exists independently** in Microservice Architecture.
- Updating, testing, deploying everything occcurs within each microservice.

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

#### 6. What is Shimmer UI?
- Shimmer UI is a concept where we show dummy shimmery UI before 
