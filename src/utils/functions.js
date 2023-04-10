export const playAudio = (audioPlayer) => {
    audioPlayer.current.play()
}

export const convertPixlPopup = (val) => {
    let newKk = val / 15;
    return newKk + `vw`
}