import React, { useState } from 'react';
import { useNavigate , Link} from 'react-router-dom';
import '../login/login.css'; // Import your CSS file for styling

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simple validation
        if (!email) {
            setErrors(prevErrors => ({
                ...prevErrors,
                email: 'Email is required'
            }));
            return;
        }

        if (!password) {
            setErrors(prevErrors => ({
                ...prevErrors,
                password: 'Password is required'
            }));
            return;
        }

        try {
            debugger
            // API request to authenticate user
            const response = await fetch('http://localhost:1337/api/authtications', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: {
                        email: '',
                        password: ''
                    }
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                // Handle non-successful response
                throw new Error(data.message || 'Failed to log in');
            }

            // Clear form fields after successful login
            setEmail('');
            setPassword('');
            setErrors({});

            navigate('/Chat');

        } catch (error) {
            console.error('Error logging in:', error.message);
            // Handle error, e.g., show error message to the user
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="error-message">{errors.email}</p>}

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p className="error-message">{errors.password}</p>}

                <button type="submit">Login</button>
                <Link to="/sign-up">Sign Up</Link>
            </form>
        </div>
    );
}

export default LoginPage;
