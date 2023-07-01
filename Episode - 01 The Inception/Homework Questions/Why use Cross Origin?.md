# Q2 Why CORS?
Cross-Origin Resource Sharing (CORS). 

[YT Akshay Saini CORS](https://www.youtube.com/watch?v=tcLW5d0KAYE)

[Very Good Resource on CORS](https://simplelocalize.io/blog/posts/what-is-cors/)

- **A cross-origin request is a request for website resources external to the origin. For example, a.example.com attempts to serve resources from b.secondexample.com.**
- CORS instructs the browser to determine if a cross-origin request, such as an image or JavaScript from b.secondexample.com, is allowed by a.example.com. The browser does not load resources that are disallowed by CORS.
- Since we want to load the React code from an external resource other than origin, we need to enable CORS when using CDN.
- In case of Importing React using CDN, do include the cross-origin attribute.
- ![image](https://github.com/Harshita-Kohli/Namaste-React/assets/54809528/ed842004-a781-4c7a-a129-36818ababef2)
- You can tweak the HTTP header on your origin server. All it takes is an additional HTTP header called Access-Control-Allow-Origin.
