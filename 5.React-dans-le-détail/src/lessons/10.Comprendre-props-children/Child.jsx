import React from 'react'

export default function Child(props) {

    console.log(props);

  return (
      <div>
        <h3>{props.txt}</h3>
        {props.children}
    </div>
  )
}
