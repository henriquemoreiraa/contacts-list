import {useState} from 'react'
import './style.css'
import * as C from './app.styles'
import { Item } from './types/item'
import { ListItem } from './components/listItem'
import { AddContact } from "./components/addContact"

function App(): any {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Roger', email: 'rogeralvexs123@gmail.com', number: 922344432 },
    { id: 2, name: 'Rogera', email: 'rogeralvexs123@gmail.com', number: 922344432 }
  ])

  return (
    <C.Container>
      <C.Area>
        <C.Header>Contacts List</C.Header>

        <AddContact />
        
        {list.map((item, index) => (
        
          <ListItem key={index} item={item} /> ))}
        
      
      </C.Area>
    </C.Container>
  );
}

export default App;
