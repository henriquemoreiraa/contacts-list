import {useState} from 'react'
import './style.css'
import * as C from './app.styles'
import { Item } from './types/item'
import { ListItem } from './components/listItem'
import { AddContact } from "./components/addContact"
import { stringify } from 'querystring'

function App(): any {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Roger', email: 'rogeralvexs123@gmail.com', number: 922344432 },
    { id: 2, name: 'Rogera', email: 'rogeralvexs123@gmail.com', number: 922344432 }
  ])

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

  return (
    <C.Container>
      <C.Area>
        <C.Header>Contacts List</C.Header>

        <AddContact onAdd={addNewContactList}/>
        
        {list.map((item, index) => (
        
          <ListItem key={index} item={item} /> ))}
        
      
      </C.Area>
    </C.Container>
  );
}

export default App;
