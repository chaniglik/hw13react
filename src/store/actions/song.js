
export const selectSong = (song) => {
    return {
        type: "SELECT_SONG",
        song: song
    }
}

export const addSong = (song) => {
    return {
        type: "ADD_SONG",
        payload: song
    }
}

export const deleteSong = (songId) => {
    return {
        type: "DELETE_SONG",
        payload: songId
    }
}

export const selectSongForEdit = (song) => {
    return {
        type: "SELECT_SONG_FOR_EDIT",
        payload: song
    }
}

export const saveEditedSong = (song) => {
    return {
        type: "SAVE_EDITED_SONG",
        payload: song
    }
}