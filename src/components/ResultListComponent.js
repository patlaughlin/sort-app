'use strict';

import React, {PropTypes} from 'react';

require('styles//ResultList.css');

class ResultListComponent extends React.Component {
  render() {
    return (
      <ul className="resultlist-component">
        {this.props.result.map((result, i) => {
          return <li key={i}>{result}</li>
        })}
      </ul>
    );
  }
}

ResultListComponent.displayName = 'ResultListComponent';

ResultListComponent.propTypes = {
  result: PropTypes.array.isRequired
};

export default ResultListComponent;
