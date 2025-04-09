import PropTypes from "prop-types"
import {useDispatch} from "react-redux"
import {toggleTodo} from "/src/redux/actions/todoActions.js";

function DoneButton({ todoId, isDone }) {
    const dispatch = useDispatch()

    const toggle = () => {
        dispatch(toggleTodo(todoId))
    }

    return (
        <button
            className="text-gray-200 text-xl font-bold rounded-lg h-10 sm:h-13 w-20 bg-blue-500 hover:bg-blue-400 active:bg-blue-500 cursor-pointer"
            onClick={() => {
                toggle()
            }}
        >
            {isDone ? "Undo" : "Done"}
        </button>
    )
}

export default DoneButton

DoneButton.propTypes = {
    isDone: PropTypes.bool.isRequired,
    todoId: PropTypes.string.isRequired,
}
