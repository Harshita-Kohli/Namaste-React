## Important Resources:
- [Why to write super(props)?](https://overreacted.io/why-do-we-write-super-props/)
- [React Lifecycle Method Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- [About Class Components](https://legacy.reactjs.org/docs/react-component.html)
- [The GitHub API that we used for UserProfile](https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user)
- [Medium Article on React Component Lifecycle](https://www.freecodecamp.org/news/react-component-lifecycle-methods/#:~:text=The%20render()%20lifecycle%20method&text=It%20is%20called%20every%20time,component%20has%20been%20re%2Drendered.&text=The%20render%20method%20displays%20the%20current%20count%20value%20and%20a%20button.)
## Notes: 
- Class Component is nothing but normal JS class that has render() function which returns some piece of JSX

## Homework Questions:
#### 1. Why can't we have  async callback function in useEffect()? 
  - [Read More on Medium](https://medium.com/@achieversittraininga/using-async-await-inside-reacts-useeffect-hook-bedc401be860#:~:text=Because%20the%20useEffect%20hook%20in,invoked%2C%20resulting%20in%20a%20problem.)

  - [Read More on HashNode](https://shubhambhoj.hashnode.dev/useeffect-async)
  - Because an async function implicitly returns a promise. But the useEffect() hook expects its callback function to either return nothing or return a cleanup function.
  - So React's useEffect hook expects its callback function to return a cleanup function which gets executed just before the component unmounts. So if we make tha callback function as async, it causes a bug as cleanup function will never be called.
  - useEffect must not return anything besides a function, which is used for clean-up.
  - It looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

```
useEffect(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]);  // Or [] if effect doesn't need props or state
```
#### 2. Why can we use async with componentDidMount?  [Read More](https://www.valentinog.com/blog/await-react/)
  - Since componentDidMount() is the best place to make fetch calls, we can make it async.
