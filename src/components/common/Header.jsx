import React from 'react';
import './Header.css';
import { Button } from '@material-ui/core';
import UserContext from '../UserContext';
import SelectUser from '../SelectUser';

export default function Header() {
  const { user } = React.useContext(UserContext);
  return (
    <header className="Header">
      {user && <p>Logged in: {user}</p>}
      <SelectUser />
      <Button href="/">
        <h1>Rico NC News!</h1>
      </Button>
    </header>
  );
}
