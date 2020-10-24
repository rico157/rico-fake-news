import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import UserContext from './UserContext';

export default function SelectUser() {
  const users = [
    'weegembump',
    'grumpy19',
    'happyamy2016',
    'jessjelly',
    'tickle122'
  ];
  const { user, changeUser } = React.useContext(UserContext);

  return (
    <div className="SelectUser">
      <FormControl className="User-Menu">
        <InputLabel id="User-Input-Select">Select User</InputLabel>
        <Select
          labelId="User-Input-Select"
          id="User-Select"
          onClick={(e) => changeUser(e.target.value)}
          label="Users"
          value={user}
        >
          {users.map((userChoice) => {
            return (
              <MenuItem
                className="user-Item"
                key={userChoice}
                value={userChoice}
              >
                <span>{userChoice}</span>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
