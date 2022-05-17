import * as C from './styles'
import { Item } from "../../types/item"


type Props = {
    item: Item
    onDelete: (id: number) => void
}

export const ListItem = ({ item, onDelete }: Props) => {
    const deleteContactID = () => {   
        onDelete(item.id)
    }

    return (
        <C.Contact>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>Number: {item.number}</p>
            <button className='button' onClick={deleteContactID} value={item.id}>Delete contact</button>
        </C.Contact>
    )
}