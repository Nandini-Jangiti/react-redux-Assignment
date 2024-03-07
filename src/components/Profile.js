import React from 'react';
import { useSelector } from 'react-redux';


function Profile() {
    const user = useSelector((state) => state.user);

    return (
        <div className='container'>
            <h1>Profile</h1>
            <h3>Personal Details:</h3>
            <h5>Name: {user.name}</h5>
            <h5>Country: {user.country}</h5>
            <h5>Gender: {user.gender}</h5>
            <h5>Permanent Account Number: {user.pan}</h5>
        </div>
    );
}

export default Profile;