
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const user = useSelector((state) => state.user);

    return (
        <div>

            <h1>Hello {user.name}</h1>
            <Link to="/profile">Go to Profile</Link> <br></br> <br></br>
            <Link to="/education-details">Go to Education Details</Link>
        </div>
    );
};

export default Dashboard;