import React from 'react'
import styled from 'styled-components'

const CartItem = ({id, item}) => {

    let options = []
    console.log(item.quantity)
    for(let i = 1; i < Math.max(item.quantity+1, 20); i++){
        options.push(<option value={i}>Qty: {i}</option>)
    }

    return (
        <Container>
            <Image src = {item.image}/>
            <CardItemInfo>
                <CardItemTop>
                    <h2>{item.name}</h2>
                </CardItemTop>
                <CardItemBottom>
                    <CardItemQuantityContainer>
                        <select
                            value = {item.quantity}
                        >
                            {options}
                        </select>
                    </CardItemQuantityContainer>
                    <CardItemDeleteContainer>Delete</CardItemDeleteContainer>
                </CardItemBottom>
            </CardItemInfo>
            <CardItemPrice>
                ${item.price}
            </CardItemPrice>
        </Container>
    )
}

export default CartItem

const Container = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
    display: flex;
    border-bottom: 1px solid #ddd;
`

const Image = styled.img`
    height: 180px;
    width: 180px;
    object-fit: contain;
    margin-right: 16px;
`

const CardItemInfo = styled.div`
    flex-grow:1
`

const CardItemTop = styled.div`
    color: #007185;
    h2{
        font-size: 18px;
    }
`

const CardItemBottom = styled.div`
    display: flex;
    margin-top: 4px;
    align-items: center;
`

const CardItemQuantityContainer = styled.div`
    select{
        border-radius: 7px;
        background-color: #F0f2f2;
        padding: 8px;
        box-shadow: 0 2px 5px rgba(15,17,17,.15);
        outline: none;
    }
`

const CardItemDeleteContainer = styled.div`
    color: #007185;
    margin-left: 16px;
    cursor: pointer;
`
    
const CardItemPrice = styled.div`
    font-weight: 700;
    font-size: 18px;
    margin-left: 16px;
`