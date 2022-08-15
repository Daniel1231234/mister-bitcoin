import { ContactPreview } from './ContactPreview'

export function ContactList({ contacts, onRemoveContact, history }) {
  return (
      <div >
          <ul className='contact-list simple-cards-grid clean-list '>
        {contacts.map(c => <ContactPreview key={c._id}
          contact={c}
          onRemoveContact={onRemoveContact}
        />)}
            </ul>     
      </div>
  )
}