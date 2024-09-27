import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div style={cardStyles}>
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} style={imageStyles} />
      <div>
        <h3>{`${user.first_name} ${user.last_name}`}</h3>
        <p>{user.email}</p>
      </div>
    </div>
  );
};


const cardStyles = {
  border: '1px solid #ccc',
  borderRadius: '10px',
  padding: '20px',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  backgroundColor: '#f9f9f9',
};

const imageStyles = {
  borderRadius: '50%',
  width: '80px',
  height: '80px',
};

export default UserCard;
