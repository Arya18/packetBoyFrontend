import React from 'react';
import Brand from 'react-bootstrap/NavbarBrand'

export const Logo = (props) => {
    const {logo, logoStyle} = props;
    return(
        <>
        <Brand href="#home"><img src={logo} alt="logo" style={logoStyle} /></Brand>
        </>
    );
}