import {useState} from "react";

import { FaPen } from "react-icons/fa";
import {useDispatch} from "react-redux";
import {addTodo, updateSearchTerm} from "../redux/actions.js";
import {BsSearch} from "react-icons/bs";

const Todo = () => {

    const dispatch = useDispatch()

    const handleAddTodo = (text) => {
        dispatch(addTodo(text))
    }

    const [newTodoText, setNewTodoText] = useState("")
    const [searchTerm, setSearchTerm] = useState("")

    const handleAddTodoClick = () => {
        if (newTodoText.trim() !== '') {
            handleAddTodo(newTodoText.trim())
            setNewTodoText('')
        }

    }

    const handleSearchChange = () => {
        setSearchTerm()
        dispatch(updateSearchTerm)
    }

    return (
        <div className={"max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded"}>
            <h2 className={"mt-3 mb-6 text-2xl font-bold text-center uppercase"}>PERSONAL TODO APP</h2>

            {/* input text & btn*/}
            <div className={"flex items-center mb-4"}>
                <input value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} type="text" name={"addTodoInput"} id={"addTodoInput"} placeholder={"Add Todo"}
                className={"flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"}
                />
                <button className={"ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none" } onClick={handleAddTodoClick}><FaPen></FaPen></button>
            </div>

            {/* filter and search */}
            <div>
                <div className={"flex items-center mb-4"}>
                    <input value={searchTerm} onChange={(e) => handleSearchChange(e.target.value)} type="text"
                           name={"addTodoInput"} id={"addTodoInput"} placeholder={"search"}
                           className={"flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"}
                    />
                    <button className={"ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"}><BsSearch></BsSearch></button>
                </div>
            </div>

        </div>
    )
}
export default Todo