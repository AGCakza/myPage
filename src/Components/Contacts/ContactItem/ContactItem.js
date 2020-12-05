import {ListItem, ListLink} from './styles'

const ContactItem = (props) => (
    <ListItem>
        <ListLink href={props.url} target="_blank" rel="noopener noreferrer">
            <i className={props.icon}></i>
            <p>{props.name}</p>
        </ListLink>
    </ListItem>
)

export default ContactItem