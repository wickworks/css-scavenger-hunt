import React from 'react';
import { Link } from "react-router-dom";

import './Footer.scss';

const Footer = () => {

  return (
    <div className='Footer'>

      <div className='chapters`'>
        <Link to='/'>Chapter One</Link>
        <Link to='two'>Chapter Two</Link>
        <Link to='three'>Chapter Three</Link>
      </div>

      <div className='credits'>

        <p><strong>Written:</strong> Late 1847;</p>
        <p><strong>First </strong>Published: February 1848;</p>
        <p><strong>Source:</strong> Marx/Engels Selected Works, Vol. One, Progress Publishers, Moscow, 1969, pp. 98-137;</p>
        <p><strong>Translated:</strong> Samuel Moore in cooperation with Frederick Engels, 1888;</p>
        <p><strong>Proofed:</strong> and corrected against 1888 English Edition by Andy Blunden 2004;</p>
        <p><strong>Copyleft:</strong> Marx/Engels Internet Archive (marxists.org) 1987, 2000. Permission is granted to copy and/or distribute this document under the terms of the Creative Commons Attribution-ShareAlike License.</p>

        <p><strong>See </strong>Note in: Marx Engels Collected Works.</p>
      </div>

    </div>
  )
}

export default Footer ;
