import React from 'react'
import styled from 'styled-components'
import CartItems from './CartItems'
import db from './firebase'

const Product = ({title, price, rating, image, id}) => {

    //fun saves the data to db collection - ('CartItems')
    const addToCart = ()=>{
        console.log(id)
        const cartItem = db.collection("CartItems").doc(id) //create a new documents in "cartItem" collection with products "id"
        cartItem.get()
        .then(doc=>{
            if(doc.exists){
                cartItem.update({
                    quantity: doc.data().quantity + 1
                })
            }else{
                db.collection("CartItems").doc(id).set({ //create a new id in the db
                    name: title,
                    image: image,
                    price:  price,
                    quantity: 1
                }) 
            }
        })
    }

    return (
        <Container>
            <Title>
               {title}
            </Title>
            <Price>
                ${price}</Price>
            <Rating>
                {
                    Array(rating)
                    .fill()
                    .map(rating=> <p>⭐</p>)
                }
            </Rating>
            <Image src = {image}/>
            <AddToCartButton
                onClick={addToCart}
            >
                Add to Cart
            </AddToCartButton>
        </Container>
    )
}

export default Product

const Container = styled.div`
    background-color:white;
    z-index:100;
    flex:1;
    padding: 20px;
    max-height: 400px;
    margin: 10px;
    display: flex;
    flex-direction: column;
`

const Title = styled.span`
`

const Price = styled.span`
    font-weight: 500;
    margin-top: 3px;
`

const Rating = styled.div`
    display: flex;
`
const Image = styled.img`
    max-height: 200px;
    object-fit: contain; //stop it from stretching with the increase in screen size
`
const AddToCartButton = styled.button`
    width: 100px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
    height: 30px;
    align-self: center;
    margin-top: 12px;
`
