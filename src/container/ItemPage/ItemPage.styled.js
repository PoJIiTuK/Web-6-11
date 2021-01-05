import styled from 'styled-components';

export const ItemOuter = styled.div`
    padding: 30px 80px;
    background-color: #F6F6F6;
`;

export const Item = styled.div`
    display: flex;
    justify-content: space-between;
    height: 380px;
`;

export const FishPhoto = styled.div`
    width: 448px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const Photo = styled.img`
    width: 100%;
    height: auto;
    border-radius: 40px;
`;

export const VisitedPage = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
`;

export const Line =styled.div`
    width: 100%;
    height: 2px;
    background-color: #b5b5b5;
    margin: 10px auto;
`;

export const VisitedInfo =styled.div`
    display: flex;
    align-items: center;
    color: #b5b5b5;
    font-size: 16px;
     h5{
        color: #b5b5b5 !important;
        font-size: 20px;
        margin: 0 7px;
    } 
`;

export const FishInfo =styled.div`
    width: 560px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px 0;
`;

export const ItemHeader =styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
        font-size: 35px;
        color: #000000;
        margin: 0;
    }
    div{
        height: 30px;
        border-radius: 15px;
        padding: 0 15px;
        color: #FFFFFF;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img{
            height: 24px;
            width: auto;
            padding-right: 10px;
        }
    }
`;

export const ItemTitle = styled.h1`
`;

export const ItemDescription = styled.p`
    color: #b5b5b5;
    font-size: 24px;
`;

export const NumberForm = styled.form`
    width: 250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const NumberSelect = styled.select`
    color: #000000;
    font-size: 20px;
    width: 150px;
    height: 44px;
    border: 4px solid transparent;
    border-color: #b5b5b5;
    border-radius: 12px;
    padding-left: 20px;
`;

export const LabelForNumber = styled.label`
    color: #b5b5b5;
    font-size: 24px;
`;

export const BuyBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    button{
        :hover{
        transform: scale(1.02);
        cursor: pointer;
    }
    
    padding: 12px 30px;
    border-radius: 16px;
    font-size: 20px;
    margin: 0;
    }
`;

export const FishPrice = styled.h2`
    font-size: 44px;
    color: #000000;
`;

export const GoBachBtn = styled.button`
    border: 2px solid transparent;
    background-color: #F6F6F6;
    border-color: #b5b5b5;
    color: #b5b5b5;
`;

export const AddToCartBtn = styled.button`
    border: 2px solid transparent;
    background-color: #b5b5b5;
    border-color: #b5b5b5;
    color: #FFFFFF;
`;