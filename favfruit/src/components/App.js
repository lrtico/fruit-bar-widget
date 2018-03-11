import React, { Component } from 'react';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="card">
        <header className="card__header">
          <h1>Favorite<br></br>Fruits</h1>
        </header>
        <div className="card__bar-chart">
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
      </div>
        <div className="card__list-wrap">
          <div className="card__list__header flex--default flex--space-between">
            <span>Name</span>
            <span>Favorite Fruit</span>
          </div>
          <ul className="card__list">
            <li className="card__list__item flex--default flex--space-between">
              <span>Rebecca C.</span>
              <span>Blackberries</span>
            </li>
            <li className="card__list__item flex--default flex--space-between">
              <span>Cesar C.</span>
              <span>Pineapples</span>
            </li>
            <li className="card__list__item flex--default flex--space-between">
              <span>Pete M.</span>
              <span>Strawberries</span>
            </li>
            <li className="card__list__item flex--default flex--space-between">
              <span>Brad P.</span>
              <span>Pomegranites</span>
            </li>
            <li className="card__list__item flex--default flex--space-between">
              <span>George C.</span>
              <span>Apples</span>
            </li>
            <li className="card__list__item flex--default flex--space-between">
              <span>Don C.</span>
              <span>Pears</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
