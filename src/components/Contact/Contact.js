import React from 'react'
import Avatar from 'react-avatar'
import './Contact.css'


const Contact = ({contact}) => {
    const { name, phone, email}= contact;
    return (
        <tr>
            <td>
                <div className='custom-control custom-checkbox'>
                    <input type='checkbox' className='custom-control-input' />
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
                <a href='#'>
                    <span className = 'material-icons me-2'>edit</span>
                </a>
                <a href='#'>
                    <span className = 'material-icons text-danger'>delete</span>
                </a>
            </td>
        </tr>
    )
}
export default Contact;