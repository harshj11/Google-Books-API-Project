import Card from "./Card";
import "./card.css";

const Cards = (props) => {
    const {cardData} = props;

    return (
        <div className="card-container">
            {   
                //Rendering a book's details in each card
                cardData.map(data => {
                    return <Card key={data.id} details={data.volumeInfo} />
                })
            }
        </div>
    )

}

export default Cards;