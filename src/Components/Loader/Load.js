import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './Load.css'

export default function Loader() {
  return (
    <div className='admin-loader'>
      <div className="admin-loader-container">
        <CircularProgress color="inherit" />
      </div>
    </div>
  );
}