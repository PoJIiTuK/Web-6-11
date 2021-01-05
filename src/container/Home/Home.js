import React, {useState, useEffect} from 'react';
import {Advertisment, AdvertismentTitle, AdvertismentText, ShowMoreBtn, MostPopular, MostPopularTitle, Cards, HomePage, ViewMoreBtn} from './Home.styled'
import {ReactComponent as Line } from "./../../icons/most-popular/line.svg";
import fish1 from "./../../icons/most-popular/cards/fish1.jpg";
import fish2 from "./../../icons/most-popular/cards/fish2.jpg";
import CardItem from './../../components/CardItem/CardsItem'

const data = [
    {
        shoesPhoto: fish1,
        color: 'all',
        priceInUAH: 540,
        length: 24.5,
    },
    {
        shoesPhoto: fish2,
        color: 'yellow',
        priceInUAH: 287,
        length: 11,
    },
    {
        shoesPhoto: fish2,
        color: 'yellow',
        priceInUAH: 287,
        length: 11,
    },
    {
        shoesPhoto: fish2,
        color: 'yellow',
        priceInUAH: 287,
        length: 11,
    },
    {
        shoesPhoto: fish2,
        color: 'yellow',
        priceInUAH: 287,
        length: 11,
    },
    {
        shoesPhoto: fish2,
        color: 'yellow',
        priceInUAH: 287,
        length: 11,
    },
    {
        shoesPhoto: fish2,
        color: 'yellow',
        priceInUAH: 287,
        length: 11,
    },
    {
        shoesPhoto: fish2,
        color: 'yellow',
        priceInUAH: 287,
        length: 11,
    },
];

const Home = () => { 
    const [itemsToShow, setItemsToShow] = useState(data.slice(0, 2));
    const [isViewMore, setIsViewMore] = useState(false);

    const showMore = () => {
        setItemsToShow(data);
        setIsViewMore(true);
      };

    const showLess = () => {
        setItemsToShow(data.slice(0, 2));
        setIsViewMore(false);
    };
    return(
        <HomePage>
            <Advertisment>
                <AdvertismentTitle>Home Fish </AdvertismentTitle>
                <AdvertismentText>Тут ви бежете для себе вибрати рибку в акваріум. </AdvertismentText>
                <ShowMoreBtn>Show more</ShowMoreBtn>
            </Advertisment>
            <MostPopular>
                <MostPopularTitle>
                    <Line/>
                    <p>The MOST popular fish</p>
                    <Line/>
                </MostPopularTitle>
                <Cards>
                    {itemsToShow.map(({shoesPhoto, color, priceInUAH, length }, idx) => (
                        <CardItem
                            shoesPhoto={shoesPhoto}
                            color={color}
                            priceInUAH={priceInUAH}
                            length={length}
                            id={idx}
                        />
                    ))}
                </Cards>
                {!isViewMore && (<ViewMoreBtn onClick={() => showMore()}>View more</ViewMoreBtn>)}
                {isViewMore && (<ViewMoreBtn onClick={() => showLess()}>View less</ViewMoreBtn>)}
            </MostPopular>
        </HomePage>);
};

export default Home;
