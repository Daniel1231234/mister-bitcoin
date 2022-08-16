
import { Link } from 'react-router-dom'


import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export function ContactPreview({ contact, onRemoveContact}) {
    const contactStyle = { backgroundImage: `url(https://avatars.dicebear.com/api/personas/${contact._id}.svg)` }
    // const contactStyle = { backgroundImage: `url(https://robohash.org/${contact._id})` }
    return (
        <li style={contactStyle} className='contact-preview'>
            <section className="info">
                <Link to={`/contact/${contact._id}`}>
                     <h2>{contact.name}</h2>
                </Link>
                <section className='actions'>
                    <IconButton onClick={() => onRemoveContact(contact._id)} aria-label="delete">
                        <DeleteIcon  />
                    </IconButton>
                 
                    <Link to={`/contact/edit/${contact._id}`} >
                        <EditIcon aria-label="edit" />
                    </Link>
                       
                </section>
            </section>
        </li>
    )
}
