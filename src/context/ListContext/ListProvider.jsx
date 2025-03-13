import {useState} from "react"
import {nanoid} from "nanoid"
import {ListContext} from "./ListContext.js";
import PropTypes from "prop-types"


export function ListProvider({ children }) {
    const [list, setList] = useState([])

    const addTask = (name) => {
        const task = {id: nanoid(), name:name, done:false}
        setList(prevState => {return [...prevState, task]})
    }

    const deleteTask = (id) => {
        const newList = list.filter(task => task.id !== id)
        setList(newList)
    }


    return (
        <ListContext.Provider value={[list, addTask, deleteTask]}>
            {children}
        </ListContext.Provider>
    )
}

ListProvider.propTypes = {
    children: PropTypes.node.isRequired
}
