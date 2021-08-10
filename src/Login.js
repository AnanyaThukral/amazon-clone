import React from 'react'
import styled from 'styled-components'
import {auth, provider} from './firebase'

const login = ({setUser}) => {

    const signIn = ()=>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            //the signed in user info
            let user = result.user;
            let newUser = {
                name: user.displayName,
                email: user.email,
                photo:user.photoURL
            }
            //save it in local storage
            localStorage.setItem('user', JSON.stringify(newUser))
            setUser(newUser)
        }).catch((error)=>{
            alert(error.message)
        })
    }

    return (
        <Container>
            <Content>
                <AmazonLogo src = {'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'}/>
                <h1>Sign into Amazon</h1>
                <LoginButton onClick = {signIn}>
                    Sign in with Google
                </LoginButton>
            </Content>
        </Container>
    )
}

export default login

const Container = styled.div`
    width:100%;
    height: 100vh;
    background-color:#f8f8f8;
    display: grid;
    place-items: center;
`

const Content = styled.div`
    padding: 100px;
    background: white;
    border-radius:5px;
    box-shadow:0 1px 3px gray;
    text-align: center;
`

const AmazonLogo = styled.img`
    height: 60px;
    margin-bottom: 40px;
`

const LoginButton = styled.button`
    margin-top: 50px;
    background: #f0c14b;
    border-radius:4px;
    height:40px;
    border: 2px solid #a88734;
    padding: 4px 8px;
    cursor: pointer;
`