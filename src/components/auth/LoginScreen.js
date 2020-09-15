import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { setError, removeError } from '../actions/ui';
import { startGoogleLogin, startLoginEmailPassword } from '../actions/auth';

export const LoginScreen = () => {


    const dispatch = useDispatch();

    const { msgError, loading } = useSelector(state => state.ui);



    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            dispatch(startLoginEmailPassword(email, password));
        }
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }

    const isFormValid = () => {
        if (email.length === 0) {
            dispatch(setError('You need to put an email'));
            return false;
        }
        dispatch(removeError());
        return true;
    }
    return (
        <div className='container animate__animated animate__fadeIn animate__faster'>
            <form onSubmit={handleLogin} className="box">
                <div className="content">
                    <h1 className="auth__title">Login</h1>

                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        className="auth__input"
                        autoComplete="off"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handleInputChange}
                        name="password"
                        className="auth__input"
                    />

                    <button
                        className="btn-primary btn-block"
                        type="submit"
                        disabled={loading}
                    >
                        Login
            </button>

                    <div
                        className="auth__social-networks"
                        onClick={handleGoogleLogin}
                    >
                        <p>Login with social networks</p>
                        <div
                            className="google-btn"
                        >
                            <div className="google-icon-wrapper">
                                <div className="google-icon">
                                    <i className="fab fa-google" />
                                </div>

                            </div>
                            <p className="btn-text">
                                <b>Sign in with google</b>
                            </p>
                        </div>
                    </div>
                    <Link
                        className="link"
                        to="/auth/register"
                    >
                        Create new account
                </Link>
                    {
                        msgError && <div className="auth__alert-error animate__animated animate__fadeInDown">{msgError}</div>
                    }
                </div>
            </form>
        </div>
    )
}
