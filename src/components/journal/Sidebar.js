import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../actions/auth';
import { startNewNote } from '../actions/notes';
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
    const dispatch = useDispatch();

    const { name } = useSelector(state => state.auth)


    const handleLogout = () => {
        dispatch(startLogout());
    }

    const handleAddNew = () =>{
        dispatch(startNewNote());
    }

    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5 animate__animated animate__slideInDown">
                    <i className="far fa-moon animate__animated animate__slideInLeft" />
                    <span className = "animate__animated animate__slideInRight"> {name}</span>
                </h3>
                <button
                    className="btn animate__animated animate__rollIn"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
            <div
                className="journal__new-entry"
                onClick = {handleAddNew}
            >
                <i className="far fa-calendar-plus fa-5x animate__animated animate__jackInTheBox" />
                <p className="m-5 animate__animated animate__rollIn">New entry</p>
            </div>

            <JournalEntries />
        </aside>
    )
}
