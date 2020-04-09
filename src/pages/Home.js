import React from 'react';
import Users from '../components/Users';

function Home() {
  return (
    <div>
      <h3>Hello!</h3>
      <h3>Meet our users:</h3>
      <Users details={false} />
    </div>
  )
}

export default Home;