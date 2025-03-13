import {useContext} from "react"
import {ListContext} from "/src/context/ListContext/ListContext.js"
import PropTypes from "prop-types"

function RemoveButton({ id }) {
    const [, , deleteTask] = useContext(ListContext)

    const handleDelete = () => {
        deleteTask(id)
    }

    return (
        <button
            className="text-gray-200 text-xl font-bold rounded-lg h-10 sm:h-13 w-20 sm:w-30 bg-red-500 hover:bg-red-400 active:bg-red-500 cursor-pointer"
            onClick={() => {
                handleDelete()
            }}
        >
            Remove
        </button>
    )
}

export default RemoveButton

RemoveButton.propTypes = {
    id: PropTypes.string.isRequired,
}
