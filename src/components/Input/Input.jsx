import { useEffect, useState } from "react";
import "./input.css";

const Input = (props) => {
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        props.handleSearchText(inputValue);
    }, [inputValue, props])

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <div className="input-container">
            <input type={props.type} name="input-text" onChange={handleChange} required/>
            <label for="input-text" className="input-label">
                <span className="label-name">Search a Book</span>
            </label>
        </div>
    )
}

export default Input;