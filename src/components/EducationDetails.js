import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function EducationDetails() {
    const [newCertification, setNewCertification] = useState('');
    const dispatch = useDispatch();
    const {
        tenth,
        higherSecondary,
        graduation,
        certifications
    } = useSelector((state) => ({
        tenth: state.user.education?.tenth,
        higherSecondary: state.user.education?.higherSecondary,
        graduation: state.user.education?.graduation,
        certifications: state.user.certifications || [] 
    }));

    const handleAddCertification = () => {
        if (newCertification.trim()) {
            dispatch({ type: 'ADD_CERTIFICATION', payload: newCertification });
            setNewCertification('');
        }
    };

    return (
        <div className='container'>
            <h1>Education Details</h1>
            <h3>10th</h3>
            <h5>Institute Name: {tenth?.instituteName}</h5> 
            <h3>Higher Secondary</h3>
            <h5>Institute Name: {higherSecondary?.instituteName}</h5> 
            <h5>CGPA: {higherSecondary?.cgpa}</h5>
            <h3>Graduation</h3>
            <h5>Institute Name: {graduation?.instituteName}</h5> 
            <h5>CGPA: {graduation?.cgpa}</h5>
            <h3>Certifications</h3>
            <ul>
                {certifications.map((certification, index) => (
                    <li key={index}>{certification}</li>
                ))}
            </ul>
            <input
                type="text"
                value={newCertification}
                onChange={(e) => setNewCertification(e.target.value)}
                placeholder="Enter new certification"
            />
            <button onClick={handleAddCertification}>Add New</button>
        </div>
    );
}

export default EducationDetails;