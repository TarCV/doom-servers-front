import React, { Component, PropTypes } from 'react';
import prefix from 'react-prefixer';
import { CompleteField } from './CompleteField'

const columnsDiv = prefix({
  columnWidth: '25em',
});
const tableFullWidth = {
  textAlign: 'left',
  width: '100%',
  border: 'none',
};

export class UnsortedBlock extends Component {
  render() {
    const onChangeHandler = this.props.onChange;
    const blockName = this.props.name;
    const fixedSettings = this.props.settings || [];
    const items = fixedSettings.map((setting) => {
      const itemOnChange = (event) => { onChangeHandler.apply(null, [{ block: blockName, name: setting.name, value: event.value }]); }
      return <CompleteField key={setting.name} setting={setting} onChange={itemOnChange} />
    });
    return (<div style={columnsDiv}>
      <table style={Object.assign({}, tableFullWidth, this.props.style || {})}>
        <tbody>
          {items}
        </tbody>
      </table>
    </div>
    );
  }
}
UnsortedBlock.propTypes = {
  name: PropTypes.string.isRequired,
  settings: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  multiColumn: PropTypes.bool,
  style: PropTypes.object,
};
