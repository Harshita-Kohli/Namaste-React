import { useState } from "react";

const User = (props) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(2);
    const { name } = props;
    return <div className="user-card">
    <h1>Count:{count}</h1>
    <h1>Count2: {count2}</h1>
        <h1>Name: {name}</h1>
        <h2>Location: Amritsar</h2>
        <h3>Contact: hkoh </h3>
    </div>
}
export default User;