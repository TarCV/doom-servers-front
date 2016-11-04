import React, { Component, PropTypes } from 'react';
import prefix from 'react-prefixer';
//import './App.css';

import { createStore } from 'redux'
import { appReducer } from './reducers.js'
import { ServerPair } from './components/settings.js'
import { SettingBlock } from './components/settingBlock.js'

let leftCaption = { captionSide: 'left' };
let hiddenStyle = { display: 'none' }
let fullWidth = { width: '100%' }
let alignTop = {
  vtextAlign: 'top'
}
let columnsDiv = prefix({
  columnWidth: '25em'
})
let labelCell = {
  textAlign: 'right',
  vtextAlign: 'top'
}

let valueCell = {
  textAlign: 'left',
  vtextAlign: 'top',
  width: '10em'
}

class MapSettings extends Component {
  render() {
    return (
      <fieldset><legend style={leftCaption}>WAD settings</legend>
        <div style={columnsDiv}>
          <ServerPair text='Required files (PWADs)'>
            <input name="files" style={fullWidth} />
            <select name="file" style={hiddenStyle}>
            </select>
            <div style={valueCell}>
              <select name="filetoadd">
              </select>
              <button disabled="disabled" value="+" name="addpwad" type="button"></button></div>
          </ServerPair>
        </div>

        <SettingBlock settings={this.props.settings} name='map' onChange={this.props.onChange} />
      </fieldset>
    )
  }
}

class GameplaySettings extends Component {
  render() {
    return (
      <fieldset>
        <legend>Gameplay settings</legend>
        <SettingBlock settings={this.props.settings} name='gameplay' onChange={this.props.onChange} />
      </fieldset>
    )
  }
}

class ServerSettings extends Component {
  render() {
    return (
      <fieldset><legend>Server settings</legend>
        <SettingBlock settings={this.props.settings} name='server' onChange={this.props.onChange} />
      </fieldset>
    )
  }
}

class SettingPage extends Component {
  render() {
    const initialSettings = this.props.initialSettings;
    return (
      <table style={fullWidth}>
        <tbody>
          <tr>
            <td>
              <form method="post" action="process.php">Load settings from file:
        <input name="config" type="file" /><input value="Load" type="submit" />
              </form>
              <form method="post" action="process.php">
                <MapSettings settings={initialSettings.map} onChange={this.props.onChange} />
                <GameplaySettings settings={initialSettings.gameplay} onChange={this.props.onChange} />
                <ServerSettings settings={initialSettings.server} onChange={this.props.onChange} />
                <input name="reload" value="Check (do not save)" type="submit" /><input name="save" value="Save &amp; generate server" type="submit" /></form>
            </td>
            <td style={alignTop}>
              <div>Global presets:<br />
                <input name="d" value="oldschool" type="button" /><br />
                <input name="d" value="rocket jump" type="button" /><br />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default SettingPage;