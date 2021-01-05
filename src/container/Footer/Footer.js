import React from 'react';
import { StyledFooter, StyledLogoName, StyledNetwoks, NetworkLogo, StyledRights } from './Footer.styled';
import {ReactComponent as LogoName } from "./../../icons/footer/logo-name.svg";
import {ReactComponent as Rights } from "./../../icons/footer/rights.svg";
import insta from "./../../icons/footer/insta.png"
import facebook from "./../../icons/footer/facebook.png"

const Footer = () => { 
    return(
        <StyledFooter>
            <StyledLogoName>
                <LogoName />
            </StyledLogoName>
            <StyledNetwoks>
                <a href="https://www.instagram.com/"> <NetworkLogo src={insta} /> </a>
                <a href="https://www.facebook.com/"> <NetworkLogo src={facebook} /> </a>
            </StyledNetwoks>
            <StyledRights>
                <Rights/>
            </StyledRights>
        </StyledFooter>
        );
};

export default Footer;
