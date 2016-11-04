import React, { Component } from 'react';
//import './App.css';
import _ from 'underscore';
import prefix from 'react-prefixer';

let labelCell = {
  textAlign: 'right',
  vtextAlign: 'top'
}
let valueCell = {
  textAlign: 'left',
  vtextAlign: 'top',
  width: '10em'
}
let tableFullWidth = {
  textAlign: 'left',
  width: '100%',
  border: 'none'
}
let columnsDiv = prefix({
  columnWidth: '25em'
})
let leftCaption = { captionSide: 'left' };
let hiddenStyle = { display: 'none' }
let fullWidth = { width: '100%' }
let alignTop = {
  vtextAlign: 'top'
}
let onChange = function (...args) {
  console.log(args);
};

let mapSettings = [
  { type: 'choice', name: '__mappreset', text: 'Preset', choices: [] },
  {
    type: 'choice', name: 'gametype1', text: 'Game mode', choices: [
      { name: 'Cooperative', value: 0 },
      { name: "Deathmatch", value: 1 },
      { name: "CTF", value: 2 }
    ]
  },
  { type: 'boolean', name: 'forcewater', text: 'Force water' },
  { type: 'boolean', name: 'sv_voodoo_spawns', text: 'Enable limited voodoo doll support' },
  { type: 'boolean', name: 'var_pushers', text: 'Enable wind (BOOM push/pull effects)' },
  { type: 'boolean', name: 'unknown1', text: 'Old style CTF compatibility mode' },
  { type: 'boolean', name: 'unknown2', text: 'Allow jumping' },
  { type: 'integer', name: 'sv_splashfactor', text: 'Splash factor', value: '1' },
  { type: 'integer', name: 'maxlostsouls', text: 'Maximum lost souls allowed to spawn', value: '20' },
  { type: 'boolean', name: 'var_friction', text: 'Enable ice (BOOM friction effects)' },
  { type: 'boolean', name: 'unknown3', text: 'Infinitely tall actors' }
]

let gameplaySettings = [
  { type: 'choice', name: 'logicpreset', text: 'Preset', choices: [] },
  {
    type: 'choice', name: 'skill', text: 'Skill (affects item spawn, ammo and&nbsp; monster settings)', value: 2, choices: [
      { name: "I'm Too Young To Die", value: 0 },
      { name: "Hey, Not Too Rough", value: 1 },
      { name: "Hurt Me Plenty", value: 2 },
      { name: "Ultra-Violence", value: 3 },
      { name: "Nightmare!", value: 4 }
    ]
  },
  { type: 'boolean', name: 'gametype2', text: 'TDM/Survival' },
  { type: 'integer', name: 'killlimit', text: 'Kill limit (COOP)', value: '0' },
  { type: 'integer', name: 'maxlives', text: 'Player lives (SURVIVAL)', value: '0' },
  { type: 'integer', name: 'fraglimit', text: 'Frag limit', value: '0' },
  { type: 'integer', name: 'timelimit', text: 'Time limit', value: '0' },
  { type: 'boolean', name: 'overtime', text: 'Overtime on tie' },
  { type: 'integer', name: 'minplayers', text: 'Minimal players required (missing will be replaced by bots)', value: '0' },
  { type: 'boolean', name: 'removebotswhenhumans', text: 'Remove all bots when a human enters' },
  { type: 'integer', name: 'maxplayers', text: 'Maximum active players', value: '16' },
  { type: 'integer', name: 'maxteams', text: 'Maximum active teams', value: '4' },
  { type: 'integer', name: 'maxplayersperteam', text: 'Maximum players per team', value: '0' },
  { type: 'integer', name: 'teamscorelimit', text: 'Team score limit', value: '0' },
  { type: 'integer', name: 'teamdamage', text: 'Friendly fire factor', value: '0' },
  { type: 'integer', name: 'sv_gravity1', text: 'Gravity', value: '1.0' },
  { type: 'integer', name: 'sv_aircontrol', text: 'Air control', value: '0' },
  { type: 'integer', name: 'sv_deathlimit', text: 'Seconds allowed to stay dead', value: '180' },
  {
    type: 'choice', name: 'sv_forcerespawn', text: 'If a player remained dead too long (DM)', value: 1, choices: [
      { value: 0, name: 'make spectator' },
      { value: 1, name: 'force respawn' }
    ]
  },
  { type: 'boolean', name:   'unknown37', text: 'Spawn health (DM)' },
  { type: 'boolean', name: 'unknown38', text: 'Spawn powerups (DM)' },
  { type: 'boolean', name: 'unknown39', text: 'Weapon stay (DM)' },
  { type: 'boolean', name: 'unknown40', text: 'Kill on exit (DM)' },
  { type: 'boolean', name: 'unknown41', text: 'Falling damage as in ZDoom' },
  { type: 'boolean', name: 'unknown42', text: 'Falling damage as in Hexen' },
  { type: 'boolean', name: 'unknown43', text: 'Advance map on exit (DM)' },
  { type: 'boolean', name: 'unknown44', text: 'Spawn farthest (DM)' },
  { type: 'boolean', name: 'unknown1', text: 'Spawn armor (DM)' },
  { type: 'boolean', name: 'unknown2', text: 'Allow exit (DM)' },
  { type: 'boolean', name: 'unknown3', text: 'Infinite ammo' },
  { type: 'boolean', name: 'unknown4', text: 'Spawn monsters' },
  { type: 'boolean', name: 'unknown5', text: 'Respawn monsters' },
  { type: 'boolean', name: 'unknown6', text: 'Respawn items' },
  { type: 'boolean', name: 'unknown7', text: 'Fast monsters' },
  { type: 'boolean', name: 'unknown8', text: 'Allow freelook' },
  { type: 'boolean', name: 'unknown9', text: "Respawn 'Mega' items" },
  { type: 'boolean', name: 'unknown10', text: 'Spawn spheres' },
  { type: 'boolean', name: 'unknown11', text: 'Allow crosshair' },
  { type: 'boolean', name: 'unknown12', text: 'Old style thrusting' },
  { type: 'boolean', name: 'unknown13', text: 'Keys stay in team modes' },
  { type: 'boolean', name: 'unknown14', text: 'Hide player countries' },
  { type: 'boolean', name: 'sv_teamautoaim', text: 'Exclude teammates from autoaim' },
  { type: 'boolean', name: 'unknown15', text: 'Missiles can teleport' },
  { type: 'boolean', name: 'unknown16', text: 'Players drop weapons when they die' },
  { type: 'boolean', name: 'unknown17', text: 'Spawn where died (COOP)' },
  { type: 'boolean', name: 'unknown18', text: 'Respawn barrels' },
  { type: 'boolean', name: 'unknown19', text: 'Player spawn protection (DM)' },
  { type: 'boolean', name: 'unknown20', text: 'Nice weapons (COOP)' },
  { type: 'boolean', name: 'unknown21', text: 'Keep keys' },
  { type: 'boolean', name: 'unknown22', text: 'Double monsters strength' },
  { type: 'boolean', name: 'unknown23', text: 'Double monsters damage' },
  { type: 'boolean', name: 'unknown24', text: 'Classic pickup sounds' },
  { type: 'boolean', name: 'unknown25', text: 'Classic sound limit' },
  { type: 'boolean', name: 'unknown26', text: 'Classic wallrunning' },
  { type: 'boolean', name: 'unknown27', text: 'Classic sound cutoff' },
  { type: 'boolean', name: 'unknown28', text: 'Classic movement' },
  { type: 'boolean', name: 'unknown29', text: 'Classic vertical movement' },
  { type: 'boolean', name: 'unknown30', text: 'Classic weapon damage' },
  { type: 'boolean', name: 'unknown31', text: 'Enable team starts' },
  { type: 'boolean', name: 'unknown32', text: 'Spawn keys in team modes' },
  { type: 'boolean', name: 'unknown33', text: 'Assign team keys' },
  { type: 'boolean', name: 'unknown34', text: 'Vampire mode' },
  { type: 'boolean', name: 'unknown35', text: 'Instant weapon switching' },
  { type: 'boolean', name: 'unknown36', text: 'Show target names' }
]

let serverSettings = [
  { type: 'password', name: 'password', text: 'Join password (makes server private):\nWARNING:password is removed automatically when going to stand up mode'},
  { type: 'boolean', name: 'sv_randmaps', text: 'randomize map order' },
  { type: 'boolean', name: 'sv_vote_randmap', text: 'Enable random map voting' },
  { type: 'boolean', name: 'sv_vote_reset', text: 'Enable map reset voting' },
  { type: 'boolean', name: 'sv_vote_map', text: 'Enable map change voting' },
  { type: 'boolean', name: 'sv_vote_randcaps', text: 'Enable skip maps voting' },
  { type: 'boolean', name: 'sv_vote_kick', text: 'Enable kick voting' },
  { type: 'boolean', name: 'specs_dont_disturb_players', text: 'Hide spectator messages from active players' }
]

class ServerPair extends Component {
  render() {
    return (
      <table style={tableFullWidth}>
        <tbody>
          <tr>
            <td style={labelCell}><label htmlFor={this.props.id}>{this.props.text}</label></td>
            <td style={valueCell}>{this.props.children}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

class ServerSetting extends Component {
  componentWillMount() {
    const id = this.props.id || _.uniqueId("setting-");
    const setting = this.props.setting || this.props
    this.setState({ id: id, setting: setting });
  }

  renderBoolean() {
    const id = this.state.id;
    return (
      <ServerPair id={id} text={this.state.setting.text}>
        <input id={id} checked={this.state.setting.value} onChange={this.props.onChange} type="checkbox" />
      </ServerPair>
    );
  }
  renderInteger() {
    const id = this.state.id;
    return (
      <ServerPair id={id} text={this.state.setting.text}>
        <input id={id} value={this.state.setting.value} onChange={this.props.onChange} type="number" />
      </ServerPair>
    );
  }
  renderPassword() {
    const id = this.state.id;
    return (
      <ServerPair id={id} text={this.state.setting.text}>
        <input id={id} value={this.state.setting.value} onChange={this.props.onChange} type="password" />
      </ServerPair>
    );
  }
  renderChoice() {
    const id = this.state.id;
    return (
      <ServerPair id={id} text={this.state.setting.text}>
        <select onChange={this.props.onChange} value={this.state.setting.value}>
          {
            this.state.setting.choices.map(function (choice) {
              return <option key={choice.value} value={choice.value}>{choice.name}</option>;
            })
          }
        </select>
      </ServerPair>
    );
  }

  typeToRenderer(type) {
    switch (type) {
      case "boolean":
        return this.renderBoolean;
      case "integer":
        return this.renderInteger;
      case "password":
        return this.renderPassword;
      case "choice":
        return this.renderChoice;
      default:
        return "ServerPair";
    }
  }

  render() {
    const renderer = this.typeToRenderer(this.state.setting.type)
    return renderer.apply(this)
  }
}

class Settings extends Component {
  render() {
    const onChangeHandler = this.props.onChange;
    const blockName = this.props.name;
    let items = this.props.settings.slice()
    items.sort((a, b) => a.text.localeCompare(b.text))
    items = items.map((setting) => {
      const itemOnChange = function (...args) { onChangeHandler.apply(null, [{block: blockName, name: setting.name, args: args}]) }
      return <ServerSetting key={setting.name} setting={setting} onChange={itemOnChange} />
    })
    return <div style={columnsDiv}>{items}</div>
  }
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

        <Settings settings={this.props.settings} name='map' onChange={this.props.onChange} />
      </fieldset>
    )
  }
}

class GameplaySettings extends Component {
  render() {
    return (
      <fieldset>
        <legend>Gameplay settings</legend>
        <Settings settings={this.props.settings} name='gameplay' onChange={this.props.onChange} />
      </fieldset>
    )
  }
}

class ServerSettings extends Component {
  render() {
    return (
      <fieldset><legend>Server settings</legend>
        <Settings settings={this.props.settings} name='server' onChange={this.props.onChange} />
      </fieldset>
    )
  }
}

class App extends Component {
  render() {
    return (
      <table style={fullWidth}>
        <tbody>
          <tr>
            <td>
              <form method="post" action="process.php">Load settings from file:
        <input name="config" type="file" /><input value="Load" type="submit" />
              </form>
              <form method="post" action="process.php">
                <MapSettings settings={mapSettings} onChange={onChange} />
                <GameplaySettings settings={gameplaySettings} onChange={onChange} />
                <ServerSettings settings={serverSettings} onChange={onChange} />
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
export default App;
