import Title from "./components/Title";
import NameInput from "./components/NameInput";
import Task from "./components/Task";

function App() {

  return (
      <div className={"flex items-center justify-center h-screen "}>
        <div className={"bg-gray-900 rounded-lg p-4 h-150 w-250"}>
          <Title />
          <NameInput />
          <Task />
        </div>
      </div>
  )
}

export default App
