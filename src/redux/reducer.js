import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    editContact: [
        {
            team: "Sales Team",
            email: ["salesteam@br.in", "salesteam2@br.in"],
            phone: ["9494978555", "9493815943"]
        },
        {
            team: "Marketing Lead",
            email: ["salesteam@br.in", "salesteam2@br.in"],
            phone: ["9494978555", "9493815943"]
        },
    ],
    dataObject: {
        team: "",
        email: ["salesteam@br.in", "salesteam2@br.in"],
        phone: ["9494978555", "9493815943"]
    },
}

export const counterSlice = createSlice({
    name: 'compEditor',
    initialState,
    reducers: {
        editContact: (state, action) => {
            state.editContact = action.payload.arr
        },
        setDataObject: (state, action) => {
            state.dataObject = action.payload.object
        },
    },
})

// Action creators are generated for each case reducer function
export const { editContact, setDataObject } = counterSlice.actions

export default counterSlice.reducer