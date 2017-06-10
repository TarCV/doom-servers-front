import React, { Component } from 'react';
import { BlockTable } from '../components/BlockTable';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.mergeValues = this.mergeValues.bind(this);
  }
  onChange(e) {
    this.setState((prevState) => {
      const diff = {};
      diff[e.name] = e.value;
      return {
        form: Object.assign(prevState.form, diff)
      };
    });
  }
  mergeValues() {
    const defaults = this.props.defaults ? this.props.defaults : {};
    return Object.assign({}, defaults, this.state.form);
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.mergeValues());
  }
  render() {
    const merged = this.mergeValues();
    const form = this.props.form.map(setting => {
      if (merged.hasOwnProperty(setting.name)) {
        return Object.assign({}, setting, {
          value: merged[setting.name].value
        })
      }
      return setting;
    })
    return (
      <form onSubmit={this.onSubmit}>
        <div style={{ textAlign: 'center' }}>
          <BlockTable
            name="form" multiColumn={false}
            settings={ form } onChange={this.onChange}
            style={{ margin: '0 auto', width: 'auto' }}
          />
          <input type='submit' value={this.props.submitTitle} />
        </div>
      </form>
    );
  }
}
