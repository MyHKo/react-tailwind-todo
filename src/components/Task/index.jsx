import PropTypes from "prop-types"
import {useState} from "react"
import DoneButton from "/src/components/Task/componetns/DoneButton/DoneButton.jsx"
import RemoveButton from "/src/components/Task/componetns/RemoveButton/RemoveButton.jsx"

function Task({id, name, done}) {
    const [isDone, setIsDone] = useState(done)

    const nameStyle = isDone
    ? `flex text-gray-200 text-2xl line-through h-auto w-full items-center rounded-lg p-2 bg-gray-400`
    : `flex text-gray-200 text-2xl h-auto w-full items-center rounded-lg p-2 bg-gray-700`

    return (
        <div id={id} className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-5 mb-5 sm:mb-5">
            <div className={nameStyle}>
                {name}
            </div>
            <div className="flex sm:justify-center sm:items-center gap-5">
                <DoneButton setIsDone={setIsDone} isDone={isDone} />
                <RemoveButton id={id}/>
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
