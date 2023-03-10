import React, {useState, useEffect} from "react";
import BeerList from "../Components/BeerList";

const Brewdog = () => {

    const [beerList, setBeerList] = useState(null);
    const [isShown, setShown] = useState(0); 

    useEffect(() => {
        loadBeerList()
    }, []);

    const loadBeerList = () => {
        fetch('https://api.punkapi.com/v2/beers?page=1&per_page=80')
        .then(res => res.json())
        .then(beerList => setBeerList(beerList))
        
    }

    // OK here is how we fixed this issue
    // 1 I got rid of all the props and state we no longer need
    // 2 This is your new toggle button that handles your favouriting
    // 3.0 toggleFavourites maps over your beer list
    // 3.1 LINE32 if your beer object has a key on it called favourite (which it wont initially)
    // 3.2 LINE33 and if the id of the beer we are passing in matches and id of a b (beer) in out beerList
    // 3.3 LINE34/35/41 then we are going to add a new KEY VALUE pair to the beer in the beers list then set the beerList State
    // 3.4 LINE37 however if the beer already has a favourite KEY VALUE pair that is true
    // 3.5 LINE38/39/40 then set the value of this KEY to false and then serBeerList to be be the copied list

    const toggleFavourite = (beer) => {
        const beerListCopy = beerList.map((b) => {
            if (!beer.favourite) {
                if (b.id === beer.id)
                    b["favourite"] = true
                return b
                }
            else if (beer.favourite) {
                    b["favourite"] = false
                    return b
                }})
        setBeerList(beerListCopy)   
    }

    // REFACTORED THIS CODE IN TO THE FUNCTION ABOVE TO HANDLE FAVOURITING AND UNFAVOURATING
    // const handelFavourite = (beer) => {
    //     const beerListCopy = beerList.map((b) => {
    //         if (b.id === beer.id)
    //             b["favourite"] = true
    //         return b
    //         })
    //     console.log(beerListCopy)
    //     setBeerList(beerListCopy)  
    // }
    // const handelDeFavourite = (beer, index) => {
    //     const beerListCopy = beerList.map((b) => {
    //         if (beer.favourite)
    //             b["favourite"] = false
    //         return b
    //         })
    //     setBeerList(beerListCopy)
    // }

    if (!beerList) return "Loading..."

    // I added this feature in which adds the images to the top if the beer has a favourite KEY with a VALUE of true.
    const favBeers = beerList.filter((beer) => beer.favourite)
    const favNodes = favBeers.map((beer, i, array) => {
        if (array.length > 0)
        return <img key={beer.id} src={beer.image_url} alt="" />
    })

    return(
        <>
        <h1 class="header">Brewdog Beers!</h1>
        <div>
            {favNodes}
        </div>
        <BeerList beerList={beerList} isShown={isShown} setShown={setShown} toggleFavourite={toggleFavourite} />
        </>
    );

}

export default Brewdog;