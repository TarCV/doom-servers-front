import React, { Component, PropTypes } from 'react';
import prefix from 'react-prefixer';
import { ServerSetting } from './settings.js'

let columnsDiv = prefix({
  columnWidth: '25em'
})

export class SettingBlock extends Component {
  render() {
    const onChangeHandler = this.props.onChange;
    const blockName = this.props.name;
    const fixedSettings = this.props.settings || [];
    let items = fixedSettings.slice()
    items.sort((a, b) => a.text.localeCompare(b.text))
    items = items.map((setting) => {
      const itemOnChange = function (event) { onChangeHandler.apply(null, [{block: blockName, name: setting.name, value: event.value}]) }
      return <ServerSetting key={setting.name} setting={setting} onChange={itemOnChange} />
    })
    return <div style={columnsDiv}>{items}</div>
  }
}
SettingBlock.propTypes = {
  name: PropTypes.string.isRequired,
  settings: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}
