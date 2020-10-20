import React from 'react';
import './ErrorPage.css';

export default function ErrorPage({ status, msg, statusText }) {
  let errorText = 'Error';
  if (msg) {
    errorText = <h3>{msg}</h3>;
  } else if (statusText) {
    errorText = <h3>{statusText}</h3>;
  }

  return (
    <div className="ErrorPage">
      <h2>Code: {status}</h2>
      {errorText}
    </div>
  );
}
