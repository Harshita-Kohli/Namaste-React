import { useState } from "react";

const ToggleSwitch = (props) => {
    return (
        <div className = "m-4 p-2 flex items-center">
        <h2 className="text-xl text-left">Veg Only</h2>
        <label className="switch px-2 mx-2 ">
            <input type="checkbox" onChange = {props.onChange}/>
            <span className="slider round"></span>
        </label>
    </div>
    )
}
export default ToggleSwitch;