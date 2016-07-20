require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import SortedInputComponent from './SortedInputComponent';
import ResultListComponent from './ResultListComponent';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: []
    };

    this.handleInput = this.handleInput.bind(this);
    this.sort        = this.sort.bind(this);
  }

  swap(items, firstIndex, secondIndex) {
    let temp           = items[firstIndex];
    items[firstIndex]  = items[secondIndex];
    items[secondIndex] = temp;
  }

  sort(items) {
    items.forEach((item, i, arr) => {
      if ((Math.abs(i % 2) === 1) && (item < arr[i + 1]) ||
        (i % 2 === 0) && (item > arr[i + 1])) {
        this.swap(arr, i, i + 1);
      }
    });

    return items;
  }

  handleInput(e) {
    const el     = this;
    let inputVal = e.target.value;
    inputVal     = inputVal.trim().split(',');
    inputVal     = inputVal.map(el => {
      if (el.trim() === '') return;
      return parseInt(el, 10);
    });
    this.setState({
      result: el.sort(inputVal)
    });
  }

  render() {
    return (
      <div className="index">
        <SortedInputComponent
          onChange={this.handleInput}/>
        <ResultListComponent
          result={this.state.result}/>
      </div>
    );
  }
}

export default AppComponent;
