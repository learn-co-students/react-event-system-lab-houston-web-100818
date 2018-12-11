import React from 'react'

export default class Keypad extends React.Component {
  render() {

    return (
      <div>
      <label>password: </label>
      <input type="password" onKeyUp={ () => {
        console.log('Entering password...')
      }} />
      </div>
    )
  }
}
