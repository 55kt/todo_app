import './App.css'

import Todo from "./components/Todo.jsx";
import {Provider} from "react-redux";

function App() {

  return (
        <Provider>
            <Todo/>
        </Provider>
  )

}

export default App
