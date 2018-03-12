import React, { Component } from 'react'

class Bar extends Component {

  handleClick = (e) => {
    // console.log("wax on")
    let fruit = e.target.firstChild.textContent
    let matchFruit = this.props.people.filter( person => person.fruit === fruit )
    let fruitCount = matchFruit[0].count
    // console.log("The count of the clicked bar is ", fruitCount)
    // console.log("fruit =", fruit)
    console.log(`Fruit selected: ${fruit}, ${fruitCount}`)
  }
  render() {
    const { people } = this.props
    console.log("data", people)
    return (
      <div className="card__bar-chart">
        {people.map((fruit) => (
          <div
            key={fruit.fruit}
            className={`bar-chart__bar bar-chart__bar--${fruit.fruit}`}
            onClick={this.handleClick}
          >
            <div className="bar-chart__bar__label">{fruit.fruit}</div>
          </div>
        ))}
      </div>
    )
  }
}

export default Bar
