import styled from 'styled-components'

export const WelcomeHeader = styled.header `
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
align-items: center;
width: 100%;
height: 100vh;
background-color: #000;
background-image: linear-gradient(62deg, #3a3d40 0%, #181719 100%);
`
export const HeaderText = styled.h2 `
font-family: Raleway, sans-serif;
font-size: 60px;
font-weight: 600;
color: #F0F0F0;
margin: 0 0 5px 0;
@media only screen and (max-width: 1000px){
    font-size: 40px;
}
`

export const HeaderSubText = styled.h3 `
font-family: Poppins, sans-serif;
font-size: 30px;
color: rgb(190, 49, 68);
font-weight: 100;
font-style: italic;
margin: 5px 0 0 0;
@media only screen and (max-width: 1000px){
    font-size: 20px;
}
`