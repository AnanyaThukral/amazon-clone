import react, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Product from './Product'
import db from './firebase'

const Home = () => {
    //create a state
    //setProducts is a function used to change the state
    const [products, setProducts] = useState([])

    const getProducts = ()=>{
        db.collection('products').onSnapshot((snapshot)=>{
            let tempProducts = []

            tempProducts = snapshot.docs.map(doc => (
            {   
                id:doc.id,
                product:doc.data()
            }
            ))
            //save it to the product state
            setProducts(tempProducts);
        })
    }

    //react hook
    //[] - empty array means - only run the hook on mount (refresh)
    //call the function only once when the homepage is rendered the first time
    useEffect(()=>{
        getProducts()
    }, [])

    // console.log(products)

    return (
        <Container>
            <Banner>
            </Banner>
            <Content>
                {
                    products.map(data=>(
                        <Product
                            title={data.product.name}
                            price={data.product.price}
                            rating={data.product.rating}
                            image={data.product.image}
                            id={data.id}
                        />
                    ))
                }
            </Content>
        </Container>
    )
}

export default Home

//styled components
const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
`

const Banner = styled.div`
    background-image: url("https://i.imgur.com/SYHeuYM.jpg");
    min-height: 600px;
    background-size: cover;
    z-index:1;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
`

const Content = styled.div`
    padding: 0 10px;
    margin-top: -350px;
    z-index:100;
    display: flex;
`