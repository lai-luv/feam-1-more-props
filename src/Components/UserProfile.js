import React from 'react';

function UserProfile({name, age , location }){
    
        return (
            <div className="user-profile">
                <h2>User Profile</h2>
                <p><strong>Name:</strong>{name}</p>
                <p><strong>Age:</strong> {age}</p>
                <p><strong>Location:</strong> {location}</p>
                
            </div>
        );
    }


export default UserProfile;
