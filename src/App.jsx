import Title from "/src/components/Title"
import NameInput from "/src/components/NameInput"
import Task from "/src/components/Task"
import {useContext} from "react"
import {ListContext} from "/src/context/ListContext/ListContext.js"

function App() {
    const [list] = useContext(ListContext)

    const taskList = list.map((task) => (
        <Task key={task.id} id={task.id} name={task.name}/>
    ))

  return (
      <div className={"flex items-center justify-center h-screen "}>
        <div className={"bg-gray-900 rounded-lg p-4 h-150 w-250"}>
          <Title />
          <NameInput />
          {taskList}
        </div>
      </div>
  )
}

export default App
