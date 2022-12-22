import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Counter'
import filterReducer from './Filter'
export default configureStore({
    reducer: {
        counter: counterReducer,
        filter: filterReducer
    }
})