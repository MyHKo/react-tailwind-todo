import PropTypes from "prop-types"
import {useDispatch} from "react-redux"
import {removeTodo} from "/src/redux/actions.js"


function RemoveButton({ id }) {
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(removeTodo(id))
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
