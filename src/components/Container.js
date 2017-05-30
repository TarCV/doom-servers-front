import React from 'react'

export default React.createClass({
  render() {
    return (
        <div className="container-outside" {...this.props}>
          <div className="container-top"><h1>{this.props.title}</h1></div>
          <div className="container-content">
            {this.props.children}
          </div>
          <div className="container-bottom">&nbsp;</div>
        </div>
    )
  }
})
