import React from 'react'
import styled from 'styled-components'
import { FaSearch,  FaShoppingCart, FaMapMarker} from "react-icons/fa";
import {
    Link
} from "react-router-dom"
import CartItem from './CartItem';

const Header = ({user, cartItems}) => {

    const getCount = ()=>{
        let count = 0
        //loop through all the cart items
        cartItems.forEach(cartItem=>{
            //add the quantity of the cart item to total
            count+=cartItem.product.quantity;
        })
        return count
    }

    return (
        <Container>
            <Link to = "/">
                <HeaderLogo>
                    <img src= {"https://i.imgur.com/7I9Was5.png"}/>
                </HeaderLogo>      
            </Link>
            <HeaderOptionAddress>
                <FaMapMarker/>
                <HeaderOption>
                    <OptionLineOne>Deliver to {user.name}</OptionLineOne>
                    <OptionLineTwo>Guelph N1L 0M5</OptionLineTwo>
                </HeaderOption>
            </HeaderOptionAddress>
            <HeaderSearch>
                <HeaderSearchInput type = 'text'></HeaderSearchInput>
                <HeaderSearchIconContainer>
                    <FaSearch/>
                </HeaderSearchIconContainer>
            </HeaderSearch>
            <HeaderNavItems>
                <HeaderOption>
                    <OptionLineOne>Hello, {user.name}</OptionLineOne>
                    <OptionLineTwo>Accounts & Lists</OptionLineTwo>
                </HeaderOption>
                <HeaderOption>
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLineTwo>& Orders</OptionLineTwo>
                </HeaderOption>
                <Link to = "/Cart">
                <HeaderOptionCart>
                    <FaShoppingCart/>
                    <CardCount>{getCount()}</CardCount>
                </HeaderOptionCart>
                </Link>
            </HeaderNavItems>
        </Container>
    )
}

export default Header

//styled component

const Container = styled.div`
    height: 60px;
    background-color: #0f1111;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    gap: 30px;
`
    
const HeaderLogo = styled.div`
    img{
        width: 100px;
        margin-left: 11px;
        margin-top: 10px;
    }
`

const HeaderOptionAddress = styled.div`
    padding-left: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    gap: 10px;
`

const OptionLineOne = styled.div`
    color: #ccc;

`

const OptionLineTwo = styled.div`
    color: #fff;
    font-weight: 700;

`

const HeaderSearch = styled.div`
    display: flex;
    flex-grow: 1;
    height:40px;
    border-radius: 4px;
    overflow: hidden;
    margin-left: 4px;
    background-color: white;
    :focus-within{
        box-shadow: 0 0 0 3px #F90
    }
`

const HeaderSearchInput = styled.input`
    flex-grow: 1;
    outline: none;
    border: none;
`

const HeaderSearchIconContainer = styled.div`
    background-color: #febd69;
    width: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0F1111;
    cursor: pointer;
    font-size: 1.2rem;
`

const HeaderNavItems = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 9px; //TROUBLE
    gap: 30px;
`

const HeaderOption = styled.div`
`

const HeaderOptionCart = styled.div`
    color: white;
    display: flex;
    align-items: center;
    padding-right: 9px;
`

const CardCount = styled.div`
    padding-left: 4px;
    color: #f08804;
    font-weight: 700;
`