import styled from "styled-components"


export const NavBar = styled.div`
width: 100%;
position: fixed;
z-index: 5;
background: red;
@media only screen and (max-width: 700px){
    &::before{
        transition: 0.3s all ease;
        content: '';
        position: fixed;
        display: block;
        top: -120vh;
        left: 0;
        width: 100vw;
        height: 120vh;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: -1;
    }
    &.active::before{top: 0vh;}
}
`

export const ListFlex = styled.ul`
padding: 0 30px 0 0;
height: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
@media only screen and (max-width: 700px){
    flex-direction: column;
    position: absolute;
    z-index: -1;
    top:-100vh;
    padding: 0;
    transition: 0.5s all ease-out;
    &.active{
        top: 50vh;
    }
}
`

export const LinkListFlex = styled.li`
a{color: #F0F0F0;}
    font-size: 22px;
    padding: 20px;
@media only screen and (max-width: 700px){
    font-size: 40px;
    padding: 50px;
}
`

export const NavigationContainer = styled.nav`
position: relative;
top: 0;
left: 0;
width: 100%;
height: 70px;
background: #BE3144;
box-shadow: 0 2px 0 rgba(0, 0, 0, 0.4);
display: flex;
justify-content: flex-end;
@media only screen and (max-width: 700px){
    height: 40px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
`

export const Burger = styled.div `
display: none;
@media only screen and (max-width: 700px){
    margin: 0 20px 0 0;
    align-self: flex-end;
    position: relative;
    display: block;
    width: 30px;
    height: 20px;
    span{
        position: absolute;
        top: 8px;
        display: block;
        background-color: #fff;
        height: 4px;
        width: 100%;
        transition: 0.3s all ease;
    }
    &::before{
        content: '';
        position: absolute;
        bottom: 0;
        display: block;
        background-color: #fff;
        height: 4px;
        width: 100%;
        transition: 0.3s all ease;
    }
    &::after{
        content: '';
        position: absolute;
        top: 0;
        display: block;
        background-color: #fff;
        height: 4px;
        width: 100%;
        transition: 0.3s all ease;
    }
    &.active{
        
        span{
            transform: scale(0);
        }
        &::before{
            transform: rotate(45deg);
            bottom: 8px;
        }
        &::after{
            transform: rotate(-45deg);
            top: 8px;
        }
    }
}
`

