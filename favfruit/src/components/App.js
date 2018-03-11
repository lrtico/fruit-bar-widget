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
        {/* <div className="card__bar-chart">
          <div className="bar-chart__bar bar-chart__bar--apple">
            <div className="bar-chart__bar__label">Apples</div>
          </div>
          <div className="bar-chart__bar bar-chart__bar--cherry">
            <div className="bar-chart__bar__label">Cherries</div>
          </div>
          <div className="bar-chart__bar bar-chart__bar--orange">
            <div className="bar-chart__bar__label">Pomegranites</div>
          </div>
          <div className="bar-chart__bar bar-chart__bar--navy">
            <div className="bar-chart__bar__label">Blackberries</div>
          </div>
          <div className="bar-chart__bar bar-chart__bar--gold">
            <div className="bar-chart__bar__label">Bananas</div>
          </div>
          <div className="bar-chart__bar bar-chart__bar--lime">
            <div className="bar-chart__bar__label">Pears</div>
          </div>
          <div className="bar-chart__bar bar-chart__bar--orange">
            <div className="bar-chart__bar__label">Oranges</div>
          </div>
          <div className="bar-chart__bar bar-chart__bar--apple">
            <div className="bar-chart__bar__label">Mangos</div>
          </div>
          <div className="bar-chart__bar bar-chart__bar--green">
            <div className="bar-chart__bar__label">Kiwis</div>
          </div>
          <div className="bar-chart__bar bar-chart__bar--brown">
            <div className="bar-chart__bar__label">Pineapples</div>
          </div>
          <div className="bar-chart__bar bar-chart__bar--hotpink">
            <div className="bar-chart__bar__label">Strawberries</div>
          </div>
          <div className="bar-chart__bar bar-chart__bar--orange">
            <div className="bar-chart__bar__label">Cantaloupes</div>
          </div>
          <div className="bar-chart__bar bar-chart__bar--purple">
            <div className="bar-chart__bar__label">Grapes</div>
          </div>
          <div className="bar-chart__bar bar-chart__bar--magenta">
            <div className="bar-chart__bar__label">Watermelons</div>
          </div>
        </div> */}
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
