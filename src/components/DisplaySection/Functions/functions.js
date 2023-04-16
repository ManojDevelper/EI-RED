import { store } from "../../../redux/store";
import { openNotificationWithIcon } from "../../../utils/functions";
import {
    setEditContact,
    setDataObject,
    setEditEmail,
    setEditPhone,
    setEditContactShow
} from '../../../redux/reducer';

export const addNewContactCardFun = (state) => {
    const tempArr = [...state.editContact];
    tempArr.push({
        team: "",
        email: [],
        phone: []
    });
    setItemFun(tempArr[tempArr.length - 1], tempArr.length - 1)
}

export const setItemFun = (item, index) => {
    const tempArr = { ...item };
    store.dispatch(setEditEmail([...tempArr.email]))
    store.dispatch(setEditPhone([...tempArr.phone]));
    store.dispatch(setEditContactShow(true));
    store.dispatch(setDataObject({
        object: {
            ...tempArr,
            id: index
        }
    }));
}


export const editNameFun = (value, state) => {
    const tempObj = JSON.parse(JSON.stringify(state.dataObject));
    store.dispatch(setDataObject({
        object: { ...tempObj, team: value }
    }));
}

export const emailEditFun = (value, index, state) => {
    const tempArr = [...state.editEmail];
    tempArr[index] = value;
    store.dispatch(setEditEmail(tempArr));
}

export const phoneEditFun = (value, index, state) => {
    const tempArr = [...state.editPhone];
    tempArr[index] = value;
    store.dispatch(setEditPhone(tempArr));
}

export const addEmailContainer = (state) => {
    const tempArr = [...state.editEmail];
    tempArr.push("");
    store.dispatch(setEditEmail(tempArr));
}

export const addPhoneContainer = (state) => {
    const tempArr = [...state.editPhone];
    tempArr.push("");
    store.dispatch(setEditPhone(tempArr));
}

export const saveContactFun = (state) => {
    const tempArr = [...state.editContact];
    tempArr[state.dataObject.id] = {
        team: state.dataObject.team,
        email: state.editEmail.filter((item) => item !== ""),
        phone: state.editPhone.filter((item) => item !== "")
    };
    store.dispatch(setEditContact({
        arr: tempArr
    }));
    openNotificationWithIcon("success", "Contact saved successfully");
    store.dispatch(setEditContactShow(false));
}

export const deleteCardFun = (index, state) => {
    const tempArr = [...state.editContact];
    const filterArr = tempArr.filter((_item, ind) => ind !== index);
    openNotificationWithIcon("success", "Deleted successfully");
    store.dispatch(setEditContact({
        arr: filterArr
    }));
}
