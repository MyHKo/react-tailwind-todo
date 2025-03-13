import PropTypes from "prop-types"

function DoneButton({ isDone, setIsDone }) {
    const toggle = () => {
        setIsDone(!isDone)
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
    setIsDone: PropTypes.func.isRequired,
}
