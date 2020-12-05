import styled from 'styled-components'

export const ContactDiv = styled.div `
text-align: center;
position: relative;
*{color: #f0f0f0;}
height: 100vh;
background-color: #303841;
display: flex;
justify-content: center;
`

export const Container = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Headline = styled.h3 `
font-family: Raleway, sans-serif;
font-size: 60px;
font-weight: 800;
@media only screen and (max-width: 1000px){
    font-size: 40px;
}
`
export const SubHeader = styled.p `
font-family: Poppins, sans-serif;
font-style: italic;
font-size: 20px;
font-weight: 200;
margin: 20px 0 0;
@media only screen and (max-width: 1000px){
    font-size: 14px;
}
`

export const Flex = styled.ul `
margin: 100px 0 0;
display: flex;
flex-direction: row;
@media only screen and (max-width: 1000px){
    flex-direction: column;
    margin: 50px 0 0;
}
`

export const MadeWLove = styled.div `
font-weight: 100;
font-size: 20px;
border-top: 3px solid #BE3144;
position: absolute;
bottom: 0;
left: 0;
right: 0;
padding: 25px;
i{color: #C70039;}
@media only screen and (max-width: 1000px){
    font-size: 16px;
    padding: 15px;
}
`