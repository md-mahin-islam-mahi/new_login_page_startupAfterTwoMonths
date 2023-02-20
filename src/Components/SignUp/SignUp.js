import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <form className='form' action="">
                <div className='card'>
                    <h2>Sign Up</h2>
                    <div className='field'>
                        <label className='input-text' htmlFor="">Name</label>
                        <input className='input-field' type="text" placeholder='John Doe' />
                    </div>

                    <div className='field other-field'>
                        <label className='input-text' htmlFor="">Email</label>
                        <input className='input-field' type="email" placeholder='***@***.com' />
                    </div>

                    <div className='field other-field'>
                        <label className='input-text' htmlFor="">Password</label>
                        <input className='input-field' type="password" placeholder='......' />
                    </div>

                    <input className='login-btn' type="button" value="Create Account" />
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