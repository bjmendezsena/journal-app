import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../actions/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch();

    const { active } = useSelector(state => state.notes);
    const noteDate = moment(active.date);
    const dataString = noteDate.format('MMMM Do YYYY')

    const handleSave = () => {
        dispatch(startSaveNote(active));
    }
    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if(file){
            dispatch(startUploading(file));
        }
    }
    return (
        <div className="notes__appbar">
            <span>{dataString}</span>

            <input
                id="fileSelector"
                type="file"
                name = "file"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <div>
                <button
                    className="btn animate__animated animate__rollIn"
                    onClick={handlePictureClick}
                >
                    Picture
                </button>

                <button className="btn animate__animated animate__rollIn" onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    )
}
