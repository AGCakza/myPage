import styled from 'styled-components'

export const ListItem = styled.li `
transition: all 0.3s ease;
font-size: 25px;  
margin: 0 30px;
&:hover{
    transform: translateY(-15px);
}
@media only screen and (max-width: 1000px){
    font-size: 20px;  
    margin: 10px 0;
}
`

export const ListLink = styled.a `
display: flex;
flex-direction: row;
p{
    padding: 0 0 0 5px;
}
`