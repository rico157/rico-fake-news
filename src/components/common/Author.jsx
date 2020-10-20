import { Avatar } from '@material-ui/core';
import React from 'react';

export function Author({ author }) {
  return (
    <div className="author">
      <Avatar
        src={`https://avatars.dicebear.com/api/avataaars/${author}.svg`}
        alt="avatar"
      />
      <h5>By: {author}</h5>
    </div>
  );
}
