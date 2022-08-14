import { ContactPreview } from './ContactPreview'

export function ContactList({contacts, onRemoveContact, onSelectContactId}) {
  return (
      <div >
          <ul className='contact-list simple-cards-grid clean-list '>
        {contacts.map(c => <ContactPreview key={c._id}
          contact={c}
          onRemoveContact={onRemoveContact}
          onSelectContactId={onSelectContactId}
        />)}
            </ul>     
      </div>
  )
}