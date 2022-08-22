import {configureStore} from '@reduxjs/toolkit'
import  listaReducer from '../features/Lista/Lista'

export const store = configureStore({
    reducer: {
        lista: listaReducer,
    },
})






