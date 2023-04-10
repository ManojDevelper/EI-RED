import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    editContact: [
        {
            team: "Sales Team",
            email: ["salesteam@br.in", "salesteam2@br.in"],
            phone: ["9494978555", "94949785553"]
        },
        {
            team: "Marketing Lead",
            email: ["salesteam@br.in", "salesteam2@br.in"],
            phone: ["9494978555", "94949785553"]
        },
    ],
    dataObject: {
        team: "Sales Team",
        id: "",
        email: ["salesteam@br.in", "salesteam2@br.in"],
        phone: ["9494978555", "94949785553"]
    },
    showContactModal: false,
    editEmail: ["salesteam@br.in", "salesteam2@br.in"],

    editPhone: [],

    statements: [{ value: "Write Down The statements of the company", edit: false, id: Math.random() }, { value: "Write Down The statements of the company", edit: false, id: Math.random() }],
}

export const counterSlice = createSlice({
    name: 'compEditor',
    initialState,
    reducers: {
        setEditContact: (state, action) => {
            state.editContact = action.payload.arr
        },
        setDataObject: (state, action) => {
            state.dataObject = action.payload.object
        },
        setShowContactModal: (state, action) => {
            console.log("action.payload.bool", action.payload.bool)
            state.showContactModal = action.payload.bool
        },
        setEditEmail: (state, action) => {
            state.editEmail = action.payload.email
        },

        setEditPhone: (state, action) => {
            state.editPhone = action.payload.phone
        },

        setStatements: (state, action) => {
            state.statements = action.payload.statements;
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    setEditContact,
    setDataObject,
    setShowContactModal,
    setEditEmail,
    setEditPhone,
    setStatements
} = counterSlice.actions

export default counterSlice.reducer