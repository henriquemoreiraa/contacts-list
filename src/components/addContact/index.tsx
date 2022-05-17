import { useState } from "react"
import * as C from './styles'

type Props = {
    onAdd: (name: string, email: string, number: number) => void
}

export const AddContact = ({ onAdd }: Props) => {
    const [contact, setContact] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState(0)
    
    const newContact = ():void => {
        setContact(oldValue => !oldValue)
    }

    const addContactList = () => {
        if (name !== "" && email !== "" && number !== 0) {
            onAdd(name, email, number)
        }

        setContact(oldValue => !oldValue)
        setName('')
        setNumber(0)
        setEmail('')
    }

    return (
        <C.AddContact>
            {!contact ? ( 
                <div className="sep">
                    <p></p>
                    <p className="add--button">Add new contact <button className="add" onClick={newContact}>+</button> </p>
                </div> 
                ) : (
                    <div className="sep--new--contact1">
                        <div className="sep--new--contact">
                            <input onChange={e=>setName(e.target.value)} placeholder="Name" type="text" />
                            <input onChange={e=>setEmail(e.target.value)} placeholder="Email" type="email" />
                        </div>
                            <p className="center">
                                <input onChange={e=>setNumber(parseInt(e.target.value))} placeholder="Number" type="number" />
                            </p>
                            <p className="center addConct" >
                                <button className="add" onClick={addContactList}>+</button> Add contact
                            </p>
                    </div>
                )   
            }
            
        </C.AddContact>
    )
}