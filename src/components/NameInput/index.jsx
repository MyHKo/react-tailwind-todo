import {useContext, useRef} from "react"
import {ListContext} from '/src/context/ListContext/ListContext.js'

function NameInput() {
    const [, addTask] = useContext(ListContext)
    const input = useRef(null)

    return (
        <div className="flex flex-row justify-between gap-5 mt-5 mb-5 h-13">
            <div className="flex items-center rounded-lg p-2 w-full bg-gray-700">
                <input className="text-gray-200 text-2xl h-full w-full focus:outline-none" ref={input}/>
            </div>
            <button
                className="text-gray-200 text-xl font-bold rounded-lg h-full w-40 bg-green-500 hover:bg-green-400 active:bg-green-500 cursor-pointer"
                onClick={() => {
                    if(input.current.value !== "") {
                        addTask(input.current.value)
                        input.current.value = ""
                    }
                }}
            >
                Add
            </button>
        </div>
    )
}

export default NameInput
