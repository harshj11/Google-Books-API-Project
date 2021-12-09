import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./about.css";

const About = () => {
    
    return (
        <div className="about">
            <div className="book-icon">
                <FontAwesomeIcon icon={faBook} className="fa-icon"/>
            </div>
            <div className="box about-project">
                <span>
                    The Search a Book project uses the <strong><a href="https://developers.google.com/books/docs/v1/using" className="repo-link" target="_blank" rel="noreferrer">Google Books API</a></strong> to search and display the books based on the 
                    text entered by the user.
                </span>
            </div>
            <div className="box check-code">
                <span>Want to check out the code ? <a href="https://github.com/harshj11/Google-Books-API-Project" className="repo-link" target="_blank" rel="noreferrer"><strong>Click here</strong></a></span>
            </div>
            <div className="suggestion">
                <span>Any suggestions? Would love to hear😊</span>
            </div>
        </div>
    )
}

export default About;