
/**
 *
 * LoginFieldLine
 *
 */

import React, { PureComponent, PropTypes } from 'react';

class LoginFieldLine extends PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ marginBottom: '0.5rem' }}>
        <input
               type={this.props.type}
               placeholder={this.props.placeholder}
               value={this.props.value}
        />
      </div>
      ); // eslint-disable-line
  }
}

LoginFieldLine2.propTypes = {
  exampleProp: PropTypes.string,
};
LoginFieldLine2.defaultProps = {
  exampleProp: '',
};

export default LoginFieldLine2;
