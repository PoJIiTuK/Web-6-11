import React, { useEffect, useState } from "react";
import CatalogCardItem from '../../components/CatalogCardItem/CatalogCardItem';
import { CatalogOuter, Input, IconMore, Forms, Cards, SearchBtn, SearchForm, InputSearch, FilterForm, NewFunctions, InputFilterForms, ByPrice, ByLength, FormHead, MinPrice, MaxLength, MaxPrice, MinLength, ApplyBtn, Loader } from '../Catalog/Catalog.styled';
import yellowFish from "./../../icons/catalog/yellow_fish.jpg";
import blackWhite from "./../../icons/catalog/black-white.jpg";
import emmo from "./../../icons/catalog/emmo.jpg";
import blackFish from "./../../icons/catalog/black_fish.jpg";
import blueFish from "./../../icons/catalog/blue_fish.jpg";
import more from "./../../icons/catalog/more-filter.png";
import getAllFish, {getAllFishByPriceAndLeight} from './GetMethod';
import ScaleLoader from "react-spinners/ScaleLoader";

const Catalog = () => {
    const [checkFiltr, setCheckFilter] = useState(false);
    const [title, setTitle] = useState('');
    const [minPrice, setMinPrice] = useState('20');
    const [maxPrice, setMaxPrice] = useState('500');
    const [minLength, setMinLength] = useState('2');
    const [maxLength, setMaxLength] = useState('20');
    let [fishToShow, setFishToShow] = useState([]);

    const search = (input) => {
        setFishToShow(fishToShow.filter((item) => (item.color.toLowerCase().includes(input)) ));
    };

    const filter = (minPrice, maxPrice, minLength, maxLength) => {
        getAllFishByPriceAndLeight(minPrice, maxPrice, minLength, maxLength).then( (e) => {
            setFishToShow(e);
        });
    }

    useEffect( () => {
        if (fishToShow.length === 0){
            getAllFish().then( (e) => {
                setFishToShow(e);
            });
        }
    });
    
    return(
        <CatalogOuter>
            <Forms>
                <FilterForm>
                    <FormHead>
                        <h3>Filer by: </h3>
                        <Input type="checkbox" id="check" onChange={() => setCheckFilter(!checkFiltr)}></Input>
                        <label for="check">
                            <i><IconMore src={more} check={checkFiltr}/></i>
                        </label>
                    </FormHead>
                   
                    <NewFunctions check={checkFiltr}>
                    { checkFiltr&&
                    <InputFilterForms> 
                        <h4>Price: </h4> 
                        <ByPrice>
                            <MinPrice type="text" placeholder="min price" defaultValue = "20" onChange={event => setMinPrice(event.target.value)}/> <br/>
                            <MaxPrice type="text" placeholder="max price" defaultValue = "500" onChange={event => setMaxPrice(event.target.value)}/> <br/>
                        </ByPrice>   
                        <h4>Length: </h4>
                        <ByLength>
                            <MinLength type="text" placeholder="min Length" defaultValue = "2" onChange={event => setMinLength(event.target.value)}/> <br/>
                            <MaxLength type="text" placeholder="max Length" defaultValue = "20" onChange={event => setMaxLength(event.target.value)}/> <br/>
                        </ByLength> 
                        <ApplyBtn type="button" onClick={() => filter(minPrice, maxPrice, minLength, maxLength)}>Apply</ApplyBtn>
                    </InputFilterForms>
                    }
                    </NewFunctions>
                    
                </FilterForm>
                <SearchForm>
                    <InputSearch type="text" id="input" placeholder="Search by color" value={title} onChange={event => setTitle(event.target.value)} /> <br/>
                    <SearchBtn onClick={() => search(title)}></SearchBtn>
                </SearchForm>
            </Forms>
            {fishToShow.length!==0 ? (
                <Cards>
                {fishToShow.map((item, idx) => (
                    <CatalogCardItem
                        fishPhoto={yellowFish}
                        color={item.color}
                        priceInUAH={item.priceInUAH}
                        leightShaftlnSM={item.leightShaftlnSM}
                        materialOfVamp={item.materialOfVamp}
                        toecapType={item.toecapType}
                        id={item.id}
                        key={idx}
                    />
                ))}
            </Cards>
            ) : (<Loader>
                <ScaleLoader color={"#b5b5b5"}/>
            </Loader>)}
        </CatalogOuter>
    );
};

export default Catalog;