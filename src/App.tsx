import {useState} from 'react'
import './style.css'
import * as C from './app.styles'
import { Item } from './types/item'

function App(): any {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Roger', email: 'rogeralvexs123@gmail.com', number: '922344432' },
    { id: 2, name: 'Rogera', email: 'rogeralvexs123@gmail.com', number: '922344432' }
  ])

  return (
    <C.Container>
      <C.Area>
        <C.Header>Contacts List</C.Header>
        
        {list.map((item, index) => (
          <C.Contact>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>Numberr {item.number}</p>
          </C.Contact> ))}
        
      
      </C.Area>
    </C.Container>
  );
}

export default App;
