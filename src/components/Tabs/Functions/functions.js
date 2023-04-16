import { store } from "../../../redux/store";
import {
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
} from "../../../redux/reducer";
import { openNotificationWithIcon } from "../../../utils/functions";

export const editHop = () => {
    store.dispatch(setHOP("Monday To Friday - 9:00Am To 6:00Pm"));
    store.dispatch(setOpenHOPModal(true));
}

// Set edited data function
export const setAddressFun = (editState) => {
    store.dispatch(setTempAddress({ ...editState.address }));
    store.dispatch(setOpenAddressModal(true));
};

// Save edited data function
export const editAddressSetFun = (value, name, editState) => {
    store.dispatch(setTempAddress({
        ...editState.tempaddress,
        [name]: value
    }));
};

// Up date address with edited address
export const saveEditedAddress = (editState) => {
    store.dispatch(setAddress({ ...editState.tempaddress }));
    store.dispatch(setOpenAddressModal(false));
    openNotificationWithIcon("success", "Address saved successfully");
};


// Initial links set function
export const setLinksFun = (editState) => {
    store.dispatch(setTempLinks({ ...editState.links }));
    store.dispatch(setOpenLinksModal(true));
}

// Save edited data function
export const editLinksSetFun = (value, name, editState) => {
    store.dispatch(setTempLinks({
        ...editState.templinks,
        [name]: value
    }));
};

// Up date links with edited links
export const saveEditedLinks = (editState) => {
    store.dispatch(setLinks({ ...editState.templinks }));
    store.dispatch(setOpenLinksModal(false));
    openNotificationWithIcon("success", "Links Updated successfully");
};

// edit statements
export const editStatementsFun = (value, index, editState) => {
    const tempArr = JSON.parse(JSON.stringify(editState.statements));
    tempArr[index]["edit"] = true;
    store.dispatch(setEditStatement(value));
    store.dispatch(setStatements({
        statements: tempArr
    }));
}

export const saveEditedCardFun = (value, index, editState) => {
    const tempArr = JSON.parse(JSON.stringify(editState.statements));
    tempArr[index]["value"] = value;
    tempArr[index]["edit"] = false;
    store.dispatch(setStatements({
        statements: tempArr
    }));
}

export const deleteEditCardFun = (index, editState) => {
    const tempArr = JSON.parse(JSON.stringify(editState.statements));
    store.dispatch(setStatements({
        statements: tempArr?.filter((itm) => itm.id !== index)
    }));
}

export const addNewStatementFun = (editState) => {
    const tempArr = JSON.parse(JSON.stringify(editState.statements));
    tempArr.push({ value: "", edit: true, id: Math.random() });
    store.dispatch(setStatements({
        statements: tempArr
    }));
}

export const saveEditedStatementsFun = (editState) => {
    const tempArr = JSON.parse(JSON.stringify(editState.statements));
    store.dispatch(setOpenStatementModal(false));
    store.dispatch(setStatements({
        statements: tempArr?.filter((itm) => itm.value !== "")
    }));
    openNotificationWithIcon("success", "Statements Added successfully");
}