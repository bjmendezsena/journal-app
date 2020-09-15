import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { activeNote, startdeleting } from '../actions/notes';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const dispatch = useDispatch();
    const { active: note } = useSelector(state => state.notes);
    const [formValue, handleInputChange, reset] = useForm(note);
    const { title, body , id} = formValue;

    const activeId = useRef(note.id);
    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id;
        }
    }, [note, reset]);

    useEffect(() => {
        dispatch(activeNote(formValue.id, { ...formValue }));
    }, [formValue, dispatch]);

    const handleDelete = () => {
        dispatch(startdeleting(id));
    }

    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name='title'
                    value={title}
                    onChange={handleInputChange}
                />

                <textarea
                    placeholder="What happend today"
                    className="notes__textarea"
                    value={body}
                    name='body'
                    onChange={handleInputChange}
                >

                </textarea>

                {
                    (note.url)
                    &&
                    (<div className="notes__image">
                        <img
                        className = "animate__animated animate__fadeInDown"
                            src={note.url}
                            alt="imagen"
                        />
                    </div>)
                }
            </div>

            <button
                className="btn animate__animated animate__fadeInUp btn-danger"
                onClick = {handleDelete}
            >
            Delete
            </button>
        </div>
    )
}
