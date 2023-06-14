import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';

const ProfileList = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://express-t4.onrender.com/api/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(err => console.error(err));
    }, []);

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container mt-5">
            <div className="jumbotron">
                <h2 className="display-5 main-header">Profile Listing</h2>
            </div>
            <input
                type="text"
                placeholder="Search by name"
                value={search}
                onChange={handleSearch}
                className="form-control mb-4"
            />
            <div className="row">
                {filteredUsers.map((user, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card mb-4 shadow-sm">
                            <img className="card-img-top" src={user.picture} alt={user.name} style={{ width: '100%', height: '15vw', objectFit: 'cover' }} />
                            <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <p className="card-text">{user.email}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <Link to={`/profile/${user._id}`} className="btn btn-sm btn-outline-secondary">View Profile</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfileList;
