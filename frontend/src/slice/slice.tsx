import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    isLoggedIn : false,
    jwt: "",
    role: "",
    email: ""
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login: (state, data) => {
            //console.log(data.payload)
            state.isLoggedIn = true,
            state.jwt = data.payload.jwt,
            state.role = data.payload.role,
            state.email = data.payload.email
        }
    }
})

export const {login} = authSlice.actions
export default authSlice.reducer