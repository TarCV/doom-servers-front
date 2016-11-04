import { connect } from 'react-redux'
import SettingPage from './App.js'
import { changeSetting } from './actions.js'

const mapStateToProps = (state, ownProps) => {
  return {initialSettings: state.server.initialSettings}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (change) => {
        dispatch(changeSetting(change.block, change.name, change.value))
    }
  }
}

const InitedSettingPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingPage)

export default InitedSettingPage