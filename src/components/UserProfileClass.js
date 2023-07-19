import React from "react";
class UserProfileClass extends React.Component {
    constructor(props) { //when a new instance of class is created, the constructor is called
        super(props);
        // console.log(this.props.name + "Child Constructor Called");
        this.state = {
            userInfo: { //this is the default state variable of the user
                name: "Dummy",
                location: "Dummy",
            }
        }
    }
    //called after the component is completely rendered on the DOM
    async componentDidMount() {
        //WE MAKE API CALL HERE
        // console.log(this.props.name + "Child ComponentDidMount Called!!")
        const data = await fetch("https://api.github.com/users/" + this.props.name);
        const json = await data.json();
        // console.log(json);
        this.setState({ //we pass in this object to the setState() to update  
            userInfo: json,
        });
    }
    //called after the constructor()
    render() {
        // console.log(this.props.name + "Child Render Called");
        const { name, location, twitter_username, avatar_url } = this.state.userInfo;

        return <div className="user-card m-2 p-2 rounded-md border hover:shadow-lg">
            <img src={avatar_url} alt="avatar_img" width="200px" />
            <h1 className="font-bold">Name: {name}</h1>
            <h2>Location: {location}</h2>
            <h3>Contact: @{twitter_username} </h3>
        </div>
    }
    componentDidUpdate() {
        // console.log(this.props.name+ " Child ComponentDidUpdate Called");
    }
    componentWillUnmount() {
        // console.log(this.props.name+" Child ComponentWillUnmount Called");
    }
}
export default UserProfileClass;