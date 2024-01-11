const myInitialState = {
    arr: [
        { id: 1, name: "אני מאמין", album: "אמונה", duration: 2.3, src: "", albumSrc: "" },
        { id: 2, name: "אם תעירו", album: "אמונה", duration: 5.3, src: "", albumSrc: "" },
        { id: 3, name: "משיח משיח", album: "אמונה", duration: 2.3, src: "", albumSrc: "" },
    ],
    selectedSong: null,
    selectedSongForEdit: null
}

export const songReducer = (state = myInitialState, action) => {

    switch (action.type) {

        case "ADD_SONG":
            return {
                ...state,
                arr: [...state.arr, action.payload]
            }
        case "SELECT_SONG":
            return {
                selectedSong: action.song,
                selectedSongForEdit: state.selectedSongForEdit,
                arr: state.arr
            }
        case "SELECT_SONG_FOR_EDIT":
            return {
                arr: state.arr,
                selectedSong: state.selectedSong,
                selectedSongForEdit: action.payload
            }
        case "DELETE_SONG":
            return {
                selectedSong: state.selectedSong?.id != action.payload ? state.selectedSong : null,
                selectedSong: state.selectedSongForEdit?.id != action.payload ? state.selectedSongForEdit : null,
                arr: state.arr.filter(item => item.id != action.payload)
            }
        case "SAVE_EDITED_SONG":

            let copy = state.arr.map(item => {
                if (item.id !== action.payload.id)
                    return item;
                return action.payload;
            })

            return {
                selectedSong: state.selectedSong,
                selectedSongForEdit: null,
                arr: copy
            }

        default: return state;
    }


}