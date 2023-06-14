import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/App.css';
import { Link } from 'react-router-dom';

const ProfileList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://express-t4.onrender.com/api/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="container mt-5">
            <div className="jumbotron mb-5">
                <h2 className="display-5 main-header">Profile Listing</h2>
            </div>
            <div className="row">
                {users.map(user => (
                    <div className="col-lg-12" key={user._id}>
                        <div className="card p-4 mb-4 d-flex flex-row align-items-center">
                            <img src={user.picture} className="card-img-top" alt={user.name} style={{width: '50px', height: '50px'}} />
                            <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <p className="card-text">{user.email}</p>
                                <p className="card-text">{user.phone}</p>
                                <Link to={`/profile/${user._id}`} className="btn btn-primary">View Profile</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProfileList;
