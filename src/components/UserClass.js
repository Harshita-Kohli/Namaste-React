import React from "react";
class UserClass extends React.Component {
    constructor(props) { //when a new instance of class is created, the constructor is called
        super(props);
        // console.log(this.props.name + "Child Constructor Called");

        this.state = {
            count: 0,
            count2: 2,
            count3: 3
        }
    }
    //called after the component is completely rendered on the DOM
    async componentDidMount(){
        //We make an API call here
        //Suppose we set some interval here after every second, we want to print Namaste React OP:
        this.interval = setInterval(() => {
            console.log("Namaste React OP")
        }, 1000);

        // console.log(this.props.name + "Child ComponentDidMount Called!!")
    }
    componentDidUpdate(prevProps, prevState){
        //we check if 'count' changed, then do something 
        if(this.state.count !== prevState.count){
            //do something if 'count' changes
        }
        if(this.state.count2 !== prevState.count2){
            //do something else if 'count2' changes 
        }
        if(this.state.count3 !== prevState.count3){
            //do something else if 'count3' changes 
        }
    }
    componentWillUnmount(){
        //we need to do the clean-up here:
        clearInterval(this.interval);
    }
    //called after the constructor()
    render() {
        // console.log(this.props.name + "Child Render Called");
        const { name, location } = this.props;
        const { count, count2, count3 } = this.state;
        return <div className="user-card">
            <h1>Count: {count}</h1>
            <h1>Count2: {count2}</h1>
            <h1>Count3: {count3}</h1>
            <button onClick={() => { //onClick takes a callback function
                //NEVER MODIFY THE STATE DIRECTLY!!
                this.setState({
                    count: this.state.count + 1, //it will only update count, will not touch count2 and count3
                })
            }}
            >Increase Count</button>
            <h1>Name: {name}</h1>
            <h2>Location: {location}</h2>
            <h3>Contact: hkoh </h3>
        </div>
    }
}
export default UserClass;