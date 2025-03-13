import PropTypes from "prop-types"
import {useContext} from "react"
import {ListContext} from "/src/context/ListContext/ListContext.js"

function Task({id, name}) {
    const [, , deleteTask] = useContext(ListContext)

    const handleDelete = () => {
        deleteTask(id)
    }

    return (
        <div id={id} className="flex flex-row justify-between gap-5 mt-5 mb-5 h-13">
            <div className="flex text-gray-200 text-2xl w-full items-center rounded-lg p-2 bg-gray-700">
                {name}
            </div>
            <button className="text-gray-200 text-xl font-bold rounded-lg h-full w-30 bg-blue-500 hover:bg-blue-400 active:bg-blue-500 cursor-pointer">
                Done
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
}
