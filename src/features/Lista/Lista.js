import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    api:[],
}

export const ListaSlice = createSlice({
    name: 'lista',
    initialState,
    reducers: {
         listar: (state, action) => {
           state.api = action.payload
         },
    }
})

export const { listar } = ListaSlice.actions
export default ListaSlice.reducer

export const fetchData = () => (dispatch) => {
    const baseUrl = 'https://api.datos.gob.mx/v1/condiciones-atmosfericas';
    axios.get(baseUrl)
    .then((response)=> {
       dispatch(listar(response.data.results))
    })
    .catch((error) => console.log('error en api :' + error))
}

