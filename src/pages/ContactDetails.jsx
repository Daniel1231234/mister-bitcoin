import { Component } from 'react'
import {contactService} from '../services/contactService'

export  class ContactDetails extends Component {
    state = { contact: null }

    async componentDidMount() {
        const contact = await contactService.getContactById(this.props.contactId)
        this.setState({contact})
    }
    

    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading...</div>
        return (
            <div className='contact-details'>
                <section><h3>Name: {contact.name }</h3></section>
                <section><h3>Email: {contact.email }</h3></section>
                <section><h3>Phone: {contact.phone }</h3></section>
                <img src={`https://robohash.org/${contact._id}`} alt="" />
                <button onClick={this.props.onBack} className='simple-button medium-button'>Back</button>
            </div>
    )
  }
}
