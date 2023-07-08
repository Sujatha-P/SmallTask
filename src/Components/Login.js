import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Perform login authentication logic here
        // For simplicity, we will just check if the username and password are not empty
        if (username !== '' && password !== '') {
            setLoggedIn(true);
            onLogin(); // Callback to parent component to indicate successful login
        }
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setUsername('');
        setPassword('');
    };

    if (loggedIn) {
        return (
            <div>
                <h2>Welcome, {username}!</h2>
                <button onClick={handleLogout}>Logout</button>
            </div>
        );
    }

    return (
        <div>
            <form className='w-25 shadow p-3 m-2 border m-auto'>
                <h2 className='text-center'>Login</h2>
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        className='form-control'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className='mt-3'>
                    <input
                        type="password-"
                        placeholder="Password"
                        value={password}
                        className='form-control'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button onClick={handleLogin} className='mt-3 btn btn-outline-success'>Login</button>
            </form>
        </div>
    );
};

export default Login;
