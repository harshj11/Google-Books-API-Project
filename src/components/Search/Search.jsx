import { faSearch } from "@fortawesome/free-solid-svg-icons"
import './search.css'
import Input from "../Input/Input";
import Icon from "../Icon/Icon";
import { useState } from "react";
import axios from "axios";
import Loading from "../Loading/Loading";
import Cards from "../Card/Cards";
import Pagination from "../Pagination/Pagination";

const Search = () => {

    //inputText is the text entered in the search bar
    const [inputText, setInputText] = useState('');

    //storing the response from the api
    const [apiData, setApiData] = useState([])

    //for loading
    const [isLoading, setIsLoading] = useState(false);

    //for showing message if no book found
    const [bookNotFound, setBookNotFound] = useState('');

    //pagination stuff
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 9;

    /* 
        setSearchText is a function which will give us the value from the child to the parent component, i.e. from 
        the Input to the Search component. This function has been passed as a prop to the child(Input) component and 
        would be called there to get the search text from there......
    */
    const setSearchText = (textToSearch) => {
        setInputText(textToSearch);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + inputText + "&maxResults=40")
            .then(response => {

                /*
                    This if condition has been written to make sure that if there are no items present for the given
                    search text, then there will be no items array present in the response object, so we will create 
                    the empty apiData object in the else statement.
                */
                if (response.data.totalItems > 0) {
                    setApiData([...response.data.items]);
                    setBookNotFound('');
                }
                else {
                    setApiData([]);
                    setBookNotFound("Sorry no book found!");
                }

                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
            })
    }

    /* 
        Pagination code : Getting the cards to be rendered on the current page.
        The following variables are related to the current page, 
        i.e. indexOfLastCard will represent the index of last card present on the current page.
    */
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCardsData = apiData.slice(indexOfFirstCard, indexOfLastCard);

    const paginate = (currentPageNumber) => {
        setCurrentPage(currentPageNumber);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="box search-box">
                    <Input type="text" handleSearchText={setSearchText} />
                    <button type="submit"><Icon type={faSearch} /></button>
                </div>
            </form>
            {
                isLoading ? <Loading /> :
                    apiData.length > 0 ?
                        <div>
                            <Cards cardData={currentCardsData} />
                            <Pagination cardsPerPage={cardsPerPage} totalCards={apiData.length} paginate={paginate} currentPageNumber={currentPage}/>
                        </div> : <span className="message">{bookNotFound}</span>
            }
        </div>
    );
}

export default Search;