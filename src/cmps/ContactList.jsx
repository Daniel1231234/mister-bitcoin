import { ContactPreview } from './ContactPreview'

import { Link } from 'react-router-dom'
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export function ContactList({ contacts, onRemoveContact, history }) {
  return (
    <div >
        <Link className='add-btn' to="/contact/edit"> <PersonAddIcon color="action" sx={{ fontSize: 70 }} /></Link>
          <ul className='contact-list simple-cards-grid clean-list '>
        {contacts.map(c => <ContactPreview key={c._id}
          contact={c}
          onRemoveContact={onRemoveContact}
        />)}
            </ul>     
      </div>
  )
}