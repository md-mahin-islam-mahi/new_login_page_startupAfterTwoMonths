import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [message, setMessage] = useState('');
    const [strong, setStrong] = useState('');

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 8 && !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password) || !/[@#$%^&+=]/.test(password)) {
            setMessage('Password is not strong enough, use minimum 8 characters and variation of capital letters, small letters, numbers and special characters.')
            setStrong('')
        } else {
            setStrong('Password is strong');
            setMessage('')
        }
    }

    return (
        <div>
            <form onSubmit={handleLogin} className='form' action="">
                <div className='card'>
                    <h2>Sign Up</h2>
                    <div className='field'>
                        <label className='input-text' htmlFor="">Name</label>
                        <input className='input-field' name='name' type="text" placeholder='John Doe' />
                    </div>

                    <div className='field other-field'>
                        <label className='input-text' htmlFor="">Email</label>
                        <input className='input-field' name='email' type="email" placeholder='***@***.com' />
                    </div>

                    <div className='field other-field'>
                        <label className='input-text' htmlFor="">Password</label>
                        <input className='input-field' name='password' type="password" placeholder='......' />
                        <span className='not-strong'>
                            {message}
                        </span>

                        <span className='strong'>
                            {strong}
                        </span>
                    </div>

                    <input className='login-btn' type="submit" value="Create Account" />
                    <div className='forgot'>
                    </div>
                    <p>Already have an account? <span>
                        <Link to="/login">Login</Link>
                    </span>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;