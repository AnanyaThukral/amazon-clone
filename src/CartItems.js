import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'

const CartItems = ({cartItems}) => {
    return (
        <Container>
            <Title>Shopping Cart</Title>
            <Price>Price</Price>
            <hr/>
            <ItemsContainer>
                {
                    cartItems.map(item=>(
                        <CartItem
                            id = {item.id}
                            item = {item.product}
                        />
                    ))
                }
            </ItemsContainer>
        </Container>
    )
}

export default CartItems

const Container = styled.div`
    flex: 0.8;
    margin-right: 18px;
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
`

const Title = styled.div`
    font-weight: 400;
    font-size: 28px;

`

const Price = styled.div`
    align-self: flex-end;
`

const ItemsContainer = styled.div``