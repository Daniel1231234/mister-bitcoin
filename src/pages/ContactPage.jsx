import { Component } from 'react'
import { ContactList } from '../cmps/ContactList'
import {ContactFilter} from '../cmps/ContactFilter'
// import { contactService } from '../services/contactService'
import { connect } from 'react-redux'
import {loadContacts, removecontact, setFilterBy} from '../store/actions/contactActions'
// import {ContactDetails} from '../pages/ContactDetails'

 class _ContactPage extends Component {
     async componentDidMount() {
         console.log(this.props)
        await this.props.loadContacts()
    }

    onRemoveContact = async (conatctId) => {
        // await contactService.deleteContact(conatctId)
        // this.loadContacts()
        console.log(this.props)
       await this.props.removecontact(conatctId)
    }

    onSelectContactId = (conatctId) => {
        // console.log(conatctId, 'selected')
        // this.setState({ selectedContactId: conatctId })
        
    }

    // async loadContacts() {
    //     try {
    //         const contacts = await contactService.getContacts(this.state.filterBy)
    //         this.setState({ contacts })
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    onChangeFilter = (filterBy) => {
        // this.setState({ filterBy }, this.loadContacts)
        this.props.setFilterBy(filterBy)
        this.props.loadContacts()
        // setFilterBy
    }


    render() {
        const { contacts } = this.props
        if (!contacts) return <div>Loading...</div>
      return (
        <div className='contact-page container'>
                <h1>Your Contacts</h1>
                      <hr />
                <ContactFilter  onChangeFilter={this.onChangeFilter } />
                <ContactList contacts={contacts} onRemoveContact={this.onRemoveContact} history={this.props.history} />
        </div>
    )
  }
}



const mapStateToProps = state => {
    console.log(state)
    return {
        contacts: state.contactModule.contacts
    }
}

const mapDispatchToProps = {
    loadContacts,
    removecontact,
    setFilterBy
}
export const ContactPage = connect(mapStateToProps, mapDispatchToProps)(_ContactPage)
