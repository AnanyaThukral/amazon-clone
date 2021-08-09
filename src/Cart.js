import styled from 'styled-components'
import CartItems from './CartItems'
import CardTotal from './CardTotal'

const Cart = ({cartItems}) => {
    return (
        <Container>
            <CartItems cartItems = {cartItems}/>
            <CardTotal/>
        </Container>
    )
}

export default Cart

const Container = styled.div`
    display: flex;
    padding: 14px 18px 0 18px; //Trouble
`