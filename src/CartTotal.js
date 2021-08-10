import React from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format';

const CardTotal = ({cartItems}) => {
    
    const getItemCount = ()=>{
        let count = 0

        cartItems.forEach(item=>{
            count+=item.product.quantity;
        })
        return count
    }

    const getTotal = ()=>{
        let total = 0

        cartItems.forEach(item=>{
            total+=item.product.price*item.product.quantity
        })
        return total
    }

    return (
        <Container>
            <SubTotal>Subtotal ({getItemCount()} items): 
            <NumberFormat value={getTotal()} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </SubTotal>
            <CheckoutButton>Proceed to Checkout</CheckoutButton>
        </Container>
    )
}

export default CardTotal

const Container = styled.div`
    flex: 0.3;
    background-color: white;
    padding: 20px;
`

const SubTotal = styled.h2`
    margin-bottom:16px ;
`

const CheckoutButton = styled.button`
    background-color: #f0c14b;
    width: 100%;
    padding: 4px 8px;
    border: 2px solid #a88734;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover{
        background: #ddb347;
    }
`