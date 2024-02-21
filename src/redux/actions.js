import {add_todo, toggle_todo, remove_todo, mark_completed, mark_incomplete,filter_todos,mark_all_completed, update_search_term} from "./actionTypes.js";

    export const addTodo = (text) => ({
    type: add_todo,
    payload: {text}
})
    export const toggleTodo = (id) => ({
    type: toggle_todo,
    payload: {id}
})
    export const removeTodo = (id) => ({
    type: remove_todo,
    payload: {id}
})
    export const markCompleted = (id) => ({
    type: mark_completed,
    payload: {id}
})
    export const markIncomplete = (id) => ({
    type: mark_incomplete,
    payload: {id}
})
    export const filterTodos = (filter) => ({
    type: filter_todos,
    payload: {filter}
})
    export const markAllCompleted = () => ({
    type: mark_all_completed
})
    export const updateSearchTerm = (searchTerm) => ({
    type: update_search_term,
    payload: {searchTerm}
})








