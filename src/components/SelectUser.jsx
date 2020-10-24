import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';

export default function SelectUser(props) {
  const { updateUser } = props;
  const users = ['weegembump', 'grumpy19'];

  const handleChange = (e) => {
    updateUser(e.target.value);
  };

  return (
    <div className="SelectUser">
      <FormControl variant="outlined" className="Topic-Menu">
        <InputLabel id="User-Input-Select">Change User</InputLabel>
        <Select
          labelId="User-Input-Select"
          id="User-Select"
          onChange={handleChange}
          label="Users"
        >
          {users.map((user) => {
            return (
              <MenuItem className="user-Item" key={user} value={user}>
                <span>{user}</span>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
