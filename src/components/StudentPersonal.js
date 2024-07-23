import React, { useEffect, useState } from "react";
import axios from 'axios';

function StudentPersonal() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8081/api/students')
        .then(response => {
            setProfile(response.data)
        })
        .catch(error => console.error('Error fetching profile data:', error));
    }, []);

    if (!profile) return <p>Loading...</p>;

    return (
        <div className="profile-container">
          <h2>Personal Profile</h2>
          <div className="profile-header">
            <img src={profile.photo} alt="Profile" className="profile-photo" />
            <div className="profile-details">
              <h3>{profile.name}</h3>
              <p>Contact: {profile.contact}</p>
            </div>
          </div>
          <div className="academic-info">
            <h3>Academic Information</h3>
            <p><strong>Courses:</strong> {profile.courses.join(', ')}</p>
            <p><strong>Grades:</strong> {profile.grades.join(', ')}</p>
            <p><strong>Attendance:</strong> {profile.attendance}%</p>
          </div>
        </div>
      );
}

export default StudentPersonal;