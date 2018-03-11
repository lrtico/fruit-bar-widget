import React, { Component } from 'react'

class Bar extends Component {
  render() {
    const { people } = this.props
    console.log("data", people)
    return (
      <div className="card__bar-chart">
        {people.map((fruit) => (
          <div key={fruit.fruit} className={`bar-chart__bar bar-chart__bar--${fruit.fruit}`}>
            <div className="bar-chart__bar__label">{fruit.fruit}</div>
          </div>
        ))}
      </div>
    )
  }
}

export default Bar
