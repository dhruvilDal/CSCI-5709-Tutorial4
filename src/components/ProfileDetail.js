import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/App.css';

const ProfileDetail = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://express-t4.onrender.com/api/users/${id}`)
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(err => console.error(err));
    }, [id]);

    return (
        <div className="container mt-5">
            <div className="jumbotron">
                <h2 className="display-5 main-header">Profile Details</h2>
            </div>
            <div className="card">
                <img className="card-img-top" src={user.picture} alt={user.name} style={{ width: '18rem', height: '18rem', objectFit: 'cover', margin: 'auto'}} />
                <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <hr />
                    <p className="card-text"><strong>Email:</strong> {user.email}</p>
                    <p className="card-text"><strong>Phone:</strong> {user.phone}</p>
                    <p className="card-text"><strong>Address:</strong> {user.address}</p>
                    <p className="card-text"><strong>Company:</strong> {user.company}</p>
                    <p className="card-text"><strong>About:</strong> {user.about}</p>
                    <p className="card-text"><strong>Registered:</strong> {user.registered}</p>
                    <p className="card-text"><strong>Eye Color:</strong> {user.eyeColor}</p>
                    <p className="card-text"><strong>Age:</strong> {user.age}</p>
                    <p className="card-text"><strong>Gender:</strong> {user.gender}</p>
                    <p className="card-text"><strong>Tags:</strong> {user.tags && user.tags.join(', ')}</p>
                    <p className="card-text"><strong>Friends:</strong> {user.friends && user.friends.map(friend => friend.name).join(', ')}</p>
                    <p className="card-text"><strong>Greeting:</strong> {user.greeting}</p>
                    <p className="card-text"><strong>Favorite Fruit:</strong> {user.favoriteFruit}</p>
                    <p className="card-text"><strong>Balance:</strong> {user.balance}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileDetail;
