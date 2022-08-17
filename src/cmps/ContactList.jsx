import { ContactPreview } from './ContactPreview'

import { Link } from 'react-router-dom'
// import PersonAddIcon from '@mui/icons-material/PersonAdd';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export function ContactList({ contacts, onRemoveContact, history }) {
  return (
    <div >
      {/* <Link className='add-btn' to="/contact/edit"> <PersonAddIcon color="action" sx={{ fontSize: 70 }} /></Link> */}
      <Link className='add-btn' to="/contact/edit"> 
      <Fab color="secondary" aria-label="add">
        <AddIcon />
        </Fab>
        </Link>
          <ul className='contact-list simple-cards-grid clean-list '>
        {contacts.map(c => <ContactPreview key={c._id}
          contact={c}
          onRemoveContact={onRemoveContact}
        />)}
            </ul>     
      </div>
  )
}