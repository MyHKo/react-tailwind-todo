import PropTypes from "prop-types"
import {useContext, useState} from "react"
import {ListContext} from "/src/context/ListContext/ListContext.js"

function Task({id, name, done}) {
    const [isDone, setIsDone] = useState(done)
    const [, , deleteTask] = useContext(ListContext)

    const nameStyle = isDone
    ? `flex text-gray-200 text-2xl line-through h-13 w-full items-center rounded-lg p-2 bg-gray-400`
    : `flex text-gray-200 text-2xl h-13 w-full items-center rounded-lg p-2 bg-gray-700`

    const handleDelete = () => {
        deleteTask(id)
    }

    const toggleDone = () => {
        setIsDone(!isDone)
    }

    return (
        <div id={id} className="flex flex-col sm:flex-row gap-5 mt-5 mb-15 sm:mb-5 h-20 sm:h-13">
            <div className={nameStyle}>
                {name}
            </div>
            <div className="flex gap-5">
                <button
                    className="text-gray-200 text-xl font-bold rounded-lg h-full w-20 sm:w-30 bg-blue-500 hover:bg-blue-400 active:bg-blue-500 cursor-pointer"
                    onClick={() => {toggleDone()}}
                >
                    {isDone? "Undo" : "Done"}
                </button>
                <button
                    className="text-gray-200 text-xl font-bold rounded-lg h-10 sm:h-full w-20 sm:w-40 bg-red-500 hover:bg-red-400 active:bg-red-500 cursor-pointer"
                    onClick={() => {handleDelete()}}
                >
                    Remove
                </button>
            </div>
        </div>
    )
}

export default Task

Task.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
}
