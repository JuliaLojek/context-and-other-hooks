import React, { Component } from 'react';
import { UsersContext } from '../contexts/UsersContext';

class UsersClass extends Component {
  render() {
    return (
      <div>
        <b>Users as a class:</b>
        <UsersContext.Consumer>
        {value => value.usersList.map(user => {
        return (
          <div key={user.id}>
            <h4>{user.name.first + " " + user.name.last}</h4>
            {this.props.details
            ?
              <p>{`${user.gender}, ${user.location.city}, ${user.location.state}, ${user.location.country}`}</p>
              :
              null
            }
          </div>
        )
      })}
        </UsersContext.Consumer>
      </div>
    )
  }
}

export default UsersClass;