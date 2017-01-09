import React, { Component, PropTypes } from 'react';
import prefix from 'react-prefixer';
//import './App.css';

import { createStore } from 'redux'
import { appReducer } from './reducers.js'
import { ServerPair } from './components/settings.js'
import { SettingBlock } from './components/settingBlock.js'
import { Console } from './components/Console.js'

let rest = require('rest');
let mime = require('rest/interceptor/mime');
let registry = require('rest/mime/registry');
let client = rest
  .wrap(mime, { registry: registry });

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
  constructor(props) {
    super(props)
    this.state = {
      settings : {}
    }
    this.onSave = this.onSave.bind(this);
  }
  onSave(e) {
    e.preventDefault();

    let settingsObject = [].concat(this.state.settings.server, this.state.settings.gameplay, this.state.settings.map)
      .reduce((prev, curr) => {
        if (prev.hasOwnProperty(curr.name)) {
          console.warn("Duplicate setting: " + curr.name);
        }
        prev[curr.name] = curr.value;
        return prev;
      }, {})
    client({
      method: 'PATCH',
      path: 'https://localhost:8443/server/1/run',
      entity: settingsObject,
      headers: {'Content-Type': 'application/json'}
    })
    .then(function(response) {
      console.log('response: ', response);
    });
  }
  fixValue(type, stringValue) {
    try {
      return JSON.parse(`{"val": ${stringValue}}`).val;
    } catch (e) {
      return stringValue;
    }
  }
  componentDidMount() {
    let self = this;
    fetch('https://localhost:8443/settings/byEngine?engine=zandronum')
      .then(response => response.json())
      .then(json => 
        Object.keys(json).reduce((y, key) => Object.assign(y, { 
          [key] : json[key].map(setting => {
            //console.debug(setting);
            let newVal = Object.assign({}, (setting.options && JSON.parse('{' + setting.options + '}')), setting);
            newVal.text = newVal.description; delete newVal['description'];
            newVal.value = self.fixValue(newVal.type, newVal.defaultValue); delete newVal['defaultValue'];
            return newVal;
          })
        }), {})
      )
      .then(json => {
        console.debug(json.map);
          self.setState({
            settings: json
          });
      })
  }
  render() {
    const initialSettings = this.state.settings;
    return (
      <table style={fullWidth}>
        <tbody>
          <tr>
            <td>
              <Console log={[{key: 0, text: 'aaa'},{key: 1, text: 'bbb'},{key: 2, text: 'ccc'}]} />
            </td>
          </tr>
          <tr>
            <td>
              <input name="config" type="file" /><input value="Load" type="submit" />
              <input name="__engine" value="zandronum" type="hidden" />
              <MapSettings settings={initialSettings.map} onChange={this.props.onChange} />
              <GameplaySettings settings={initialSettings.gameplay} onChange={this.props.onChange} />
              <ServerSettings settings={initialSettings.server} onChange={this.props.onChange} />
              <button onClick={this.onSave}>Save &amp; generate server</button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default SettingPage;