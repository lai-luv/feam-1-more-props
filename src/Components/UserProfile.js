import React from 'react';

function UserProfile(props){
    
        return (
            <div className="user-profile">
                <h2>User Profile</h2>
                <p><strong>Name:</strong>{props.name}</p>
                <p><strong>Age:</strong> {props.age}</p>
                <p><strong>Location:</strong> {props.location}</p>
                
            </div>
        );
    }


export default UserProfile;
