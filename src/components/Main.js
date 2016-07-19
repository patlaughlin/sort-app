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
    let len = items.length,
        i, j, stop;

    for (i = 0; i < len; i++) {
      for (j = 0, stop = len - i; j < stop; j++) {
        if ((Math.abs(j % 2) === 1) && (items[j] < items[j + 1])) {
          this.swap(items, j, j + 1);
        } else if ((j % 2 === 0) && (items[j] > items[j + 1])) {
          this.swap(items, j, j + 1);
        }
      }
    }

    return items;
  }

  handleInput(e) {
    const el     = this;
    let inputVal = e.target.value;
    inputVal     = inputVal.trim().split(',');
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
