import PropTypes from "prop-types"
import {useContext, useState} from "react"
import {ListContext} from "/src/context/ListContext/ListContext.js"

function Task({id, name, done}) {
    const [isDone, setIsDone] = useState(done)
    const [, , deleteTask] = useContext(ListContext)

    const nameStyle = isDone
    ? `flex text-gray-200 text-2xl line-through w-full items-center rounded-lg p-2 bg-gray-500`
    : `flex text-gray-200 text-2xl w-full items-center rounded-lg p-2 bg-gray-700`

    const handleDelete = () => {
        deleteTask(id)
    }

    const toggleDone = () => {
        setIsDone(!isDone)
    }

    return (
        <div id={id} className="flex flex-row justify-between gap-5 mt-5 mb-5 h-13">
            <div className={nameStyle}>
                {name}
            </div>
            <button
                className="text-gray-200 text-xl font-bold rounded-lg h-full w-30 bg-blue-500 hover:bg-blue-400 active:bg-blue-500 cursor-pointer"
                onClick={() => {toggleDone()}}
            >
                {isDone? "Undo" : "Done"}
            </button>
            <button
                className="text-gray-200 text-xl font-bold rounded-lg h-full w-40 bg-red-500 hover:bg-red-400 active:bg-red-500 cursor-pointer"
                onClick={() => {handleDelete()}}
            >
                Remove
            </button>
        </div>
    )
}

export default Task

Task.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
}
