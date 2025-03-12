function Task() {
    return (
        <div className="flex flex-row justify-between gap-5 mt-5 mb-5 h-13">
            <div className="flex text-gray-200 text-2xl w-full items-center rounded-lg p-2 bg-gray-700">
                Task Name
            </div>
            <button className="text-gray-200 text-xl font-bold rounded-lg h-full w-30 bg-blue-500 hover:bg-blue-400 cursor-pointer">
                Done
            </button>
            <button className="text-gray-200 text-xl font-bold rounded-lg h-full w-40 bg-red-500 hover:bg-red-400 cursor-pointer">
                Remove
            </button>
        </div>
    )
}

export default Task