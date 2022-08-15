import { Component } from 'react'
import { contactService } from '../services/contactService'

export class ContactEdit extends Component {
    state = {
        contact:null,
    }

    async componentDidMount() {
        const contactId = this.props.match.params.id
        const contact = contactId ? await contactService.getContactById(contactId) : contactService.getEmptyContact()
        console.log(contact)
        this.setState({contact})
     }
    
    handleChange = ({ target }) => {
        const field = target.name 
        const value = target.type === 'number' ? (+target.value || '') : target.value
        this.setState(prevState => ({ contact: { ...prevState.contact, [field]: value } }))
       
     }
    
    onSaveContact = async (ev) => { 
        ev.preventDefault()
        await contactService.saveContact({ ...this.state.contact })
        this.props.history.push('/contact')
    }
    
    inputRef = (elInput) => {
        elInput && elInput.focus()
    }
    
    onRemoveContact = async (id) => {
        await contactService.deleteContact(id)
        this.setState({ contact: null })
        this.props.history.push('/contact')
    }
    

    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading...</div>

    return (
        <section className='contact-edit'>
            <h1>{contact._id ? 'Edit' : 'Add'} Contact</h1>
            <form onSubmit={this.onSaveContact} className="simple-form">

                <label htmlFor='name'>Name</label>
                <input type='text' name="name" id="name" ref={this.inputRef} onChange={this.handleChange} />

                <label htmlFor='phone'>Phone</label>
                <input type='number' name="phone" id="phone" onChange={this.handleChange} />

                <label htmlFor='email'>Email</label>
                <input type='text' name="email" id="email" onChange={this.handleChange} />
          
                <button className='simple-button'>{contact._id ? 'Save' : 'Add'} </button>
            </form>
                <button className='simple-button' onClick={() => this.onRemoveContact(contact._id)}>Delete</button>
      </section>
    )
  }
}
