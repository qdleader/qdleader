import React from 'react'
import './style.css'

class Loading extends React.Component{
  render(){
    return (
      <div id='loading'>
        <div className="dot"/>
        <div className="dot"/>
        <div className="dot"/>
        <div className="dot"/>
        <div className="dot"/>
      </div>
    )
  }
}
export default Loading