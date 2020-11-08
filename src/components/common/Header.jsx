import React, { Component } from 'react';
import './Header.css';
import { Button } from '@material-ui/core';
import UserContext from '../UserContext';
import SelectUser from '../SelectUser';

export default class Header extends Component {
  state = { logToggle: true };
  logButton = () => {
    this.setState((prevState) => {
      return { logToggle: !prevState.logToggle };
    });
  };

  render() {
    return (
      <UserContext.Consumer>
        {({ user }) => {
          return (
            <header className="Header">
              <div className="logDiv">
                {/* <Button
                  variant="contained"
                  color="primary"
                  onClick={this.logButton}
                >
                  Change User
                </Button> */}
                {this.state.logToggle && <SelectUser />}
              </div>
              {/* {user && <p>Logged in: {user}</p>} */}
              <Button href="/">
                <h1>
                  {' '}
                  Rico's News{' '}
                  <span role="img" aria-label="down">
                    👇
                  </span>
                </h1>
              </Button>
            </header>
          );
        }}
      </UserContext.Consumer>
    );
  }
}
