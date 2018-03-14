import React, { Component } from 'react'


class List extends Component {

  render() {
    const { people } = this.props
    // console.log("data", people)
    return (
      <div className="card__list-wrap">
        <div className="card__list__header flex--default flex--space-between">
          <span>Name</span>
          <span>Favorite Fruit</span>
        </div>
        <ul className="card__list">
          {people.map((person) => (
            <li key={person.name} className="card__list__item flex--default flex--space-between">
              <span>{person.name}</span>
              <span>{person.favoriteFruit}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default List
