import React, {useEffect, useState} from 'react';
import {ItemOuter, Item, FishPhoto, Photo, VisitedPage, Line, VisitedInfo, FishInfo, ItemHeader, ItemTitle, ItemDescription, NumberSelect, NumberForm, LabelForNumber, BuyBlock, FishPrice, GoBachBtn, AddToCartBtn} from "./ItemPage.styled"
import { useLocation, useHistory } from 'react-router-dom';
import yellowFish from "./../../icons/catalog/yellow_fish.jpg";
import {getFishById} from '../Catalog/GetMethod';
import { useDispatch } from "react-redux";
import { addItem } from "../ReduxMethods/action";

const options = [
    {
        label: "1",
        value: 1,
    },
    {
        label: "2",
        value: 2,
    },
    {
        label: "3",
        value: 3,
    },
    {
        label: "4",
        value: 4,
    },
    {
        label: "5",
        value: 5,
    },
    {
        label: "6",
        value: 6,
    },
    {
        label: "7",
        value: 7,
    },
    {
        label: "8",
        value: 8,
    },
    {
        label: "9+",
        value: 9,
    },
    ];

let num = 0;

const ItemPage = () => {
    let history = useHistory();
    const location = useLocation();
    const [itm, setItm] = useState({});
    const [count, setCount] = useState(num);
    const [fishToShow, setFishToShow] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const id = parseInt(location.search.split("=")[1]);
        if (fishToShow.length === 0){
            getFishById(id).then( (e) => {
                setItm(e);
            });
        }
        setCount(count + 1);
    },[location]);

    const goBack = () => {
        history.push(`/catalog`);
    }
    
    const addItemToCart = () => {
        dispatch( addItem({
            id: itm.id,
            priceInUAH: itm.priceInUAH,
            number: 1,
        }));
    };

    return(
        <ItemOuter>
                    <Item>
                            <FishPhoto>
                                <Photo src={yellowFish}></Photo>
                                <VisitedPage><Line/><VisitedInfo>This fish is <h5>{count}</h5> times</VisitedInfo><Line/></VisitedPage>
                            </FishPhoto>
                            <FishInfo>
                                <ItemHeader>
                                    <ItemTitle>Fish</ItemTitle>
                                </ItemHeader>
                                <ItemDescription> {itm.color} fishs, with length {itm.lengthFish}. </ItemDescription>
                                <NumberForm>
                                    <NumberSelect id="sizeEURstandart_input">
                                        {options.map((option) => (
                                        <option value={option.value}>{option.label}</option>
                                        ))}
                                    </NumberSelect>
                                    <LabelForNumber for="sizeEURstandart_input">Number</LabelForNumber>
                                </NumberForm>
                                <BuyBlock>
                                    <FishPrice> ${itm.priceInUAH} </FishPrice>
                                    <GoBachBtn onClick={goBack}>Go back</GoBachBtn>
                                    <AddToCartBtn onClick={addItemToCart}>Add to cart</AddToCartBtn>
                                </BuyBlock>
                            </FishInfo>
                    </Item>
        </ItemOuter>
    );
};

export default ItemPage;