import React from 'react'
import {Input} from './styles'


export default class Admin extends React.Component{
    componentWillUnmount(){
        this.props.signOut()
    }
    render(){
        let addItem = (newItem) => {this.props.addItems(newItem)}
        if(this.props.isAdmin){
            return(
                <div>
                    <h1>ADMIN</h1>
                    <h2>Add Item</h2>
                    <Input id="name" value = {this.props.newItem.name} onChange = {this.props.handleChange}/> 
                    <Input id="link" value = {this.props.newItem.link} onChange = {this.props.handleChange}/> 
                    <Input id="img" value = {this.props.newItem.img} onChange = {this.props.handleChange}/>         
                    <button onClick = { addItem }>Add Item</button>
                    <br></br><br></br>
                    {Object.keys(this.props.items).map((key) => {
                            return(
                                <div>
                                    <p>{this.props.items[key].name}</p>
                                    <button id={key} onClick = {this.props.deleteItem}>Delete</button>
                                    <button id={key} onClick = {this.props.deleteItem}>Edit</button>
                                </div>
                            )
                    })}
                    <br></br>
                    
                </div>
            )
        }
        else return(
            <div>
                <Input id="login" onChange = {this.props.handleChangeAdmin} value = {this.props.admin.login} placeholder="login" type="text"/>
                <Input id="password" onChange = {this.props.handleChangeAdmin} value = {this.props.admin.password} placeholder="password" type="password"/>
                <button onClick = {this.props.authAdmin}>Login</button>
    
            </div>
        )
    }
}