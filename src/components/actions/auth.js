import Swal from 'sweetalert2'
import { types } from "../../types/types";
import {firebase, googleAuthProvider} from '../../firebase/firebase-config';
import { startLogin, finishLogin } from "./ui";
import { notesLogout } from './notes';


export const startLoginEmailPassword = (email, password) => {
    return (dispatch) =>{

        dispatch(startLogin());
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({user})  => {
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLogin());
            }).catch(err => {
                dispatch(finishLogin());
                Swal.fire('Error', err.message, 'error');
            });
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
                .then(({user}) =>{
                    dispatch(login(user.uid, user.displayName))
                })
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async ({user}) =>{
            await user.updateProfile({displayName: name});
            dispatch(login(user.uid, user.displayName))
        }).catch(err => Swal.fire('Error', err.message, 'error'));
    }
}

export const login = (uid, displayName) => ({
        type: types.login,
        payload: {
            uid,
            displayName
        }
});

export const startLogout = () => {
    return async (dispatch) =>{
        await firebase.auth().signOut();
        dispatch(logout());
        dispatch(notesLogout());
    }
}

export const logout = () => ({
    type: types.logout
})



