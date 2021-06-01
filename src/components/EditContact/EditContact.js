import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {getContact,updateContact} from '../../redux/contactAction'
//import shortid from 'shortid'
import {useParams,useHistory} from 'react-router-dom'

import './EditContact.css'

const EditContact = () => {
    let {id}=useParams();

    let history= useHistory()
    const dispatch=useDispatch()
    const contact = useSelector((state) => state.contact)
    
    const[name , setName]= useState('');
    const[phone, setPhone]= useState('');
    const [email, setEmail]= useState('')

    useEffect(()=>{
        console.log('hello')
        console.log('contact',contact)
        if(contact != null){
            setName(contact.name);
            setPhone(contact.phone);
            setEmail(contact.email);
        }
        console.log(name)
        dispatch(getContact(id))
    },[contact]);
    
    const onUpdateContact= (e) => {
        e.preventDefault();
        const update_Contact = Object.assign(contact, { 
            name: name,
            phone: phone,
            email: email,
        })
        dispatch(updateContact(update_Contact))
        history.push('/')

        //console.log(updateContact)
    }

    return (
        <div className=' card border-0 shadow'>
            <div className ='card-header'> Edit Contact</div>
            <div className='card-body'>
                <form onSubmit={(e) => onUpdateContact(e)}>
                    <div className='form-group my-2'>
                        <input type='text' className='form-control' placeholder='Enter Your Name' value={name}
                        onChange={(e)=> setName(e.target.value)}
                        
                        />
                    </div>
                    <div className='form-group my-2'>
                        <input type='text' className='form-control' placeholder='Enter Your Phone Number' value={phone}
                        onChange={(e)=> setPhone(e.target.value)}
                        
                        />
                    </div>
                    <div className='form-group my-2'>
                        <input type='text' className='form-control' placeholder='Enter Your Email Address' value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-primary' type='submit'>Update Contact</button>
                </form>

            </div>
            
        </div>
    )
}
export default EditContact;