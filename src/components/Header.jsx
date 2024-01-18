import React from 'react';
import LinkBar from './LinkBar.jsx';
import {Donate} from './Copyright.jsx';

import './Header.scss';

const Header = () => {

  return (
    <div className='Header'>
      <h1>
        The Communist Scavengerhunt Scrum (CSS)
      </h1>

      <LinkBar />
      <Donate />

    </div>
  )
}

export default Header ;
