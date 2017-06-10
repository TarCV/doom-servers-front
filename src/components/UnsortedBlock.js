import React, { Component, PropTypes } from 'react';
import prefix from 'react-prefixer';
import { BlockTable } from './BlockTable'

const columnsDiv = prefix({
  columnWidth: '25em',
});

export class UnsortedBlock extends Component {
  render() {
    return (<div style={columnsDiv}>
      <BlockTable
        onChange={this.props.onChange}
        settings={this.props.settings}
        blockName={this.props.blockName}
        style={this.props.style}
      />
    </div>
    );
  }
}
UnsortedBlock.propTypes = {
  name: PropTypes.string.isRequired,
  settings: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
};
