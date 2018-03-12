import React, { Component } from 'react'
import sortBy from 'sort-by'

class Bar extends Component {

  handleClick = (e) => {
    // console.log("wax on")
    let fruit = e.target.firstChild.textContent
    let matchFruit = this.props.people.filter( person => person.fruit === fruit )
    let fruitCount = matchFruit[0].count
    console.log(`Fruit selected: ${fruit}, ${fruitCount}`)
    const bar = e.target
    bar.classList.toggle("bar-chart__bar--active")
  }
  render() {
    const { people } = this.props
    console.log("data", people)
    people.sort(sortBy('-count'))

    return (
      <div className="card__bar-chart">
        {people.map((fruit) => (
          <div
            key={fruit.fruit}
            className={`bar-chart__bar bar-chart__bar--${fruit.fruit}`}
            onClick={this.handleClick}
          >
            <div className="bar-chart__bar__label">{fruit.fruit}</div>
            <div className="bar-chart__bar__count">{fruit.count}</div>
          </div>
        ))}
      </div>
    )
  }
}

export default Bar
