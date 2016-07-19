'use strict';

require('styles//SortedInput.css');

import React, {PropTypes} from 'react';

class SortedInputComponent extends React.Component {
  render() {
    return (
      <div className="sortedinput-component">
        <input type="text" onChange={this.props.onChange}/>
      </div>
    );
  }
}

SortedInputComponent.displayName = 'SortedInputComponent';

SortedInputComponent.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default SortedInputComponent;
