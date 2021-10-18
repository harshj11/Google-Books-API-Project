import "./input.css";

const Input = (props) => {
    return (
        <div className="input-container">
            <input type={props.type} name="input-text" required/>
            <label for="input-text" className="input-label">
                <span className="label-name">Search a Book</span>
            </label>
        </div>
    )
}

export default Input;