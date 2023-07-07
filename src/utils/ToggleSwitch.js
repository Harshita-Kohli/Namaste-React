import { useState } from "react";

const ToggleSwitch = (props) => {
    return (<div className="switch-container">
        <h2>Veg Only</h2>
        <label className="switch">
            <input type="checkbox" className="checked" onChange = {props.onChange}/>
            <span className="slider round"></span>
        </label>
    </div>
    )
}
export default ToggleSwitch;