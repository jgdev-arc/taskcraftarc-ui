import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { isUserLoggedIn, logout } from '../services/AuthService';

const HeaderComponent: React.FC = () => {
    const isAuth: boolean = isUserLoggedIn();

    const navigator = useNavigate()

    const handleLogout = () => {
        logout();
        navigator("/login")
    };

    return (
        <div>
            <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <div>
                        <a href='http://localhost:3000' className='navbar-brand'>
                            TaskCraftArc
                        </a>
                    </div>
                    <div className='collapse navbar-collapse'>
                        <ul className='navbar-nav'>
                            {isAuth && (
                                <li className='nav-item'>
                                    <NavLink to='/tasks' className='nav-link'>
                                        Tasks
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </div>
                    <ul className='navbar-nav'>
                        {!isAuth && (
                            <li className='nav-item'>
                                <NavLink to='/register' className='nav-link'>
                                    Register
                                </NavLink>
                            </li>
                        )}
                        {!isAuth && (
                            <li className='nav-item'>
                                <NavLink to='/login' className='nav-link'>
                                    Login
                                </NavLink>
                            </li>
                        )}
                        {isAuth && (
                            <li className='nav-item'>
                                <NavLink to='/login' className='nav-link' onClick={handleLogout}>
                                    Logout
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default HeaderComponent;
