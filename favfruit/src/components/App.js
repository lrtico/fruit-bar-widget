import React, { Component } from 'react'
import '../App.css'
import { FruitsApi } from '../utils/FruitasticApi'
import List from './List'
import Bar from './Bar'

class App extends Component {
  state = {
    people: [],
  }

  componentDidMount() {
    let fruitObj = new FruitsApi();
    let fruitsResult = fruitObj.get((people) => {
      this.setState({people})
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
