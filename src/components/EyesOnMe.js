// Code EyesOnMe Component Here
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class EyesOnMe extends React.Component {

  render() {
    return (
      <button onFocus={() => console.log("Good!")} onBlur={() => console.log("Hey! Eyes on me!")}>Button</button>
    )
  }
}