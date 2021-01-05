import React from 'react';
import {CardContainer, FishPhoto, CardInfo, CardTitle, CardDescription, Price, ShopNowBtn} from './CardsItem.styled';

const CardItem = ({shoesPhoto, color, length, priceInUAH}) => {
    return (
        <CardContainer>
            <FishPhoto src={shoesPhoto}/>
            <CardInfo>
                <CardTitle>Fish</CardTitle>
                <CardDescription>  {color} Fish, with length {length}. </CardDescription>
                <Price>$ {priceInUAH}</Price>
                <ShopNowBtn>Shop now</ShopNowBtn>
            </CardInfo>
        </CardContainer>
    );
};

export default CardItem;