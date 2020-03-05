/*
  Author:     Kent C. Dodds (https://github.com/kentcdodds)
  copied from https://github.com/kentcdodds/simply-react
*/

import React from 'react'

export default ({children}) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: 'white',
      color: 'black',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    }}
  >
    <div style={{marginLeft: 70, marginRight: 70}}>{children}</div>
  </div>
)
