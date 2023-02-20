import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div>
            <form className='form' action="">
                <div className='card'>
                    <h2>Login</h2>
                    <div className='field'>
                        <label className='input-text' htmlFor="">Email</label>
                        <input className='input-field' type="email" placeholder='***@***.com' />
                    </div>

                    <div className='field' id='password-field'>
                        <label className='input-text' htmlFor="">Password</label>
                        <input className='input-field' type="password" placeholder='......' />
                    </div>

                    <input className='login-btn' type="button" value="Login" />
                    <div className='forgot'>
                        <p>Forgot password? <span className='click'>
                            Click Here
                        </span></p>
                    </div>
                    <p>Don't have an account? <span>
                            <Link to="/signup">Sign Up</Link>
                        </span>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;