import React, { Component, PropTypes } from 'react';
import { UnsortedBlock } from './UnsortedBlock'

export class SortedBlock extends Component {
  render() {
    const fixedSettings = this.props.settings || [];
    let items = fixedSettings.slice()
    items.sort((a, b) => a.text.localeCompare(b.text))
    return <UnsortedBlock {...this.props} settings={items} />
  }
}
SortedBlock.propTypes = {
  name: PropTypes.string.isRequired,
  settings: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}
