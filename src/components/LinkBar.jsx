import React from 'react';
import { Link } from "react-router-dom";

import './LinkBar.scss';

const LinkBar = () => {

  return (
    <div className='LinkBar'>

      <div className='chapters'>
        <span className='one'><Link to='/'>Chapter One</Link></span>
        <span className='two'><Link to='two'>Chapter Two</Link></span>
        <span className='three'><Link to='three'>Chapter Three</Link></span>
      </div>

    </div>
  )
}

export default LinkBar ;
