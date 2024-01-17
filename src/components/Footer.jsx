import React from 'react';
import LinkBar from './LinkBar.jsx';
import Copyright from './Copyright.jsx';

import './Footer.scss';

const Footer = () => {

  return (
    <div className='Footer'>

      <LinkBar />

      <div className='credits'>

        <p><strong>Written:</strong> Late 1847;</p>
        <p><strong>First </strong>Published: February 1848;</p>
        <p><strong>Source:</strong> Marx/Engels Selected Works, Vol. One, Progress Publishers, Moscow, 1969, pp. 98-137;</p>
        <p><strong>Translated:</strong> Samuel Moore in cooperation with Frederick Engels, 1888;</p>
        <p><strong>Proofed:</strong> and corrected against 1888 English Edition by Andy Blunden 2004;</p>
        <p><strong>Copyleft:</strong> Marx/Engels Internet Archive (marxists.org) 1987, 2000. Permission is granted to copy and/or distribute this document under the terms of the Creative Commons Attribution-ShareAlike License.</p>

        <p><strong>See </strong>Note in: Marx Engels Collected Works.</p>
      </div>

      <h3>Additional Reading</h3>
      <div className='additional-reading'>
        <a href='/'>Communist Confession of Faith</a>
        <a href='/'>Principles of Communism</a>
        <a href='/'>Demands of Communist Party in Germany</a>
        <a href='/'>Study Guide</a>
        <a href='/'>Marx-Engels Archive</a>
      </div>

      <Copyright />
    </div>
  )
}

export default Footer ;
