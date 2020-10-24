import React from 'react';
import './Header.css';
import { Button } from '@material-ui/core';
import SelectUser from '../SelectUser';

export default function Header(props) {
  const { user, updateUser } = props;
  return (
    <header className="Header">
      <p>Logged in: {user}</p>
      <SelectUser updateUser={updateUser} />
      <Button href="/">
        <h1>Rico NC News!</h1>
      </Button>
    </header>
  );
}
