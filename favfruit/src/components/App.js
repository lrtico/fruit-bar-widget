import React, { Component } from 'react'
import '../App.css'
import * as FruitasticApi from '../utils/FruitasticApi'
import List from './List'
import Bar from './Bar'

class App extends Component {
  state = {
    // people: [],
    people: [
      {
        "id": "Chris A.",
        "fruit": "blackberries",
        "count": 32,
      },
      {
        "id": "Svetla B.",
        "fruit": "apple",
        "count": 12,
      },
      {
        "id": "Duncan C.",
        "fruit": "orange",
        "count": 41,
      },
      {
        "id": "Vlad D.",
        "fruit": "strawberries",
        "count": 32,
      },
      {
        "id": "Dennis E.",
        "fruit": "banana",
        "count": 43,
      },
    ]
  }

  componentDidMount() {
    console.log("state", this.state)
    // FruitasticApi.get(function (results) {
    //   for (let result of results) {
    //     console.log(`Name is ${result.name} and favorite fruit is ${result.favoriteFruit}`);
    //   }
    // })
  }

  render() {
    return (
      <div className="card">
        <header className="card__header">
          <h1>Favorite<br></br>Fruits</h1>
        </header>
        <Bar
          people={this.state.people}
        />
        <List
          //Grab the data from state and pass it down to the map function to
          //display the people and their fruit in the list
          people={this.state.people}
        />
      </div>
    );
  }
}

export default App;
