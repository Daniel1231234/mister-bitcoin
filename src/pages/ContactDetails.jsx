import { Component } from 'react'
import { contactService } from '../services/contactService'
import { Link } from 'react-router-dom'

export  class ContactDetails extends Component {
    state = { contact: null }

    async componentDidMount() {
      this.loadContact()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadContact()
        }
    }

    async loadContact() {
        const contactId = this.props.match.params.id
        const contact = await contactService.getContactById(contactId)
        this.setState({contact})
    }

    onBack = () => {
        this.props.history.push('/contact')
        // this.props.history.goBack()
    }
    

    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading...</div>
        return (
            <div className='contact-details'>
                <img src={`https://avatars.dicebear.com/api/personas/${contact._id}.svg`} alt="" />
                {/* <img src={`https://robohash.org/${contact._id}`} alt="" /> */}
                <section><h3>Name: {contact.name }</h3></section>
                <section><h3>Email: {contact.email }</h3></section>
                <section><h3>Phone: {contact.phone}</h3></section>
                <div className="btns-action">
                    <button onClick={this.onBack} className='simple-button medium-button'>Back</button>
                    <Link className='simple-button medium-button' to={`/contact/edit/${contact._id}`} >Edit</Link>
                </div>
            </div>
    )
  }
}
