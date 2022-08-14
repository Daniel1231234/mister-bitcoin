import { Component } from 'react'
import { ContactList } from '../cmps/ContactList'
import {ContactFilter} from '../cmps/ContactFilter'
import { contactService } from '../services/contactService'
import {ContactDetails} from '../pages/ContactDetails'

export class ContactPage extends Component {
    state = {
        contacts: null,
        selectedContactId: null,
        filterBy: null,
    }

    componentDidMount() {
        this.loadContacts()
    }

    onRemoveContact = async (conatctId) => {
        await contactService.deleteContact(conatctId)
        this.loadContacts()
    }

    onSelectContactId = (conatctId) => {
        console.log(conatctId, 'selected')
        this.setState({selectedContactId: conatctId})
    }

    async loadContacts() {
        try {
            const contacts = await contactService.getContacts(this.state.filterBy)
            console.log(contacts)
            this.setState({ contacts })
        } catch(err) {console.log(err)}
  
    }

    onChangeFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadContacts)
    }


    render() {
        const { contacts,selectedContactId } = this.state
        if (!contacts) return <div>Loading...</div>
      return (
        <div className='contact-page'>
            {selectedContactId ?
            <ContactDetails onBack={() => this.onSelectContactId(null)} contactId={selectedContactId} /> :   
            <>
                <h1>Your Contacts</h1>
                <ContactFilter  onChangeFilter={this.onChangeFilter } />
                <ContactList contacts={contacts} onRemoveContact={this.onRemoveContact} onSelectContactId={this.onSelectContactId} />
            </>
            }
        </div>
    )
  }
}
