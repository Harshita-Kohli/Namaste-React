import { Component } from 'react';
// import UserClass from "./UserClass";
import UserProfileClass from './UserProfileClass';
import UserContext from '../utils/UserContext';

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
        return <div className='p-4 m-4'>
            <h1>Meet our Namaste React Team</h1>
            <div className='p-2 flex flex-wrap items-center justify-center'>
                <UserProfileClass name={"Harshita-Kohli"} />
                <UserProfileClass name={"Surbhi-Kohli"} />
                <UserProfileClass name={"akshaymarch7"} />
                <div>
                    <UserContext.Consumer>
                        {(loggedInUser) => (
                            <UserProfileClass name={loggedInUser} />
                        )}
                    </UserContext.Consumer>
                    <UserContext.Consumer>
                        {(loggedInUser) => (
                            <UserProfileClass name={loggedInUser} />
                        )}
                    </UserContext.Consumer>
                </div>
            </div>
            {/*<UserClass name={"First"} location={"Amritsar"} />
            <UserClass name={"Second"} location={"Bangalore"} />
    <UserClass name={"Third"} location={"Gurugram"} />*/}
        </div>
    }
}
export default About;

//----------------------------
// const About = () => {
//     return <div>
//         <h1>This is Namaste React Web Series</h1>
//         {/*<User name = {"Harshita Function"}/>*/}
//         <UserClass name={"Harshita Class"} location={"Amritsar"} />
//     </div>
// }
