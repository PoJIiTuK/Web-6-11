import React from 'react';
import {CardContainer, FishPhoto, CardInfo, CardTitle, CardDescription, Price, ShopNowBtn} from './CatalogCardItem.styled';
import {useHistory} from 'react-router-dom';

const CatalogCardItem = ({shoesPhoto, color, length, priceInUAH, id}) => {
    let history = useHistory();

    const goToItem = () => {
        history.push(`/item?id=`+ id);
    }

    return (
        <CardContainer>
            <FishPhoto src={shoesPhoto}/>
            <CardInfo>
                <CardTitle>Fish</CardTitle>
                <CardDescription> {color} Fish, length {length}. </CardDescription>
                <Price>$ {priceInUAH}</Price>
                <ShopNowBtn onClick={goToItem}>Shop now</ShopNowBtn>
            </CardInfo>
        </CardContainer>
    );
};

export default CatalogCardItem;