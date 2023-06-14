import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/App.css';

const Login = () => {
    const [state, setState] = useState({
        username: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('https://express-t4.onrender.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        });

        console.log(response);

        if (response.ok) {
            navigate('/profile');
        } else {
            alert("Failed to log in. Please check your credentials and try again.");
        }
    }

    const handleInputChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div className="container mt-5">
            <div className="jumbotron mb-5">
                <h2 className="display-5 main-header">Login</h2>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="card p-4 mb-4">
                        <form onSubmit={handleFormSubmit}>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="email" className="form-control" name="username" required onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" name="password" required onChange={handleInputChange} />
                            </div>
                            <button type="submit" className="btn btn-primary">Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
