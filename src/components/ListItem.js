import { useDispatch } from "react-redux";
import { deleteSong, selectSong, selectSongForEdit } from "../store/actions/song";

const ListItem = ({ one }) => {

    let xxxDispatch = useDispatch();

    return (<div className="one-song">
        <h3>{one.name}</h3>
        
        <input type="button" onClick={() => { xxxDispatch(deleteSong(one.id)) }} value="מחק" />
        <input type="button" onClick={() => { xxxDispatch(selectSongForEdit(one)) }} value="עריכה" />
        <input type="button" onClick={() => { xxxDispatch(selectSong(one)) }} value="הצגת פרטים" />

    </div>);
}

export default ListItem;