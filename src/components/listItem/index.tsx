import * as C from './styles'
import { Item } from "../../types/item"

type Props = {
    item: Item
}

export const ListItem = ({ item }: Props) => {
    return (
        <C.Contact>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>Number: {item.number}</p>
        </C.Contact>
    )
}