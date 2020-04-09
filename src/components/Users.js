import React, { useContext } from 'react';
import { UsersContext } from '../contexts/UsersContext';

function Users(props) {
  const usersData = useContext(UsersContext);
  const { usersList } = usersData;

  return (
    <div>
      {usersList.map(user => {
        return (
          <div key={user.id}>
            <h4>{user.name.first + " " + user.name.last}</h4>
            {props.details
            ?
              <p>{`${user.gender}, ${user.location.city}, ${user.location.state}, ${user.location.country}`}</p>
              :
              null
            }
          </div>
        )
      })}
    </div>
  )
}

export default Users;