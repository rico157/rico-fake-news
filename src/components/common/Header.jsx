import React from 'react';
import './Header.css';
import { Button } from '@material-ui/core';

export default function Header() {
  return (
    <header className="Header">
      <Button href="/">
        <h1>Rico NC News!</h1>
      </Button>
    </header>
  );
}
