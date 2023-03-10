import React from "react";
import Beer from './Beer';

const BeerList = ({isShown, setShown, beerList, toggleFavourite}) => {

    const beers = beerList.map((beer, index) => {
        return <Beer beer={beer} toggleFavourite={toggleFavourite} key={beer.id} index={index} isShown={isShown} setShown={setShown}/>
    })





    return (
        <div>
            {beers}
        </div>
    );


}


export default BeerList