import React from 'react';

const EditProfile = ({ name, email, bio }) => (
  <div>
    <h2>Edit Profile</h2>
    <label>Name:</label>
    <input type="text" defaultValue={name} />
    <br />
    <label>Email:</label>
    <input type="text" defaultValue={email} />
    <br />
    <label>Bio:</label>
    <textarea defaultValue={bio}></textarea>
  </div>
);

export default EditProfile;
