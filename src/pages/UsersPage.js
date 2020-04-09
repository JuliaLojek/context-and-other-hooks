import React from 'react';
import Users from '../components/Users';

function UsersPage() {
  return (
    <div>
      <h3>Who are our users?</h3>
      <Users details={true} />
    </div>
  )
}

export default UsersPage;