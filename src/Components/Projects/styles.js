import styled from 'styled-components'

export const MainDiv = styled.div `
overflow: hidden;
background: #45567d;
`

export const ProjectsHeadline = styled.p `
font-weight: 700;
display: block;
max-width: 600px;
padding: 120px 0 10px;
text-align: center;
color: #F0F0F0;
font-size: 40px;
margin: 0 auto;
border-bottom: 2px solid #F0F0F0;
@media only screen and (max-width: 1000px){    
    max-width: 300px;
    padding: 40px 0 10px;
    font-size: 20px;
}
`

export const Container = styled.div `
padding: 0 20px;
max-width: 1300px;
margin: 0 auto;
`

export const ProjectsGrid = styled.div `
margin: 80px 0 0;
display: grid;
justify-content: center;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
grid-gap: 35px;
@media only screen and (max-width: 1000px){
    margin: 40px 0 0;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
`

export const ShowAll = styled.a `
font-family: Poppins, sans-serif;
float: right;
margin: 55px 0 100px;
height: 55px;
padding: 0 25px 0 15px;
background-color: #303841;
&:hover{
    i{
        transform: translateX(10px);
        color: orangered;
    }
}
*{
    color: #F0F0F0;
    font-size: 20px;
}
div{
    padding: 17.5px 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
i{
    transition: all 0.3s ease;
}
p{
    margin: 0 10px 0 0;
}
@media only screen and (max-width: 1000px){
    margin: 25px 0 50px;
    height: 50px;
    *{
        font-size: 15px;
    }
}
`