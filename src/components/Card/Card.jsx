import { faBook, faPenNib } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Icon from "../Icon/Icon";
import "./card.css";

const Card = (props) => {

    const [isMousedOver, setIsMousedOver] = useState(false);

    const {details} = props;

    const handleMouseOver = () => {
        setIsMousedOver(prevValue => !prevValue)
    }

    //i is a variable to ensure unique key property for rendering authors name
    let i = 0;

    return (
        <div className="card" onMouseOver={handleMouseOver} onMouseOut={handleMouseOver}>
            <div className={isMousedOver ? "card-curtain inactive" : "card-curtain"}>
                <div>
                    <Icon type={faBook} />
                    <h2>{details.title}</h2>
                </div>
                <div>
                    <Icon type={faPenNib} />
                    <h2>By</h2>
                    {   
                        details.authors && details.authors.map(author => {
                            i++;
                            return <span key={"A" + i}>{author}</span>
                        })
                    }
                </div>
            </div>
            <div className="card-header">
                <img src={details.imageLinks ? details.imageLinks.thumbnail : ""} alt="No Preview Available" />
                <div className="card-header-info">
                    <h2>{details.title}</h2>
                    <a href={details.infoLink} target="_blank" rel="noreferrer">Know More</a>
                </div>
            </div>
            <div className="card-footer">
                <p>{details.subtitle}</p>
            </div>
        </div>
    )
}

export default Card;