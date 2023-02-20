import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div>
            <form className='form' action="">
                <div className='card'>
                    <h2>Login</h2>
                    <div className='field'>
                        <label className='input-text' htmlFor="">Email</label>
                        <input className='input-field' type="email" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;