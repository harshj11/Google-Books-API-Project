import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./icon.css";

const Icon = (props) => {
    return (
        <div className="icon">
            <FontAwesomeIcon icon={props.type} />
        </div>
    )
}

export default Icon;