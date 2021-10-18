import { faSearch } from "@fortawesome/free-solid-svg-icons"
import './search.css'
import Input from "../Input/Input";
import Icon from "../Icon/Icon";

const Search = () => {
    return (
        <div className="search-box">
            <Input type="text" />
            <Icon type={faSearch} />
        </div>
    );
}

export default Search;