import React, { Component, PropTypes } from 'react';
import { CompleteField } from './CompleteField'

const tableFullWidth = {
  textAlign: 'left',
  width: '100%',
  border: 'none',
};

export class BlockTable extends Component {
  render() {
    const onChangeHandler = this.props.onChange;
    const blockName = this.props.name;
    const fixedSettings = this.props.settings || [];
    const items = fixedSettings.map((setting) => {
      const itemOnChange = (event) => { onChangeHandler.apply(null, [{ block: blockName, name: setting.name, value: event.value }]); }
      const error = this.props.errors && this.props.errors[setting.name];
      return <CompleteField
        key={setting.name}
        setting={setting}
        error={error}
        onChange={itemOnChange} />
    });
    return (
      <table style={Object.assign({}, tableFullWidth, this.props.style || {})}>
        <tbody>
          {items}
        </tbody>
      </table>
    );
  }
}
BlockTable.propTypes = {
  name: PropTypes.string.isRequired,
  settings: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
};
