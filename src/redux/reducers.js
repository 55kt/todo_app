import {add_todo, toggle_todo, remove_todo, mark_completed, mark_incomplete,
    filter_todos, update_search_term, mark_all_completed} from "./actionTypes.js";

const initialState = {
    todos: [],
    filter: 'ALL',
    searchTerm: ''
}

const todoReducer = (state = initialState, action) => {
    switch (action.types) {
        case add_todo:
            return {
                todos: [...state.todos, {text: action.payload.text, completed: false}],
                filter: state.filter,
                searchTerm:  state.searchTerm
            }

        case toggle_todo:
            return {
                todos: state.todos.map((todo, index) =>
                    index === action.payload.id ? {...todo,completed: !todo.completed} : todo),
                filter: state.filter,
                searchTerm: state.searchTerm

            }

        case remove_todo:
            return {
                todos: state.todos.filter((todo, index) =>
                    index !== action.payload.id),
                filter: state.filter,
                searchTerm: state.searchTerm

            }

        case mark_completed:
            return {
                todos: state.todos.map((todo, index) =>
                    index === action.payload.id ? {...todo,completed: true} : todo),
                filter: state.filter,
                searchTerm: state.searchTerm
            }

        case mark_incomplete:
            return {
                todos: state.todos.map((todo, index) =>
                    index === action.payload.id ? {...todo,completed: false} : todo),
                filter: state.filter,
                searchTerm: state.searchTerm
            }

        case filter_todos:
            return {
                todos: state.todos,
                filter: action.payload.filter,
                searchTerm: state.searchTerm
            }

        case update_search_term:
            return {
                todos: state.todos,
                filter: state.filter,
                searchTerm: action.payload.searchTerm
            }

        case mark_all_completed:
            return {
                todos: state.todos.map((todo) => ({...todo,completed: true})),
                filter: state.filter,
                searchTerm: state.searchTerm
            }

        default:
            return state
    }
}

export default todoReducer()