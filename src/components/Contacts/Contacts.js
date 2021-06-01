import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import Contact from '../Contact/Contact'
import {selectAllContact,clearSelected, deleteSelected} from '../../redux/contactAction'
const Contacts = () => {
    const dispatch =useDispatch()
    const[selectAll, setSelectAll]= useState(false)
    const contacts = useSelector((state)=> state.contacts);
    const selectedContacts = useSelector((state)=> state.selectedContacts)
    console.log(contacts)

    useEffect(() =>{
        if(selectAll){
            dispatch(selectAllContact(contacts.map(contact => contact.id)))
        }else{
            dispatch(clearSelected())
        }
    },[selectAll])
    return (
        <div>
            {
                selectedContacts.length>0 ?  (
                    <button className="btn btn-info my-2" onClick={() => dispatch(deleteSelected())}> Delete All</button>
                ): null
            }
            <table className="table shadow">
                <thead className='bg-danger text-white'>
                    <tr>
                        <th scope="col">
                            <div className='custom-control custom-checkbox'>
                                <input id="selectAll" type='checkbox' className='custom-control-input' 
                                value={selectAll}
                                onClick={()=> setSelectAll(!selectAll)}
                                />
                                <label htmlFor="selectAll" className='custom-control-label'></label>

                            </div>
                        </th>
                        <th>Name</th>
                        <th>Phone No</th>
                        <th>E-mail</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map(contact => <Contact contact={contact} key={contact.id} selectAll={selectAll} /> )
                    }
                    
                    
                </tbody>
            </table>
        </div>
    )
}
export default Contacts;