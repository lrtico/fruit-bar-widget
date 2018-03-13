import React, { Component } from 'react'
import sortBy from 'sort-by'

class Bar extends Component {

  handleClick = (e) => {
    e.stopPropagation()
    //Output the fruit clicked and the popularity count
    let fruit = e.target.firstChild.textContent
    let matchFruit = this.props.people.filter( person => person.fruit === fruit )
    let fruitCount = matchFruit[0].count
    console.log(`Fruit selected: ${fruit}, ${fruitCount}`)

    //Visually highlight the clicked row
    const bar = e.target
    if (bar.classList.contains("bar-chart__bar")) {
      bar.classList.toggle("bar-chart__bar--active")
    } else if (bar.parentNode.classList.contains("bar-chart__bar")){
      bar.parentNode.classList.toggle("bar-chart__bar--active")
    }

    //Filter the list below to only display the people that chose that fruit
    console.log("Fruit", fruit)
    this.setState({matchFruit})
  }

  render() {
    const { people } = this.props

    //Sort the bars in order of most popular
    people.sort(sortBy('-count'))

    //Animate the bar growth to the correct width on page load
    window.addEventListener("load", function(){
        let bars = document.querySelectorAll('.bar-chart__bar')
        for (let bar of bars) {
          const count = bar.lastChild.textContent
          // console.log("child", count)
          const myWidth = Number(count) + 160 + "px"
          // console.log("width", myWidth)
          bar.style.width = myWidth
        }
    });

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
