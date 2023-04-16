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
    editEmail: [],

    editPhone: [],

    editContactShow: false,

    statements: [{ value: "Write Down The statements of the company", edit: false, id: Math.random() }, { value: "Write Down The statements of the company", edit: false, id: Math.random() }],

    address: {
        floorNo: "75",
        area: "Chinmaya Nagar Stage 1",
        landmark: "Kilpauk",
        town: "Chennai",
        pincode: "600010"
    },

    tempaddress: {
        floorNo: "75",
        area: "Chinmaya Nagar Stage 1",
        landmark: "Kilpauk",
        town: "Chennai",
        pincode: "600010"
    },

    openAddressModal: false,

    HOP: "Monday To Friday - 9:00Am To 6:00Pm",

    openHOPModal: false,

    links: {
        website: "www.google.com",
        insta: "www.instagram.com",
        fb: "www.facebook.com",
        twit: "www.twitter.com"
    },

    templinks: {
        website: "www.google.com",
        insta: "www.instagram.com",
        fb: "www.facebook.com",
        twit: "www.twitter.com"
    },

    openLinksModal: false,

    editStatement: "",

    openStatementModal: false
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
            state.showContactModal = action.payload.bool
        },
        setEditEmail: (state, action) => {
            state.editEmail = action.payload
        },

        setEditPhone: (state, action) => {
            state.editPhone = action.payload
        },

        setEditContactShow: (state, action) => {
            state.editContactShow = action.payload
        },

        setStatements: (state, action) => {
            state.statements = action.payload.statements;
        },

        setAddress: (state, action) => {
            state.address = action.payload;
        },

        setTempAddress: (state, action) => {
            state.tempaddress = action.payload;
        },

        setOpenAddressModal: (state, action) => {
            state.openAddressModal = action.payload;
        },

        setHOP: (state, action) => {
            state.HOP = action.payload;
        },

        setOpenHOPModal: (state, action) => {
            state.openHOPModal = action.payload;
        },

        setLinks: (state, action) => {
            state.links = action.payload;
        },

        setTempLinks: (state, action) => {
            state.templinks = action.payload;
        },

        setOpenLinksModal: (state, action) => {
            state.openLinksModal = action.payload;
        },

        setEditStatement: (state, action) => {
            state.editStatement = action.payload;
        },

        setOpenStatementModal: (state, action) => {
            state.openStatementModal = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    setEditContact,
    setDataObject,
    setShowContactModal,
    setEditEmail,
    setEditPhone,
    setEditContactShow,
    setStatements,
    setAddress,
    setTempAddress,
    setOpenAddressModal,
    setHOP,
    setOpenHOPModal,
    setLinks,
    setTempLinks,
    setOpenLinksModal,
    setEditStatement,
    setOpenStatementModal
} = counterSlice.actions

export default counterSlice.reducer