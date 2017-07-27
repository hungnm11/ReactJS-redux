import React, { Component } from 'react';

export default class SeacrhBar extends Component {
  render() {
    
    return (
      <form className="input-group">
        <input 
          className="form-control"
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    )
  }
}