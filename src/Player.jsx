import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from './Components/Input/Input'; // Assurez-vous d'importer correctement le composant Input

export const Player = ({ value, onChange }) => {
  return (
    <div style={{ height: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="score d-flex flex-column justify-content-center align-items-center">
        <Input
          label='Username :'
          placeholder='Enter your username :'
          value={value}
          onChange={onChange}
        />
        <Link className="link-no-style" to="/Play">
          <button className="btn btn-primary btn-lg mt-4">Start a game</button>
        </Link>
      </div>
    </div>
  );
};
