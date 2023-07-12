import { Component } from 'react';
import UserClass from "./UserClass";
import UserProfileClass from './UserProfileClass';

class About extends Component {
    constructor(props) {
        super(props);
        // console.log("Parent Constructor Called");
    }
    componentDidMount() {
        // console.log("Parent ComponentDidMount Called");
    }
    render() {
        // console.log("Parent Render Called");
        return <div>
            <h1>This is Namaste React Web Series</h1>
            <UserProfileClass name = {"First"}/>
            <UserClass name = {"First"}/>
            {/*<UserClass name={"First"} location={"Amritsar"} />
            <UserClass name={"Second"} location={"Bangalore"} />
    <UserClass name={"Third"} location={"Gurugram"} />*/}
        </div>
    }
}
export default About;
// const About = () => {
//     return <div>
//         <h1>This is Namaste React Web Series</h1>
//         {/*<User name = {"Harshita Function"}/>*/}
//         <UserClass name={"Harshita Class"} location={"Amritsar"} />
//     </div>
// }
