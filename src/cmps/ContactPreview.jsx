
import { Link } from 'react-router-dom'

export function ContactPreview({ contact, onRemoveContact, onSelectContactId }) {
    const contactStyle = { backgroundImage: `url(https://avatars.dicebear.com/api/personas/${contact._id}.svg)` }
    // const contactStyle = { backgroundImage: `url(https://robohash.org/${contact._id})` }
    return (
        <li  style={contactStyle} className='contact-preview'>
            <section className="info">
                <Link to={`/contact/${contact._id}`}>
                     <h2>{contact.name}</h2>
                </Link>
                <section className='actions'>
                    <button onClick={() => onRemoveContact(contact._id)}>Delete</button>
                    <Link to={`/contact/edit/${contact._id}`} >Edit</Link>
                 </section>
             </section>
        </li>
    )
}
