import React from 'react'
import ContactItem from './ContactItem/ContactItem'
import { ContactDiv, Headline, Container, SubHeader, Flex, MadeWLove } from './styles'

const Contacts = (props) => (
    <ContactDiv id="contacts">
        <Container>
            <Headline>Let's work together...</Headline>
            <SubHeader>How do you take your coffee?</SubHeader>
            <Flex>
                {props.contacts.map(item => (<ContactItem name={item.name} url={item.url} icon={item.icon} />))}
            </Flex>
            <MadeWLove>Made with <i class="fas fa-heart"></i> by Me</MadeWLove>
        </Container>
    </ContactDiv>
)

export default Contacts