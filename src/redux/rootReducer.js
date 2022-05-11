import {combineReducers} from 'redux'
import { todoReducer } from './todoList/todo.reducer'

export const rootReducer = combineReducers({
    todo: todoReducer
})