import React, { Component } from 'react'
import '../App.css'
// import * as FruitasticApi from '../utils/FruitasticApi'
import { FruitsApi } from '../utils/FruitasticApi'
import List from './List'
import Bar from './Bar'

class App extends Component {
  state = {
    people: [],
    // people: [
    //   {
    //     "id": "Chris A.",
    //     "fruit": "blackberries",
    //     "count": 24,
    //   },
    //   {
    //     "id": "Svetla B.",
    //     "fruit": "apple",
    //     "count": 18,
    //   },
    //   {
    //     "id": "Duncan C.",
    //     "fruit": "orange",
    //     "count": 27,
    //   },
    //   {
    //     "id": "Vlad D.",
    //     "fruit": "strawberries",
    //     "count": 22,
    //   },
    //   {
    //     "id": "Dennis E.",
    //     "fruit": "banana",
    //     "count": 20,
    //   },
    // ]
  }

  componentDidMount() {
    console.log("state", this.state)
    // FruitasticApi.get(function (results) {
    //   for (let result of results) {
    //     console.log(`Name is ${result.name} and favorite fruit is ${result.favoriteFruit}`);
    //   }
    // })
    // FruitasticApi.get(function(results) {
    //   this.setState({ results })
    // })
    let fruitObj = new FruitsApi();
    let fruitsResult = fruitObj.get((people) => {
      this.setState({people})
      console.log("Fruitastic state", this.state)
    })
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
