import React from 'react'

export default React.createClass({
  render() {
    if (this.props.confirmed) {
      return (
        <div>Registration was successful. Now you can sign in</div>
      )
    }
    return (
      <div>Failed to confirm an e-mail address. Confirmation token is expired or invalid.</div>
    )
  }
})
