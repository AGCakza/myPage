import styled from 'styled-components'

export const Project = styled.div `
box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
&:hover{
    img{
        transform: scale(1.05);
    }
    span{
        &::before{
            display: block;
            opacity: 1;
        }
        &::after{
            display: block;
            opacity: 1;    
        }
    }
}
a{
    text-align: center;
}
`
export const ProjectImg = styled.div `
display: flex;
align-items: flex-start;
justify-content: center;
max-height: 400px;
overflow: hidden;
@media only screen and (max-width: 1000px){
    max-height: 280px;
}

`

export const Img = styled.img `
transform-origin:  top;
object-fit: cover;
width: 150%;
transition: all 0.3s ease-out;
`

export const ProjectName = styled.div `
height: 65px;
font-size: 25px;
padding: 20px 0;
width: 100%;
background-color: #303841;
color: #F0F0F0;
@media only screen and (max-width: 1000px){
    height: 60px;
    font-size: 20px;
}
`

export const ProjectArrows = styled.span `
position: relative;            
&::before{
    font-weight: 100;
    color: orangered;
    transition: all 0.3s ease-out;
    font-size: 35px;
    top: 0px;
    left: -30px;
    content: '<';
    position: absolute;
    opacity: 0;
    display: hidden;
}
&::after{
    font-weight: 100;
    color: orangered;
    transition: all 0.2s ease;
    display: hidden;
    font-size: 35px;
    top: 0px;
    right: -55px;
    letter-spacing: 5px;
    content: '/>';
    position: absolute;
    opacity: 0;
}
@media only screen and (max-width: 1000px){         
    &::before{
        top: -3px;
        left: -25px;
    }
    &::after{
        top: -3px;
        right: -50px;
    }
}
`

