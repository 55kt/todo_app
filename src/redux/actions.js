import {add_todo, toggle_todo, remove_todo, mark_completed, mark_incomplete,filter_todos,mark_all_completed, update_search_term} from "./actionTypes.js";

export const add_todo = (text) => ({
    type: add_todo,
    payload: {text}
})

export const toggle_todo = (id) => ({
    type: toggle_todo,
    payload: {id}
})

export const remove_todo = (id) => ({
    type: remove_todo,
    payload: {id}
})

export const mark_completed = (id) => ({
    type: mark_completed,
    payload: {id}
})

export const mark_incomplete = (id) => ({
    type: mark_incomplete,
    payload: {id}
})

export const filter_todos = (filter) => ({
    type: filter_todos,
    payload: {filter}
})

export const mark_all_completed = () => ({
    type: mark_all_completed
})

export const update_search_term = (searchTerm) => ({
    type: update_search_term,
    payload: {searchTerm}
})


