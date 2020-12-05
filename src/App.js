import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Navigation, Welcome, Projects, Contacts, Admin} from './Components/Components'
import {AddItem, getState, DeleteItem, EditItem, authUser, SignOut} from './fire'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isAdmin: false,
      data: {
        items: [
          {
            name: 'projectRozum',
            link: 'http://google.com',
            img: 'img/01.webp'
          }  
        ]
      },
      navStatus: false,
      menu: [
        {
          name: 'About',
          url: '#about'
        },
        {
          name: 'Work',
          url: '#work'
        },
        {
          name: 'Contact',
          url: '#contact'
        }
      ],
      contacts: [
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/AGCakza',
          icon: 'fab fa-facebook'
        },
        {
          name: 'Mail',
          url: 'mailto:avtandilk61@gmail.com',
          icon: 'fas fa-at'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/agcakza',
          icon: 'fab fa-instagram'
        },
        {
          name: 'Github',
          url: 'https://github.com/AGCakza',
          icon: 'fab fa-github'
        },
        {
          name: 'Telegram',
          url: 'http://t.me/agcakza',
          icon: 'fab fa-telegram'
        }
      ],
      deleteItem: {},
      newItem: {
        name: 'AddedFromAdmin',
        link: 'admin.com',
        img: 'img/02.webp'
      },
      admin: {
        login: 'admin@admin.com',
        password: 'AdminPass',
        uid: ''
      }
    }
    
    this.editItem = this.editItem.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.addItems = this.addItems.bind(this)
    this.toggleActive = this.toggleActive.bind(this)
    this.handleChangeAdmin = this.handleChangeAdmin.bind(this)
    this.authAdmin = this.authAdmin.bind(this)
    this.signOut = this.signOut.bind(this)
  }
  async componentDidMount(){    
    let newState = await getState()
    .then(newState => this.setState({ data: newState }));
  }
  signOut(){
    SignOut()
  }
  addItems(){
    AddItem(this.state.newItem)
  }
  deleteItem(e){
    DeleteItem(e.target.id)
  }
  editItem(e){
    console.log(e.target.id)
    console.log(this.state.newItem)
    EditItem(e.target.id, this.state.newItem)
  }
  handleChange({target: {value, id}}) {
    this.setState({newItem: {...this.state.newItem, [id]: value} })
  }
  handleChangeAdmin({target: {value, id}}) {
    this.setState({admin: {...this.state.admin, [id]: value} })
  }
  toggleActive(){
      this.setState(state => ({navStatus: !state.navStatus}));
      document.body.classList.toggle('lock');
  }
  async authAdmin(){
    let iLogin = this.state.admin.login;
    let iPassword = this.state.admin.password;
    let uid = await authUser(iLogin, iPassword)
    console.log(uid)
    if(uid === this.state.data.admin.uid) this.setState({isAdmin: !this.state.isAdmin})
    else console.log('ADMIN LOGIN FAIL')
  }
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/admin" render={() => <Admin handleChange = {this.handleChange}
          newItem = {this.state.newItem}
          signOut = {this.signOut} 
          addItems = {this.addItems}
          deleteItem = {this.deleteItem}
          editItem = {this.editItem}
          isAdmin = {this.state.isAdmin}
          authAdmin = {this.authAdmin}
          handleChangeAdmin = {this.handleChangeAdmin}
          admin = {this.state.admin}
          items = {this.state.data.items}/>} />
          <Route path="/">
            <Navigation menu = {this.state.menu} navStatus = {this.state.navStatus} toggleActive = {this.toggleActive}/>
            <Welcome data = {0}/>
            <Projects items = {this.state.data.items}/>
            <Contacts contacts = {this.state.contacts}/>
          </Route>
        </Switch>
      </BrowserRouter>
      )
  }
}

export default App;
