import * as C from './styles'
import { Item } from "../../types/item"
import { useState } from "react"
import { getValue } from '@testing-library/user-event/dist/utils'

type Props = {
    item: Item
    onDelete: (id: number) => void
    onEdit: (id: number, name: string, email: string, number: number) => void
}

export const ListItem = ({ item, onDelete, onEdit }: Props) => {
    const [contact, setContact] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState(0)

    const newContact = ():void => {
        setContact(oldValue => !oldValue)
    }

    const deleteContactID = () => {   
        onDelete(item.id)
    }

    const editContactID = () => {
        if (name !== "" && email !== "" && number !== 0) {
            onEdit(item.id, name, email, number)
        }

        setContact(oldValue => !oldValue)
        setName('')
        setNumber(0)
        setEmail('')
    }


    return (
        <C.Contact>
            <div>
            {!contact ?
                    <div>
                        <p>Name: {item.name}</p>
                        <p>Email: {item.email}</p>
                        <p>Number: {item.number}</p>
                    </div>: '' }
                
                    <button className='button' onClick={deleteContactID} value={item.id}><svg width={18} height={18} fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6h18" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    <path d="M10 11v6" />
                    <path d="M14 11v6" />
                    </svg></button>
                    {!contact && <button className='button' onClick={newContact}><svg width={20} height={18} fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 20h4L18.5 9.5a2.829 2.829 0 0 0-4-4L4 16v4Z" />
                    <path d="m13.5 6.5 4 4" />
                    </svg></button>}
                    {contact ? 
                        <div className='sep--new--contact1'>
                            <div className="sep--new--contact">
                                <input onChange={e=>setName(e.target.value)} placeholder={item.name} type="text" />
                                <input onChange={e=>setEmail(e.target.value)} placeholder={item.email} type="email" />
                            </div>
                            <p className="center">
                                <input onChange={e=>setNumber(parseInt(e.target.value))} placeholder={item.number.toString()} type="number" />
                            </p>
                            <p className="center addConct" >
                            <button className='button' onClick={editContactID}><svg width={20} height={18} fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 20h4L18.5 9.5a2.829 2.829 0 0 0-4-4L4 16v4Z" />
                    <path d="m13.5 6.5 4 4" />
                            </svg></button>
                            </p>
                        </div> : ''}
                </div>              
            
            
        </C.Contact>
    )
}