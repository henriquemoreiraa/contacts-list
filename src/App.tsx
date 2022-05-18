import {useState} from 'react'
import './style.css'
import * as C from './app.styles'
import { Item } from './types/item'
import { ListItem } from './components/listItem'
import { AddContact } from "./components/addContact"


function App(): any {
  const [list, setList] = useState<Item[]>([])

  const addNewContactList = (name: string, email: string, number: number) => {
    const newList = [...list]
    newList.push({
      id: list.length + 1,
      name: name,
      email: email,
      number: number
    })
    setList(newList)
  }

  const deleteContact = (id: number) => {
    const newList = list.filter(e => e.id !== id)
    setList(newList)
  }

  const editContact = (id: number, name: string, email: string, number: number)=> {
    const newList = list.filter(e => e.id !== id)

    newList.push({
      id: id,
      name: name,
      email: email,
      number: number
    })

    setList(newList)
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Contacts List</C.Header>

        <AddContact onAdd={addNewContactList} />
        
        {list.length < 1 ? (      
          <div className='message--add--new'>
            <h1>You don't have any contact yet!</h1>
            <h2>Add a new contact above</h2>
          </div>
        ) : (
          <div>
            {list.map((item, index) => (
            <ListItem key={index} item={item} onDelete={deleteContact} onEdit={editContact}/> ))}
          </div>
        )
        }
      </C.Area>
    </C.Container>
  );
}

export default App;
