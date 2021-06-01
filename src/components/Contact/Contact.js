import React from 'react'
import Avatar from 'react-avatar'
import {Link} from  'react-router-dom'
import {deleteContact} from '../../redux/contactAction'
import {useDispatch} from 'react-redux'
import './Contact.css'


const Contact = ({contact,selectAll}) => {
    const dispatch = useDispatch();
    const { name, phone, email,id}= contact;
    return (
        <tr>
            <td>
                <div className='custom-control custom-checkbox'>
                    <input checked={selectAll} type='checkbox' className='custom-control-input' />
                    <label className='custom-control-label'></label>

                </div>
            </td>
            <td>
                <Avatar name={name} size ="40" round={true} className='me-2' /> 
                {name}
            </td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className= 'actions'>
                <Link to={`/contacts/edit/${id}`}>
                    <span className = 'material-icons me-2'>edit</span>
                </Link>
                
                    <span className = 'material-icons text-danger' onClick={() => dispatch(deleteContact(id))}>delete</span>
                
            </td>
        </tr>
    )
}
export default Contact;