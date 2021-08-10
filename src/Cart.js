import styled from 'styled-components'
import CartItems from './CartItems'
import CartTotal from './CartTotal'

const Cart = ({cartItems}) => {
    return (
        <Container>
            <CartItems cartItems = {cartItems}/>
            <CartTotal cartItems = {cartItems}/>
        </Container>
    )
}

export default Cart

const Container = styled.div`
    display: flex;
    padding: 14px 18px 0 18px; //Trouble
    align-items: flex-start;
`