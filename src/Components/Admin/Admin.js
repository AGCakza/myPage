import React from 'react'
import {Input, AdminDiv, InputForm, Button, Text, DeleteButton} from './styles'


export default class Admin extends React.Component{
    componentWillUnmount(){
        this.props.signOut()
    }
    render(){
        let addItem = (newItem) => {this.props.addItems(newItem)}
        if(this.props.isAdmin){
            return(
                <AdminDiv>
                    <InputForm>
                        <h2>Add Item</h2>
                        <Text>Name of Card:</Text>
                        <Input id="name" value = {this.props.newItem.name} onChange = {this.props.handleChange}/> 
                        <Text>Link to open:</Text>
                        <Input id="link" value = {this.props.newItem.link} onChange = {this.props.handleChange}/> 
                        <Text>Link for image:</Text>
                        <Input id="img" value = {this.props.newItem.img} onChange = {this.props.handleChange}/>         
                        <Button onClick = { addItem }>Add Item</Button>
                    </InputForm>
                    <div>
                        {Object.keys(this.props.items).map((key) => {
                                return(
                                    <InputForm>
                                        <h2>{this.props.items[key].name}</h2>
                                        <Button id={key} onClick = {this.props.deleteItem}>Edit</Button>
                                        <DeleteButton id={key} onClick = {this.props.deleteItem}>Delete</DeleteButton>
                                    </InputForm>
                                )
                        })}
                        <br></br>
                    </div>
                    
                </AdminDiv>
            )
        }
        else return(
            <AdminDiv>
                <InputForm>
                    <h2>Admin Panel</h2>
                    <Text>Login:</Text>
                    <Input id="login" onChange = {this.props.handleChangeAdmin} value = {this.props.admin.login} placeholder="login" type="text"/>
                    <Text>Password:</Text>
                    <Input id="password" onChange = {this.props.handleChangeAdmin} value = {this.props.admin.password} placeholder="password" type="password"/>
                    <Button onClick = {this.props.authAdmin}>Login</Button>
                </InputForm>
    
            </AdminDiv>
        )
    }
}