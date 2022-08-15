import { Link } from 'react-router-dom'

export function ContactPreview({ contact,onDelete }) {
    return (
        <li className='flex space-between contact-preview'>
            <h3>
                {contact.name}
            </h3>
            <div className='actions'>
                <Link style={{color:'blue'}} to={`/contact/${contact._id}`}>Details</Link>
                <Link style={{color:'orange'}} to={`/contact/edit/${contact._id}`}>Edit</Link>
                <a style={{color:'red'}} onClick={()=>onDelete(contact._id)}>Delete</a>
            </div>
        </li>
    )
}