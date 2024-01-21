import React, { useState, FormEvent } from 'react';
import { loginAPICall } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

const LoginComponent: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigator = useNavigate();

    const handleLoginForm = (e: FormEvent) => {
        e.preventDefault();

        loginAPICall(username, password)
            .then((res) => {
                console.log(res.data);
                navigator('/tasks');
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className='container'>
            <br />
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div className='card'>
                        <div className='card-header'>
                            <h2 className='text-center'>Login Form</h2>
                        </div>
                        <div className='card-body'>
                            <form>
                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'>Username/Email</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='username'
                                            className='form-control'
                                            placeholder='Enter Username or Email'
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'>Password</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='password'
                                            name='password'
                                            className='form-control'
                                            placeholder='Enter Password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className='form-group mb-3'>
                                    <button className='btn btn-primary' onClick={(e) => handleLoginForm(e)}>
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;
