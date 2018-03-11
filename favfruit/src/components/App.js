import React, { Component } from 'react'
import '../App.css'
import { FruitasticApi } from '../utils/FruitasticApi'
import List from './List'
import Bar from './Bar'

class App extends Component {
  state = {
    // people: [],
    people: [
      {
        "id": "Chris A.",
        "fruit": "blackberries",
      },
      {
        "id": "Svetla B.",
        "fruit": "apple",
      },
      {
        "id": "Duncan C.",
        "fruit": "orange",
      },
      {
        "id": "Vlad D.",
        "fruit": "blackberries",
      },
      {
        "id": "Dennis E.",
        "fruit": "banana",
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
