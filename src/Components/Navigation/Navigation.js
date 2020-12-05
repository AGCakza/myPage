import React from 'react'
import {NavBar, ListFlex, LinkListFlex, NavigationContainer, Burger} from './styles'

const Navigation = (props) => (
    <NavBar className={props.navStatus && `active`}>
        <NavigationContainer>
            <Burger onClick = {props.toggleActive} className={props.navStatus && `active`}>
                <span></span>
            </Burger>
            <ListFlex className={props.navStatus && `active`}>
                {props.menu.map((item) => (
                    <LinkListFlex><a href={item.url}>{item.name}</a></LinkListFlex>
                ))}
            </ListFlex>
        </NavigationContainer>
    </NavBar>
)

export default Navigation