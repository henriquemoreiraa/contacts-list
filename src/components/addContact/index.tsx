import { useState } from "react"
import * as C from './styles'

export const AddContact = () => {
    const [contact, setContact] = useState(false)
    
    const newContact = () => {
        setContact(oldValue => !oldValue)
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
                            <input placeholder="Name" type="text" />
                            <input placeholder="Email" type="email" />
                        </div>
                            <p className="center"><input placeholder="Number" type="number" /></p>
                            <p className="center addConct" ><button className="add" onClick={newContact}>+</button> Add contact</p>
                    </div>
                )   
            }
            
        </C.AddContact>
    )
}