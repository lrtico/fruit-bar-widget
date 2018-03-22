import React, { Component } from 'react'
import sortBy from 'sort-by'

class Bar extends Component {

  handleClick = (e) => {
    e.stopPropagation()
    //Output the fruit clicked and the popularity count
    let fruit = e.target.firstChild.textContent
    let fruitCount = e.target.lastChild.textContent

    //Visually highlight the clicked row
    const bar = e.target
    if (bar.classList.contains("bar-chart__bar")) {
      bar.classList.toggle("bar-chart__bar--active")
      console.log(`Fruit selected: ${fruit}, ${fruitCount}`)
    } else if (bar.parentNode.classList.contains("bar-chart__bar")){
      let fruitCount = e.target.nextSibling.textContent
      bar.parentNode.classList.toggle("bar-chart__bar--active")
      console.log(`Fruit selected: ${fruit}, ${fruitCount}`)
    }
  }

  render() {
    const { people } = this.props

    // Animate the bar growth to the correct width on page load
    window.addEventListener("load", function(){
        let bars = document.querySelectorAll('.bar-chart__bar')
        for (let bar of bars) {
          const count = bar.lastChild.textContent
          const myWidth = Number(count * 5) + 150 + "px"
          bar.style.width = myWidth
        }
    })
    //Create a blank array to take in a list of fruit strings from the state
    let favFruit = []
    for (let person of people) {
      favFruit.push(person.favoriteFruit)
    }

    //Filter the list of fruits removing matches by creating a Set object
    let matchedFruit = Array.from(new Set(favFruit))

    //Return the number of times each fruit is in the API call
    const countFunc = (obj) => {
      let count = 0
      if (obj === 'apple') {
        count = favFruit.filter(fruit => fruit === 'apple').length
      } else if (obj === 'grapes') {
        count = favFruit.filter(fruit => fruit === 'grapes').length
      } else if (obj === 'blackberries') {
        count = favFruit.filter(fruit => fruit === 'blackberries').length
      } else if (obj === 'orange') {
        count = favFruit.filter(fruit => fruit === 'orange').length
      } else if (obj === 'banana') {
        count = favFruit.filter(fruit => fruit === 'banana').length
      } else if (obj === 'pear') {
        count = favFruit.filter(fruit => fruit === 'pear').length
      } else if (obj === 'watermelon') {
        count = favFruit.filter(fruit => fruit === 'watermelon').length
      } else if (obj === 'mango') {
        count = favFruit.filter(fruit => fruit === 'mango').length
      } else if (obj === 'cantaloupe') {
        count = favFruit.filter(fruit => fruit === 'cantaloupe').length
      } else if (obj === 'strawberries') {
        count = favFruit.filter(fruit => fruit === 'strawberries').length
      } else if (obj === 'kiwi') {
        count = favFruit.filter(fruit => fruit === 'kiwi').length
      } else if (obj === 'pineapple') {
        count = favFruit.filter(fruit => fruit === 'pineapple').length
      } else if (obj === 'pomegranate') {
        count = favFruit.filter(fruit => fruit === 'pomegranate').length
      } else if (obj === 'cherries') {
        count = favFruit.filter(fruit => fruit === 'cherries').length
      } else {
        count = 49
      }
      return count
    }
    //Formatting the array to be mappable, allowing us to return UI below
    let reformattedFavFruit = matchedFruit.map(obj => {
      let rObj = {}
      let counter = countFunc(obj)
      rObj.name = obj
      rObj.count = counter
      return rObj
    })

    //Sort the bars in order of most popular
    reformattedFavFruit.sort(sortBy('-count'))

    return (
      <div className="card__bar-chart">
        {reformattedFavFruit.map((person) => (
          <div
            key={person.name}
            className={`bar-chart__bar bar-chart__bar--${person.name}`}
            onClick={this.handleClick}
          >
            <div className="bar-chart__bar__label">{person.name}</div>
            <div className="bar-chart__bar__count">{person.count}</div>
          </div>
        ))}
      </div>
    )
  }
}

export default Bar
