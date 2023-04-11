import { notification } from "antd";

export const playAudio = (audioPlayer) => {
    audioPlayer.current.play()
}

export const convertPixlPopup = (val) => {
    let newKk = val / 15;
    return newKk + `vw`
}

// common function for custom notification
export const openNotificationWithIcon = (type, data) => {
    notification[type]({
        message: data,
        placement: "top",
    })
}