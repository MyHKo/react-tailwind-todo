function NameInput() {
    return (
        <div className="flex flex-row justify-between mt-5 mb-5 h-13">
            <div className="flex items-center rounded-lg p-2 bg-gray-700">
                <input className="text-gray-200  text-2xl h-full w-190 focus:outline-none"/>
            </div>
            <button className="text-gray-200 text-xl font-bold rounded-lg h-full w-40 bg-green-500 hover:bg-green-400 cursor-pointer">Add</button>
        </div>
    )
}

export default NameInput
