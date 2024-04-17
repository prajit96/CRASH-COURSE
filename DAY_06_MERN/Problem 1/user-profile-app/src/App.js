import React, { useState } from 'react';
import UserProfile from './UserProfile';
import EditProfile from './EditProfile';

const App = () => {
  const [editMode, setEditMode] = useState(false);
  const userData = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };

  return (
    <div>
      <button onClick={() => setEditMode(!editMode)}>
        {editMode ? 'View Mode' : 'Edit Mode'}
      </button>
      {editMode ? (
        <EditProfile {...userData} />
      ) : (
        <UserProfile {...userData} />
      )}
    </div>
  );
};

export default App;
