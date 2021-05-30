import React,{useState} from 'react';
import './AddContact.css'

const AddContact = () => {
    const[name , setName]= useState('');
    const[phone, setPhone]= useState('');
    const [email, setEmail]= useState('')

    const createContact = e => {
        e.preventDefault();
        console.log(name, phone, email);
    }

    return (
        <div className=' card border-0 shadow'>
            <div className ='card-header'> Add Contact</div>
            <div className='card-body'>
                <form onSubmit={(e)=> createContact(e)}>
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
                    <button className='btn btn-primary' type='submit'>Create Contact</button>
                </form>

            </div>
            
        </div>
    )
}
export default AddContact;