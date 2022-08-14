
export function ContactPreview({contact, onRemoveContact, onSelectContactId}) {
    const contactStyle = { backgroundImage: `url(https://robohash.org/${contact._id})` }
    return (
        <li  style={contactStyle} className='contact-preview'>
            <section className="info">
                <h2 onClick={() => onSelectContactId(contact._id)} >{contact.name}</h2>
                <section className='actions'>
                    <button onClick={() => onRemoveContact(contact._id)}>Delete</button>
                 </section>
             </section>
        </li>
    )
}
