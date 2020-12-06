import styled from 'styled-components'
import bg from './../../assets/img/bg.jpg'

export const AdminDiv = styled.div `
color: white;
min-height: 100vh;
height: 100%;
background: url(${bg}) center center/ cover;
display: flex;
flex-direction: column;
align-items: center;
`

export const InputForm = styled.div `
display: flex;
flex-direction: column;
align-items: center;
margin: 15px 0px;
padding: 30px 50px 25px;
border-radius: 25px;
border: 5px solid #fff;
background: rgba(255,255,255,0.1);
h2{    
    font-family: Poppins, sans-serif;
    font-size: 28px;
    font-weight: 600;
    margin: 0 0 20px;
}
`

export const Input = styled.input `
border: 2px solid #fff;
background: rgba(255,255,255,0.7);
color: rgba(0,0,0,0.7);
font-family: Poppins, sans-serif;
border-radius: 5px;
font-size: 20px;
font-weight: 100;
padding: 5px 10px;
line-height: 30px;
margin: 10px 0 25px;
`

export const Button = styled.button `
color: white;
border: 3px solid #fff;
border-radius: 10px;
margin: 5px 0px;
font-family: Poppins, sans-serif;
padding: 7px 30px;
line-height: 20px;
background: transparent;
font-size: 20px;
font-weight: 500;
transition: all 0.2s ease;
&:hover{
    background: rgba(255,255,255,0.3);
}
&:active {
    border: 3px solid #fff;
    background: rgba(255,255,255,0.7);
    color: rgba(0,0,0,0.7);
}
`

export const DeleteButton = styled(Button) `
&:hover{
    background: rgba(0,0,0,0.1);
}
&:active {
    border: 3px solid #fff;
    background: rgba(0,0,0,0.6);
    color: #DC143C;
}
`

export const Text = styled.p `
align-self: start;
font-family: Poppins, sans-serif;
font-size: 18px;
`