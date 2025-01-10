import React from 'react'
import { memo } from 'react';

export default memo(function Card({txt, customLog}) {

    console.log('RENDER');
    customLog();
    
  return (
    <div>
        <p>Card</p>
        <p>{txt}</p>
    </div>
  )
})
