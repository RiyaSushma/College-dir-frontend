import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const roles = [
    { value: 'student', label: 'Student' },
    { value: 'faculty', label: 'Faculty' }, 
    { value: 'administrator', label: 'Administrator' }
];

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student');
    const [error, setError] = useState('');
    const history = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8081/login', { username, password });
            if (response.status === 200) {
              history.push('/student');
            }
          } catch (error) {
            setError('Invalid username or password'); 
          }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="role">Role</label>
                    <select
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        {
                            roles.map(role => (
                                <option key={role.value} value={role.value}>{role.label}</option>
                            ))
                        }
                    </select> 
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;