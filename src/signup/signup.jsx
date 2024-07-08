import React, { useState } from 'react';
import { useNavigate ,Link } from 'react-router-dom';
import '../signup/signup.css'; // Assuming you have a CSS file for styling

const SignUpPage = () => {
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
            // Example API request to register user
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
                throw new Error(data.message || 'Failed to sign up');
            }

            // Clear form fields after successful submission
            setEmail('');
            setPassword('');
            setErrors({});

            // Redirect to login page after successful registration
            navigate('/login');
        } catch (error) {
            console.error('Error signing up:', error.message);
            // Handle error, e.g., show error message to the user
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
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

                <button type="submit">Sign Up</button>
                <Link to="/login">Login</Link>
            </form>
        </div>
    );
}

export default SignUpPage;
