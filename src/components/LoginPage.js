import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;
        if (!passwordRegex.test(password)) {
            setError('Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.');
            return;
        }
        setIsLoggedIn(true);
    };
    if (isLoggedIn) {

        navigate('/dashboard');

    }

    return (
        <div>


            <form onSubmit={handleLogin}>
                <div>
                    <h1>Login</h1>
                    <label>Username (Email):</label>
                    <input
                        type="email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <button type="submit">Login</button>

            </form>
        </div>
    );
};

export default LoginPage;