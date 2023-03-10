import React from "react";

const Beer = ({beer, isShown, setShown, index, toggleFavourite}) => {

    const displayBeerInfo = (id) => {
        setShown(id);
        if (isShown === id){
            setShown(0)
        }
    }

    //Line 26 now checks if the beer has a KEY of favourite with a VALUE of true
    return(
        <div> 
            <div onClick={() => displayBeerInfo(beer.id)} className ='pointer'>
                <hr></hr>
                <h1>{beer.name}</h1>
                <img src={beer.image_url} alt=""></img>
                <h2>{beer.tagline}</h2>
                <div className={`beer-info ${isShown===beer.id ? "shown" : "hidden"}`}>
                    <p>{beer.description}</p>
                    <h5> First Brewed in {beer.first_brewed}</h5>
                    <h4> ABV: {beer.abv}</h4>
                </div>
            </div>
            {beer.favourite ? <h2 className ='pointer' id={beer.id} onClick={() => toggleFavourite(beer)}>&#9733;YES</h2> : <h2 className ='pointer' id={beer.id} onClick={() => toggleFavourite(beer, index)}>&#9734;No</h2>}
        </div> 
    )
}


export default Beer;