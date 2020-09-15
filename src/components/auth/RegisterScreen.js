import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { setError, removeError } from '../actions/ui';
import { startRegisterWithEmailPasswordName } from '../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const state = useSelector(state => state);
    const { msgError } = state.ui;

    const [formValue, handleForm] = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formValue;

    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
        }

    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError('Name is equired'));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Email is not valid'));
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError('Password should be at least 6 characters and match each other'));
            return false;
        }
        dispatch(removeError());
        return true;
    }

    return (
        <div className='container animate__animated animate__fadeIn animate__faster'>
            <form onSubmit={handleRegister} className="box">
                <div className = "content">
                    <h1 className="auth__title">Register</h1>

                    

                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={handleForm}
                        className="auth__input"
                        autoComplete="off"
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={handleForm}
                        className="auth__input"
                        autoComplete="off"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleForm}
                        className="auth__input"
                    />
                    <input
                        type="password"
                        placeholder="Confirm password"
                        name="password2"
                        value={password2}
                        onChange={handleForm}
                        className="auth__input"
                    />

                    <button
                        className="btn-primary btn-block"
                        type="submit"

                    >
                        Register
                    </button>
                    <Link
                        className="link"
                        to="/auth/login"
                    >
                        Allready registered?
                    </Link>

                    {
                        msgError && <div className="auth__alert-error animate__animated animate__fadeInDown">{msgError}</div>
                    }
                </div>
            </form>
        </div>
    )
}
